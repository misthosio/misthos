// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../utils/Utils.bs.js");
var Network = require("./wallet/Network.bs.js");
var UserInfo = require("./UserInfo.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var PrimitiveTypes = require("./PrimitiveTypes.bs.js");

function fromUserData(userData) {
  var match = userData.username;
  if (match == null) {
    return /* None */0;
  } else {
    var issuerKeyPair = Utils.keyPairFromPrivateKey(Network.bitcoinNetwork(/* Testnet */1), userData.appPrivateKey);
    return /* Some */[/* record */[
              /* userId */PrimitiveTypes.UserId[/* fromString */1](match),
              /* appPrivateKey */userData.appPrivateKey,
              /* issuerKeyPair */issuerKeyPair,
              /* storagePrefix */UserInfo.storagePrefix(Utils.publicKeyFromKeyPair(issuerKeyPair)),
              /* masterKeyChain */new BitcoinjsLib.HDNode(issuerKeyPair, Utils.bufFromHex("c8bce5e6dac6f931af17863878cce2ca3b704c61b3d775fe56881cc8ff3ab1cb")),
              /* network : Testnet */1
            ]];
  }
}

exports.fromUserData = fromUserData;
/* Utils Not a pure module */
