// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../src/application/wallet/BTC.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var List = require("bs-platform/lib/js/list.js");
var Bitcoin = require("../../src/ffi/Bitcoin.bs.js");
var Helpers = require("../helpers/Helpers.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var BitcoindClient = require("../../src/application/wallet/BitcoindClient.bs.js");

Helpers.enableHttpRequests(/* () */0);

var keyA = Bitcoin.ECPair[/* makeRandomWithNetwork */0](BitcoinjsLib.networks.testnet);

var keyB = Bitcoin.ECPair[/* makeRandomWithNetwork */0](BitcoinjsLib.networks.testnet);

var tenSats = BTC.fromSatoshis(/* int64 */[
      /* hi */0,
      /* lo */10
    ]);

describe.skip("faucet", (function () {
        return Jest.testPromise(undefined, "Can fund an address", (function () {
                      return Helpers.faucet(/* :: */[
                                      /* tuple */[
                                        keyA.getAddress(),
                                        tenSats
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          keyB.getAddress(),
                                          tenSats
                                        ],
                                        /* [] */0
                                      ]
                                    ]).then((function () {
                                      return BitcoindClient.getUTXOs(/* record */[
                                                  /* bitcoindUrl */"http://localhost:18322",
                                                  /* rpcUser */"bitcoin",
                                                  /* rpcPassword */"bitcoin"
                                                ], /* :: */[
                                                  keyA.getAddress(),
                                                  /* :: */[
                                                    keyB.getAddress(),
                                                    /* [] */0
                                                  ]
                                                ]);
                                    })).then((function (utxos) {
                                    return Promise.resolve(Jest.Expect[/* toEqual */12](/* tuple */[
                                                    tenSats,
                                                    tenSats
                                                  ], Jest.Expect[/* expect */0](/* tuple */[
                                                        List.hd(utxos)[/* amount */3],
                                                        List.nth(utxos, 1)[/* amount */3]
                                                      ])));
                                  }));
                    }));
      }));

/*  Not a pure module */
