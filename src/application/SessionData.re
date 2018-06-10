open PrimitiveTypes;

type t = {
  userId,
  appPrivateKey: string,
  issuerKeyPair: Bitcoin.ECPair.t,
  storagePrefix: string,
  masterKeyChain: Bitcoin.HDNode.t,
  network: Network.t,
};

let fromUserData = userData =>
  switch (Js.Nullable.toOption(userData##username)) {
  | None => None
  | Some(blockstackId) =>
    let issuerKeyPair =
      Utils.keyPairFromPrivateKey(
        Network.bitcoinNetwork(Testnet),
        userData##appPrivateKey,
      );
    Some({
      appPrivateKey: userData##appPrivateKey,
      userId: blockstackId |> UserId.fromString,
      issuerKeyPair,
      network: Testnet,
      storagePrefix:
        UserInfo.storagePrefix(
          ~appPubKey=issuerKeyPair |> Utils.publicKeyFromKeyPair,
        ),
      masterKeyChain:
        Bitcoin.HDNode.make(
          issuerKeyPair,
          Utils.bufFromHex(
            "c8bce5e6dac6f931af17863878cce2ca3b704c61b3d775fe56881cc8ff3ab1cb",
          ),
        ),
    });
  };