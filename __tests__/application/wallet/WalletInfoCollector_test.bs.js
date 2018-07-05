// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Generators = require("../../helpers/Generators.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");
var PrimitiveTypes = require("../../../src/application/PrimitiveTypes.bs.js");
var WalletInfoCollector = require("../../../src/application/wallet/WalletInfoCollector.bs.js");

function constructState(log) {
  return Generators.Log[/* reduce */1]((function (s, param) {
                return WalletInfoCollector.apply(param[/* event */0], s);
              }), WalletInfoCollector.make(/* () */0), log);
}

describe("WalletInfoCollector-addressInfo", (function () {
        return Fixtures.withCached(/* None */0, /* None */0, "WalletInfoCollector-addressInfo", "classifies addresses", (function () {
                      return Generators.withUserSessions(5);
                    }), (function (sessions) {
                      var match = Generators.fiveUserSessionsFromArray(sessions);
                      var user5 = match[4];
                      var user4 = match[3];
                      var user3 = match[2];
                      var user2 = match[1];
                      var user1 = match[0];
                      return Generators.Log[/* withIncomeAddressExposed */41](user2, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user2, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user5, Generators.Log[/* withCustodian */33](user5, /* :: */[
                                                  user2,
                                                  /* :: */[
                                                    user4,
                                                    /* :: */[
                                                      user4,
                                                      /* [] */0
                                                    ]
                                                  ]
                                                ], Generators.Log[/* withPartner */17](/* None */0, user5, /* :: */[
                                                      user2,
                                                      /* [] */0
                                                    ], Generators.Log[/* withIncomeAddressExposed */41](user2, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user2, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user4, Generators.Log[/* withCustodian */33](user4, /* :: */[
                                                                          user2,
                                                                          /* :: */[
                                                                            user4,
                                                                            /* [] */0
                                                                          ]
                                                                        ], Generators.Log[/* withPartner */17](/* None */0, user4, /* :: */[
                                                                              user2,
                                                                              /* [] */0
                                                                            ], Generators.Log[/* withIncomeAddressExposed */41](user2, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user2, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* Some */[2], /* None */0, user2, Generators.Log[/* withCustodianRemoved */37](user3, /* :: */[
                                                                                                  user2,
                                                                                                  /* [] */0
                                                                                                ], Generators.Log[/* withIncomeAddressExposed */41](user2, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user2, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* Some */[1], /* None */0, user2, Generators.Log[/* withCustodianRemoved */37](user1, /* :: */[
                                                                                                                      user2,
                                                                                                                      /* :: */[
                                                                                                                        user3,
                                                                                                                        /* [] */0
                                                                                                                      ]
                                                                                                                    ], Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user3, Generators.Log[/* withCustodian */33](user3, /* :: */[
                                                                                                                                          user1,
                                                                                                                                          /* :: */[
                                                                                                                                            user2,
                                                                                                                                            /* :: */[
                                                                                                                                              user3,
                                                                                                                                              /* [] */0
                                                                                                                                            ]
                                                                                                                                          ]
                                                                                                                                        ], Generators.Log[/* withPartner */17](/* None */0, user3, /* :: */[
                                                                                                                                              user1,
                                                                                                                                              /* :: */[
                                                                                                                                                user2,
                                                                                                                                                /* [] */0
                                                                                                                                              ]
                                                                                                                                            ], Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user2, Generators.Log[/* withCustodian */33](user2, /* :: */[
                                                                                                                                                                  user1,
                                                                                                                                                                  /* :: */[
                                                                                                                                                                    user2,
                                                                                                                                                                    /* [] */0
                                                                                                                                                                  ]
                                                                                                                                                                ], Generators.Log[/* withPartner */17](/* None */0, user2, /* :: */[
                                                                                                                                                                      user1,
                                                                                                                                                                      /* [] */0
                                                                                                                                                                    ], Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */33](user1, /* :: */[
                                                                                                                                                                                          user1,
                                                                                                                                                                                          /* [] */0
                                                                                                                                                                                        ], Generators.Log[/* withAccount */27](user1, Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))))))))))))))))))))))))))))))))))))))))));
                    }), (function (sessions, log) {
                      var testInfo = function (custodians, type_, status, info) {
                        describe("AddressInfo of address " + info[/* address */2], (function () {
                                Jest.test("Custodians are correct", (function () {
                                        return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](Belt_Set.eq(Belt_Set.mergeMany(PrimitiveTypes.UserId[/* emptySet */9], Belt_Array.mapU(custodians, (function (u) {
                                                                      return u[/* userId */0];
                                                                    }))), info[/* custodians */1])));
                                      }));
                                return Jest.test("addressType, addressStatus are correct", (function () {
                                              return Jest.Expect[/* toEqual */12](/* tuple */[
                                                          type_,
                                                          status
                                                        ], Jest.Expect[/* expect */0](/* tuple */[
                                                              info[/* addressType */0],
                                                              info[/* addressStatus */4]
                                                            ]));
                                            }));
                              }));
                        return /* () */0;
                      };
                      var match = Generators.fiveUserSessionsFromArray(sessions);
                      var user4 = match[3];
                      var user3 = match[2];
                      var user2 = match[1];
                      var user1 = match[0];
                      var info = WalletInfoCollector.addressInfos(WalletTypes.AccountIndex[/* default */11], constructState(log));
                      if (info) {
                        var match$1 = info[1];
                        if (match$1) {
                          var match$2 = match$1[1];
                          if (match$2) {
                            var match$3 = match$2[1];
                            if (match$3) {
                              var match$4 = match$3[1];
                              if (match$4) {
                                var match$5 = match$4[1];
                                if (match$5) {
                                  var match$6 = match$5[1];
                                  if (match$6 && !match$6[1]) {
                                    testInfo(/* array */[
                                          user2,
                                          user4,
                                          match[4]
                                        ], /* Income */[user2[/* userId */0]], /* Accessible */0, info[0]);
                                    testInfo(/* array */[
                                          user2,
                                          user4
                                        ], /* Income */[user2[/* userId */0]], /* OutdatedCustodians */2, match$1[0]);
                                    testInfo(/* array */[user2], /* Income */[user2[/* userId */0]], /* AtRisk */1, match$2[0]);
                                    testInfo(/* array */[
                                          user2,
                                          user3
                                        ], /* Income */[user2[/* userId */0]], /* AtRisk */1, match$3[0]);
                                    testInfo(/* array */[
                                          user1,
                                          user2,
                                          user3
                                        ], /* Income */[user1[/* userId */0]], /* TemporarilyInaccessible */3, match$4[0]);
                                    testInfo(/* array */[
                                          user1,
                                          user2
                                        ], /* Income */[user1[/* userId */0]], /* AtRisk */1, match$5[0]);
                                    return testInfo(/* array */[user1], /* Income */[user1[/* userId */0]], /* Inaccessible */4, match$6[0]);
                                  } else {
                                    return Js_exn.raiseError("WalletInfoCollector_test");
                                  }
                                } else {
                                  return Js_exn.raiseError("WalletInfoCollector_test");
                                }
                              } else {
                                return Js_exn.raiseError("WalletInfoCollector_test");
                              }
                            } else {
                              return Js_exn.raiseError("WalletInfoCollector_test");
                            }
                          } else {
                            return Js_exn.raiseError("WalletInfoCollector_test");
                          }
                        } else {
                          return Js_exn.raiseError("WalletInfoCollector_test");
                        }
                      } else {
                        return Js_exn.raiseError("WalletInfoCollector_test");
                      }
                    }));
      }));

describe("WalletInfoCollector", (function () {
        return Fixtures.withCached(/* None */0, /* None */0, "WalletInfoCollector", "oldInputs", (function () {
                      return Generators.withUserSessions(3);
                    }), (function (sessions) {
                      var match = Generators.twoUserSessionsFromArray(sessions);
                      var user2 = match[1];
                      var user1 = match[0];
                      return Generators.Log[/* withIncomeUnlocked */43](0, Generators.Log[/* withIncomeDetected */42](2, Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* Some */[1], /* None */0, user1, Generators.Log[/* withPartnerRemoved */23](user2, /* :: */[
                                                          user1,
                                                          /* [] */0
                                                        ], Generators.Log[/* withCustodianRemoved */37](user2, /* :: */[
                                                              user1,
                                                              /* [] */0
                                                            ], Generators.Log[/* withIncomeDetected */42](1, Generators.Log[/* withIncomeDetected */42](1, Generators.Log[/* withIncomeDetected */42](1, Generators.Log[/* withIncomeDetected */42](1, Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user2, Generators.Log[/* withCustodian */33](user2, /* :: */[
                                                                                                  user1,
                                                                                                  /* :: */[
                                                                                                    user2,
                                                                                                    /* [] */0
                                                                                                  ]
                                                                                                ], Generators.Log[/* withPartner */17](/* None */0, user2, /* :: */[
                                                                                                      user1,
                                                                                                      /* [] */0
                                                                                                    ], Generators.Log[/* withIncomeDetected */42](0, Generators.Log[/* withIncomeDetected */42](0, Generators.Log[/* withIncomeAddressExposed */41](user1, Generators.Log[/* withAccountKeyChainActivated */40](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */39](Generators.Log[/* withCustodianKeyChain */38](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */33](user1, /* :: */[
                                                                                                                                  user1,
                                                                                                                                  /* [] */0
                                                                                                                                ], Generators.Log[/* withAccount */27](user1, Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))))))))))))))))))))))))))));
                    }), (function (_, log) {
                      var info = constructState(log);
                      Jest.test("1 input is unlocked", (function () {
                              return Jest.Expect[/* toEqual */12](1, Jest.Expect[/* expect */0](Belt_Set.size(WalletInfoCollector.unlockedInputs(WalletTypes.AccountIndex[/* default */11], info))));
                            }));
                      Jest.test("1 current input is unlocked", (function () {
                              return Jest.Expect[/* toEqual */12](1, Jest.Expect[/* expect */0](Belt_Set.reduceU(WalletInfoCollector.currentSpendableInputs(WalletTypes.AccountIndex[/* default */11], info), 0, (function (res, param) {
                                                    return res + (
                                                            param[/* unlocked */8] ? 1 : 0
                                                          ) | 0;
                                                  }))));
                            }));
                      Jest.test("4 inputs are old", (function () {
                              return Jest.Expect[/* toEqual */12](4, Jest.Expect[/* expect */0](Belt_Set.size(WalletInfoCollector.oldSpendableInputs(WalletTypes.AccountIndex[/* default */11], info))));
                            }));
                      return Jest.test("3 inputs are current", (function () {
                                    return Jest.Expect[/* toEqual */12](3, Jest.Expect[/* expect */0](Belt_Set.size(WalletInfoCollector.currentSpendableInputs(WalletTypes.AccountIndex[/* default */11], info))));
                                  }));
                    }));
      }));

exports.constructState = constructState;
/*  Not a pure module */
