// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var List = require("bs-platform/lib/js/list.js");
var Utils = require("../../../src/utils/Utils.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Generators = require("../../helpers/Generators.bs.js");
var NewAddress = require("../../../src/application/wallet/NewAddress.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var PrimitiveTypes = require("../../../src/application/PrimitiveTypes.bs.js");
var CustodianKeyChain = require("../../../src/application/wallet/CustodianKeyChain.bs.js");

function testCoordinates(expected, param) {
  var addressIdx = param[4];
  var chainIdx = param[3];
  var coSignerIdx = param[2];
  var accountKeyChainIdx = param[1];
  var accountIdx = param[0];
  return Jest.test("should match", (function () {
                return Jest.Expect[/* toEqual */12](expected, Jest.Expect[/* expect */0](/* tuple */[
                                WalletTypes.AccountIndex[/* toInt */0](accountIdx),
                                WalletTypes.AccountKeyChainIndex[/* toInt */0](accountKeyChainIdx),
                                WalletTypes.CoSignerIndex[/* toInt */0](coSignerIdx),
                                WalletTypes.ChainIndex[/* toInt */0](chainIdx),
                                WalletTypes.AddressIndex[/* toInt */0](addressIdx)
                              ]));
              }));
}

function findCoSignerIndex(param, param$1) {
  var coSigner = param[/* userId */0];
  return Js_option.getExn(List.find(Js_option.isSome, List.mapi((function (i, param) {
                        var match = PrimitiveTypes.UserId[/* eq */5](param[0], coSigner);
                        if (match) {
                          return /* Some */[i];
                        } else {
                          return /* None */0;
                        }
                      }), List.sort((function (param, param$1) {
                            return Caml_primitive.caml_string_compare(Utils.bufToHex(param[1].getPublicKeyBuffer()), Utils.bufToHex(param$1[1].getPublicKeyBuffer()));
                          }), List.map((function (chain) {
                                return /* tuple */[
                                        chain[0],
                                        CustodianKeyChain.hdNode(chain[1])
                                      ];
                              }), param$1[/* custodianKeyChains */3])))));
}

describe("Coordinates", (function () {
        var match = Generators.twoUserSessions(/* () */0);
        var user1 = match[0];
        var accountKeyChain = Generators.accountKeyChain(/* :: */[
              user1,
              /* :: */[
                match[1],
                /* [] */0
              ]
            ]);
        var coSignerIdx = findCoSignerIndex(user1, accountKeyChain);
        describe("first coordinates", (function () {
                return testCoordinates(/* tuple */[
                            0,
                            0,
                            coSignerIdx,
                            1,
                            0
                          ], NewAddress.Coordinates[/* nextInternal */1](user1[/* userId */0], /* [] */0, accountKeyChain));
              }));
        describe("next coordinates", (function () {
                var coordinates1 = NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* [] */0, accountKeyChain);
                var coordinates2 = NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* :: */[
                      coordinates1,
                      /* [] */0
                    ], accountKeyChain);
                return testCoordinates(/* tuple */[
                            0,
                            0,
                            coSignerIdx,
                            0,
                            2
                          ], NewAddress.Coordinates[/* nextExternal */2](user1[/* userId */0], /* :: */[
                                coordinates2,
                                /* :: */[
                                  coordinates1,
                                  /* [] */0
                                ]
                              ], accountKeyChain));
              }));
        return /* () */0;
      }));

var G = 0;

var E = 0;

exports.G = G;
exports.E = E;
exports.testCoordinates = testCoordinates;
exports.findCoSignerIndex = findCoSignerIndex;
/*  Not a pure module */
