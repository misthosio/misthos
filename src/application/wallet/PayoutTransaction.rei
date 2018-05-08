open PrimitiveTypes;

open WalletTypes;

exception NotEnoughFunds;

exception NotEnoughSignatures;

exception NoSignaturesForInput;

type input = Network.txInput;

type t = {
  txHex: string,
  usedInputs: list((int, input)),
  changeAddress: option(string),
};

type summary = {
  reserved: BTC.t,
  spent: BTC.t,
  fee: BTC.t,
};

let summary: t => summary;

let build:
  (
    ~mandatoryInputs: list(input),
    ~allInputs: list(input),
    ~destinations: list((string, BTC.t)),
    ~satsPerByte: BTC.t,
    ~changeAddress: Address.t,
    ~network: Network.t
  ) =>
  t;

type signResult =
  | Signed(t)
  | NotSigned;

let getSignedExn: signResult => t;

let signPayout:
  (
    ~ventureId: ventureId,
    ~userId: userId,
    ~masterKeyChain: Bitcoin.HDNode.t,
    ~accountKeyChains: list(
                         (
                           accountIdx,
                           list((accountKeyChainIdx, AccountKeyChain.t)),
                         ),
                       ),
    ~payoutTx: t,
    ~network: Network.t
  ) =>
  signResult;

let finalize: (list(t), Network.t) => Bitcoin.Transaction.t;

let encode: t => Js.Json.t;

let decode: Js.Json.t => t;
