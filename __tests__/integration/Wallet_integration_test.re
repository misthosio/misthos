Helpers.enableHttpRequests();

open Jest;

open Expect;

open WalletTypes;

open Event;

open WalletHelpers;

let () =
  describe("integration", () => {
    let (userA, userB, userC) = G.threeUserSessions();
    let log =
      L.(
        createVenture(userA)
        |> withFirstPartner(userA)
        |> withAccount(~supporter=userA)
        |> withCustodian(userA, ~supporters=[userA])
        |> withPartner(userB, ~supporters=[userA])
        |> withCustodian(userB, ~supporters=[userA, userB])
        |> withAccountKeyChain([userA, userB])
      );
    let accountIdx = AccountIndex.default;
    let ventureId = log |> L.ventureId;
    let wallet = log |> constructState;
    let ((address1, address2), (wallet, log)) =
      (wallet, log) |> collectNextTwoAddresses(userA);
    let log =
      L.(
        log
        |> withPartner(userC, ~supporters=[userA, userB])
        |> withCustodian(userC, ~supporters=[userA, userB])
        |> withAccountKeyChain(~keyChainIdx=1, [userA, userB, userC])
      );
    let oneKeyChainWallet = ref(wallet);
    let wallet = log |> constructState;
    let ((address3, address4), (wallet, _)) =
      (wallet, log) |> collectNextTwoAddresses(userC);
    let twoKeyChainWallet = ref(wallet);
    let address1Satoshis = BTC.fromSatoshis(10000L);
    let address2Satoshis = BTC.fromSatoshis(10000L);
    let address3Satoshis = BTC.fromSatoshis(10000L);
    let address4Satoshis = BTC.fromSatoshis(15000L);
    let oneKeyChainWalletTotal =
      address1Satoshis |> BTC.plus(address2Satoshis);
    let oneKeyChainSpendAmount = BTC.fromSatoshis(6000L);
    let oneKeyChainExpectedFee = BTC.fromSatoshis(1892L);
    let twoKeyChainWalletTotal =
      oneKeyChainWalletTotal
      |> BTC.plus(address3Satoshis)
      |> BTC.plus(address4Satoshis)
      |> BTC.minus(oneKeyChainSpendAmount)
      |> BTC.minus(oneKeyChainExpectedFee);
    let twoKeyChainSpendAmount = BTC.fromSatoshis(25000L);
    beforeAllPromise(~timeout=40000, () =>
      Js.Promise.(
        Helpers.faucet([
          (address1, address1Satoshis),
          (address2, address2Satoshis),
          (address3, address3Satoshis),
          (address4, address4Satoshis),
        ])
        |> then_((_) =>
             oneKeyChainWallet^
             |> Wallet.preparePayoutTx(
                  userA,
                  accountIdx,
                  [(Helpers.faucetAddress, oneKeyChainSpendAmount)],
                  BTC.fromSatoshis(10L),
                )
           )
        |> then_(({data, processId} as event: Event.Payout.Proposed.t) => {
             oneKeyChainWallet :=
               oneKeyChainWallet^ |> Wallet.apply(PayoutProposed(event));
             twoKeyChainWallet :=
               twoKeyChainWallet^ |> Wallet.apply(PayoutProposed(event));
             all2((
               processId |> resolve,
               PayoutTransaction.finalize([data.payoutTx], Network.Regtest)
               |> Helpers.broadcastTransaction,
             ));
           })
        |> then_(((processId, txId)) => {
             oneKeyChainWallet :=
               oneKeyChainWallet^
               |> Wallet.apply(
                    PayoutBroadcast(
                      Payout.Broadcast.make(~processId, ~transactionId=txId),
                    ),
                  );
             twoKeyChainWallet :=
               twoKeyChainWallet^
               |> Wallet.apply(
                    PayoutBroadcast(
                      Payout.Broadcast.make(~processId, ~transactionId=txId),
                    ),
                  );
             resolve();
           })
      )
    );
    testPromise("1 of 2 wallet", () =>
      Js.Promise.(
        oneKeyChainWallet^
        |> WalletHelpers.getExposedAddresses
        |> Helpers.getUTXOs
        |> then_(utxos =>
             utxos
             |> List.fold_left(
                  (total, utxo: WalletTypes.utxo) =>
                    total |> BTC.plus(utxo.amount),
                  BTC.zero,
                )
             |> expect
             |> toEqual(
                  oneKeyChainWalletTotal
                  |> BTC.minus(oneKeyChainSpendAmount)
                  |> BTC.minus(oneKeyChainExpectedFee),
                )
             |> resolve
           )
      )
    );
    testPromise(~timeout=80000, "2 of 3 wallet", () =>
      Js.Promise.(
        twoKeyChainWallet^
        |> Wallet.preparePayoutTx(
             userA,
             accountIdx,
             [(Helpers.faucetAddress, twoKeyChainSpendAmount)],
             BTC.fromSatoshis(10L),
           )
        |> then_(({data} as event: Event.Payout.Proposed.t) => {
             let payoutTx =
               PayoutTransaction.signPayout(
                 ~ventureId,
                 ~userId=userB.userId,
                 ~masterKeyChain=userB.masterKeyChain,
                 ~accountKeyChains=wallet.accountKeyChains,
                 ~payoutTx=data.payoutTx,
                 ~network=Network.Regtest,
               )
               |> PayoutTransaction.getSignedExn;
             Js.Promise.all2((
               resolve(
                 twoKeyChainWallet^ |> Wallet.apply(PayoutProposed(event)),
               ),
               PayoutTransaction.finalize(
                 [data.payoutTx, payoutTx],
                 Network.Regtest,
               )
               |> Helpers.broadcastTransaction,
             ));
           })
        |> then_(((wallet, _broadcastResult)) => {
             let expectedFee = BTC.fromSatoshis(5810L);
             wallet
             |> WalletHelpers.getExposedAddresses
             |> Helpers.getUTXOs
             |> then_(utxos =>
                  utxos
                  |> List.fold_left(
                       (total, utxo: WalletTypes.utxo) =>
                         total |> BTC.plus(utxo.amount),
                       BTC.zero,
                     )
                  |> expect
                  |> toEqual(
                       twoKeyChainWalletTotal
                       |> BTC.minus(twoKeyChainSpendAmount)
                       |> BTC.minus(expectedFee),
                     )
                  |> resolve
                );
           })
      )
    );
  });