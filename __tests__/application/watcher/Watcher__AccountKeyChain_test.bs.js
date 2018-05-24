// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Event = require("../../../src/application/events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Fixtures = require("../../helpers/Fixtures.bs.js");
var Generators = require("../../helpers/Generators.bs.js");
var WalletTypes = require("../../../src/application/wallet/WalletTypes.bs.js");
var WatcherHelpers = require("../../helpers/WatcherHelpers.bs.js");
var CustodianKeyChain = require("../../../src/application/wallet/CustodianKeyChain.bs.js");
var Watcher__AccountKeyChain = require("../../../src/application/watcher/Watcher__AccountKeyChain.bs.js");

function keyChainEq(keyChainA, keyChainB) {
  return Caml_obj.caml_equal(CustodianKeyChain.encode(keyChainA), CustodianKeyChain.encode(keyChainB));
}

describe("Watcher__AccountKeyChain", (function () {
        Fixtures.withCached(/* None */0, "Watcher__AccountKeyChain", "Identifies a key chain when a custodian key chain changes", (function () {
                return Fixtures.threeUserSessionsArray;
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                return Generators.Log[/* withAccount */26](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1)));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                var acceptance = Event.getAccountCreationAcceptedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */32](user1, /* :: */[
                          user1,
                          /* [] */0
                        ], log));
                var watcher = Watcher__AccountKeyChain.make(user1, acceptance, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("AccountKeyChainIdentified", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 37) {
                                var match = param[0][/* keyChain */0];
                                if (WalletTypes.AccountIndex[/* eq */7](match[/* accountIdx */0], WalletTypes.AccountIndex[/* default */9])) {
                                  return match[/* identifier */1] === "41f508a17ccd3b6e325be410341fd320d8d72befbb54cddf5723432a340bcc73";
                                } else {
                                  return false;
                                }
                              } else {
                                return false;
                              }
                            }));
              }));
        Fixtures.withCached(/* None */0, "Watcher__AccountKeyChain", "Identifies a key chain when a partner is removed", (function () {
                return Fixtures.threeUserSessionsArray;
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                return Generators.Log[/* withAccount */26](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1)));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user2 = match[1];
                var user1 = match[0];
                var acceptance = Event.getAccountCreationAcceptedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianKeyChain */37](/* Some */[1], /* None */0, user1, Generators.Log[/* withPartnerRemoved */22](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withCustodianRemoved */36](user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withAccountKeyChainActivated */39](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user2, Generators.Log[/* withCustodian */32](user2, /* :: */[
                                              user1,
                                              /* :: */[
                                                user2,
                                                /* [] */0
                                              ]
                                            ], Generators.Log[/* withPartner */17](user2, /* :: */[
                                                  user1,
                                                  /* [] */0
                                                ], Generators.Log[/* withAccountKeyChainActivated */39](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */32](user1, /* :: */[
                                                                  user1,
                                                                  /* [] */0
                                                                ], log))))))))))));
                var watcher = Watcher__AccountKeyChain.make(user1, acceptance, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("AccountKeyChainIdentified", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 37) {
                                var match = param[0][/* keyChain */0];
                                if (WalletTypes.AccountIndex[/* eq */7](match[/* accountIdx */0], WalletTypes.AccountIndex[/* default */9]) && match[/* identifier */1] === "038ccb176653ad573f4342fc625dc121b573762a69becbaaad5b8bbadb934340") {
                                  return List.length(match[/* custodianKeyChains */3]) === 1;
                                } else {
                                  return false;
                                }
                              } else {
                                return false;
                              }
                            }));
              }));
        Fixtures.withCached(/* None */0, "Watcher__AccountKeyChain", "Activates a key chain when a custodian key chain changes", (function () {
                return Fixtures.threeUserSessionsArray;
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                return Generators.Log[/* withAccount */26](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1)));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                var acceptance = Event.getAccountCreationAcceptedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */32](user1, /* :: */[
                              user1,
                              /* [] */0
                            ], log)));
                var watcher = Watcher__AccountKeyChain.make(user1, acceptance, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("AccountKeyChainActivated", watcher, user1[/* issuerKeyPair */2], (function (param) {
                              if (param.tag === 38) {
                                var match = param[0];
                                if (WalletTypes.AccountIndex[/* eq */7](match[/* accountIdx */0], WalletTypes.AccountIndex[/* default */9]) && match[/* identifier */2] === "41f508a17ccd3b6e325be410341fd320d8d72befbb54cddf5723432a340bcc73") {
                                  return match[/* sequence */3] === 0;
                                } else {
                                  return false;
                                }
                              } else {
                                return false;
                              }
                            }));
              }));
        Fixtures.withCached(/* None */0, "Watcher__AccountKeyChain", "Is idle when the key chain has been activated", (function () {
                return Fixtures.threeUserSessionsArray;
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                return Generators.Log[/* withAccount */26](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1)));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                var acceptance = Event.getAccountCreationAcceptedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withAccountKeyChainActivated */39](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */32](user1, /* :: */[
                                  user1,
                                  /* [] */0
                                ], log))));
                return WatcherHelpers.testWatcherHasNoEventPending(Watcher__AccountKeyChain.make(user1, acceptance, Generators.Log[/* eventLog */6](log$1)));
              }));
        Fixtures.withCached(/* None */0, "Watcher__AccountKeyChain", "Activates a key chain when a custodian is removed", (function () {
                return Fixtures.threeUserSessionsArray;
              }), (function (sessions) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user1 = match[0];
                return Generators.Log[/* withAccount */26](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1)));
              }), (function (sessions, log) {
                var match = Generators.twoUserSessionsFromArray(sessions);
                var user2 = match[1];
                var user1 = match[0];
                var acceptance = Event.getAccountCreationAcceptedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withCustodianRemoved */36](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withAccountKeyChainActivated */39](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user2, Generators.Log[/* withCustodian */32](user2, /* :: */[
                                      user1,
                                      /* :: */[
                                        user2,
                                        /* [] */0
                                      ]
                                    ], Generators.Log[/* withPartner */17](user2, /* :: */[
                                          user1,
                                          /* [] */0
                                        ], Generators.Log[/* withAccountKeyChainActivated */39](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */32](user1, /* :: */[
                                                          user1,
                                                          /* [] */0
                                                        ], log))))))))));
                var watcher = Watcher__AccountKeyChain.make(user1, acceptance, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("AccountKeyChainActivated", watcher, user1[/* issuerKeyPair */2], (function (param) {
                              if (param.tag === 38) {
                                var match = param[0];
                                if (WalletTypes.AccountIndex[/* eq */7](match[/* accountIdx */0], WalletTypes.AccountIndex[/* default */9]) && match[/* identifier */2] === "41f508a17ccd3b6e325be410341fd320d8d72befbb54cddf5723432a340bcc73") {
                                  return match[/* sequence */3] === 1;
                                } else {
                                  return false;
                                }
                              } else {
                                return false;
                              }
                            }));
              }));
        return Fixtures.withCached(/* None */0, "Watcher__AccountKeyChain", "Is idle when the partner is removed", (function () {
                      return Fixtures.threeUserSessionsArray;
                    }), (function (sessions) {
                      var match = Generators.twoUserSessionsFromArray(sessions);
                      var user1 = match[0];
                      return Generators.Log[/* withAccount */26](user1, Generators.Log[/* withFirstPartner */18](user1)(Fixtures.createVenture(user1)));
                    }), (function (sessions, log) {
                      var match = Generators.twoUserSessionsFromArray(sessions);
                      var user2 = match[1];
                      var user1 = match[0];
                      var acceptance = Event.getAccountCreationAcceptedExn(Generators.Log[/* lastEvent */5](log));
                      var log$1 = Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user2, Generators.Log[/* withPartnerRemoved */22](user1, /* :: */[
                                user2,
                                /* [] */0
                              ], Generators.Log[/* withCustodian */32](user2, /* :: */[
                                    user1,
                                    /* :: */[
                                      user2,
                                      /* [] */0
                                    ]
                                  ], Generators.Log[/* withPartner */17](user2, /* :: */[
                                        user1,
                                        /* [] */0
                                      ], Generators.Log[/* withAccountKeyChainActivated */39](/* None */0, user1, Generators.Log[/* withAccountKeyChainIdentified */38](Generators.Log[/* withCustodianKeyChain */37](/* None */0, /* None */0, user1, Generators.Log[/* withCustodian */32](user1, /* :: */[
                                                        user1,
                                                        /* [] */0
                                                      ], log))))))));
                      return WatcherHelpers.testWatcherHasNoEventPending(Watcher__AccountKeyChain.make(user1, acceptance, Generators.Log[/* eventLog */6](log$1)));
                    }));
      }));

var KeyChain = 0;

var AccountKeyChain = 0;

exports.KeyChain = KeyChain;
exports.AccountKeyChain = AccountKeyChain;
exports.keyChainEq = keyChainEq;
/*  Not a pure module */
