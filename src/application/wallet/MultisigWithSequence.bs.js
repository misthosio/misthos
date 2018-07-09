// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Bitcoin = require("../../ffi/Bitcoin.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var BitcoinOps = require("bitcoin-ops");
var BitcoinjsLib = require("bitcoinjs-lib");

function encode(m, pubkeys, sequence) {
  var n = pubkeys.length;
  return BitcoinjsLib.script.compile(Belt_Array.concatMany(/* array */[
                  /* array */[
                    BitcoinOps.OP_DEPTH,
                    BitcoinOps.OP_2,
                    BitcoinOps.OP_EQUAL,
                    BitcoinOps.OP_IF,
                    BitcoinjsLib.script.number.encode(sequence),
                    BitcoinOps.OP_CHECKSEQUENCEVERIFY,
                    BitcoinOps.OP_DROP,
                    BitcoinOps.OP_1,
                    BitcoinOps.OP_ELSE,
                    Curry._1(Bitcoin.Ops[/* numbers */0], m),
                    BitcoinOps.OP_ENDIF
                  ],
                  pubkeys,
                  /* array */[
                    Curry._1(Bitcoin.Ops[/* numbers */0], n),
                    BitcoinOps.OP_CHECKMULTISIG
                  ]
                ]));
}

exports.encode = encode;
/* Bitcoin Not a pure module */
