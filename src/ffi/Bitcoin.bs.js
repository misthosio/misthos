// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var BitcoinOps = require("./BitcoinOps.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");

var BigInteger = /* module */[];

var Crypto = /* module */[];

var Networks = /* module */[];

var Transaction = /* module */[];

function makeRandomWithNetwork(network) {
  return BitcoinjsLib.ECPair.makeRandom({
              network: network
            });
}

var ECPair = /* module */[/* makeRandomWithNetwork */makeRandomWithNetwork];

function fromBase58(base58) {
  try {
    return BitcoinjsLib.bip32.fromBase58(base58, BitcoinjsLib.networks.bitcoin);
  }
  catch (exn){
    return BitcoinjsLib.bip32.fromBase58(base58, BitcoinjsLib.networks.testnet);
  }
}

var HDNode = /* module */[/* fromBase58 */fromBase58];

function toBase58Check(hash, network) {
  return BitcoinjsLib.address.toBase58Check(hash, network.pubKeyHash);
}

function fromHDNode(node) {
  var network = node.network;
  var hash = BitcoinjsLib.crypto.hash160(node.publicKey);
  return BitcoinjsLib.address.toBase58Check(hash, network.pubKeyHash);
}

function fromKeyPair(key) {
  var network = key.network;
  var hash = BitcoinjsLib.crypto.hash160(key.publicKey);
  return BitcoinjsLib.address.toBase58Check(hash, network.pubKeyHash);
}

var Address = /* module */[
  /* toBase58Check */toBase58Check,
  /* fromHDNode */fromHDNode,
  /* fromKeyPair */fromKeyPair
];

var TxBuilder = /* module */[];

var Ops = /* module */[/* numbers */BitcoinOps.numbers];

var Payments = /* module */[];

var $$Number = /* module */[];

var Signature = /* module */[];

var Script = /* module */[
  /* Number */$$Number,
  /* Signature */Signature
];

exports.BigInteger = BigInteger;
exports.Crypto = Crypto;
exports.Networks = Networks;
exports.Transaction = Transaction;
exports.ECPair = ECPair;
exports.HDNode = HDNode;
exports.Address = Address;
exports.TxBuilder = TxBuilder;
exports.Ops = Ops;
exports.Payments = Payments;
exports.Script = Script;
/* BitcoinOps Not a pure module */
