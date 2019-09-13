// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Address = require("../../../src/application/wallet/Address.bs.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Generators = require("../../helpers/Generators.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");

function testCoordinates(expected, param) {
  var addressIdx = param[4];
  var chainIdx = param[3];
  var coSignerIdx = param[2];
  var keyChainIdent = param[1];
  var accountIdx = param[0];
  return Jest.test("should match", (function (param) {
                return Jest.Expect[/* toEqual */12](expected, Jest.Expect[/* expect */0](/* tuple */[
                                WalletTypes.AccountIndex[/* toInt */0](accountIdx),
                                keyChainIdent,
                                WalletTypes.CoSignerIndex[/* toInt */0](coSignerIdx),
                                WalletTypes.ChainIndex[/* toInt */0](chainIdx),
                                WalletTypes.AddressIndex[/* toInt */0](addressIdx)
                              ]));
              }));
}

var user1 = Fixtures.threeUserSessions[0];

var accountKeyChain = Generators.accountKeyChain(undefined, undefined, /* :: */[
      user1,
      /* :: */[
        Fixtures.threeUserSessions[1],
        /* :: */[
          Fixtures.threeUserSessions[2],
          /* [] */0
        ]
      ]
    ]);

Jest.describe("Coordinates", (function (param) {
        Jest.describe("first coordinates", (function (param) {
                return testCoordinates(/* tuple */[
                            0,
                            "4cb9efbdaabe81bbb58465f055f30d37fd3b4555505c4349c8e0233e4a0243a3",
                            2,
                            1,
                            0
                          ], Address.Coordinates[/* nextInternal */1](user1[/* userId */0], /* [] */0, accountKeyChain));
              }));
        return Jest.describe("next coordinates", (function (param) {
                      var coordinates1 = Address.Coordinates[/* nextExternal */2](user1[/* userId */0], /* [] */0, accountKeyChain);
                      var coordinates2 = Address.Coordinates[/* nextExternal */2](user1[/* userId */0], /* :: */[
                            coordinates1,
                            /* [] */0
                          ], accountKeyChain);
                      return testCoordinates(/* tuple */[
                                  0,
                                  "4cb9efbdaabe81bbb58465f055f30d37fd3b4555505c4349c8e0233e4a0243a3",
                                  2,
                                  0,
                                  2
                                ], Address.Coordinates[/* nextExternal */2](user1[/* userId */0], /* :: */[
                                      coordinates2,
                                      /* :: */[
                                        coordinates1,
                                        /* [] */0
                                      ]
                                    ], accountKeyChain));
                    }));
      }));

Jest.describe("make", (function (param) {
        return Jest.test("returns an address", (function (param) {
                      var coordinates = Address.Coordinates[/* nextExternal */2](user1[/* userId */0], /* [] */0, accountKeyChain);
                      return Jest.Expect[/* toEqual */12](/* record */[
                                  /* nCoSigners */2,
                                  /* nPubKeys */3,
                                  /* coordinates */coordinates,
                                  /* witnessScript */"74528763028031b2755167526821020e9782b2f322710b493e068305a89f5ea251a599b1be30aed66eb3f9ef77f5dc210211f5757d29e19d91df628e51e219d2c08f09100d12be099e5fa5fe9bda66ea842103ecd7d25cf95c0bc67c0acd8bbb02e4d89a68bd7159703b68c8ac15bb281099ea53ae",
                                  /* redeemScript */"00209d12469dbbeeacbaa04a10495d25b467aa7aa8b1c449389b77b13e07cd5d6a38",
                                  /* displayAddress */"2NBym6HG6byx3hvW8bwhWo4mEHBW2qjzoAU",
                                  /* sequence */12672
                                ], Jest.Expect[/* expect */0](Address.make(coordinates, accountKeyChain)));
                    }));
      }));

Jest.describe("encode / decode", (function (param) {
        return Jest.test("Can handle old and new encode format", (function (param) {
                      var coordinates = Address.Coordinates[/* nextExternal */2](user1[/* userId */0], /* [] */0, accountKeyChain);
                      var address = /* record */[
                        /* nCoSigners */2,
                        /* nPubKeys */3,
                        /* coordinates */coordinates,
                        /* witnessScript */"5221020e9782b2f322710b493e068305a89f5ea251a599b1be30aed66eb3f9ef77f5dc210211f5757d29e19d91df628e51e219d2c08f09100d12be099e5fa5fe9bda66ea842103ecd7d25cf95c0bc67c0acd8bbb02e4d89a68bd7159703b68c8ac15bb281099ea53ae",
                        /* redeemScript */"0020037ff9e769b4e13e6d47567412cb338195342685c3a50bd0eb0be0408f3da5c9",
                        /* displayAddress */"2NEdi7RV4F4Ce7hNmEHQRpcSCf2ZUacfDMw",
                        /* sequence */undefined
                      ];
                      return Jest.Expect[/* toEqual */12](address, Jest.Expect[/* expect */0](Address.decode(Address.encode(address))));
                    }));
      }));

var G = 0;

var E = 0;

exports.G = G;
exports.E = E;
exports.testCoordinates = testCoordinates;
/* accountKeyChain Not a pure module */
