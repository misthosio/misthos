open PrimitiveTypes;

open Bitcoin;

let userSession = (userId, keyPair) : Session.Data.t => {
  let appPubKey = keyPair |> Utils.publicKeyFromKeyPair;
  let chainCode = appPubKey |. String.sub(0, 64) |> Utils.bufFromHex;
  {
    userId,
    appPrivateKey: keyPair |> ECPair.toWIF,
    issuerKeyPair: keyPair,
    storagePrefix: UserInfo.storagePrefix(~appPubKey),
    masterKeyChain: HDNode.make(keyPair, chainCode),
    network: Testnet,
  };
};

let threeUserSessions = {
  let (keyA, keyB, keyC) = (
    ECPair.fromWIFWithNetwork(
      "cUVTgxrs44T7zVon5dSDicBkBRjyfLwL7RF1RvR7n94ar3HEaLs1",
      Networks.testnet,
    ),
    ECPair.fromWIFWithNetwork(
      "cPMRPo3fXGehCmFC5QsSFcZmYivsFtLVexxWi22CFwocvndXLqP1",
      Networks.testnet,
    ),
    ECPair.fromWIFWithNetwork(
      "cPfdeLvhwvAVRRM5wiEWopWviGG65gbxQCHdtFL56PYUJXsTYixf",
      Networks.testnet,
    ),
  );
  (
    userSession("user1" |> UserId.fromString, keyA),
    userSession("user2" |> UserId.fromString, keyB),
    userSession("user3" |> UserId.fromString, keyC),
  );
};

let createVenture = user =>
  Generators.Log.make(
    user,
    {
      ...Generators.Event.createVenture(user),
      ventureId: VentureId.fromString("fixedVentureId"),
    },
  );