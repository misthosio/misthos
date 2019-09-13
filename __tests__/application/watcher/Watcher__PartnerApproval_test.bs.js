// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$Event = require("../../../src/application/events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Generators = require("../../helpers/Generators.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var WatcherHelpers = require("../../helpers/WatcherHelpers.bs.js");
var Watcher__PartnerApproval = require("../../../src/application/watcher/Watcher__PartnerApproval.bs.js");

Jest.describe("Watcher__PartnerApproval", (function (param) {
        Jest.describe("Will approve the creator", (function (param) {
                var match = Generators.twoUserSessions(/* () */0);
                var user1 = match[0];
                var eta = Generators.Log[/* createVenture */11](user1);
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user1);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log);
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        Jest.describe("With 1 partner and a proposal", (function (param) {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user2);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log);
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        Jest.describe("Completes when the partner is accepted", (function (param) {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user2);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log);
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                var log$2 = Generators.Log[/* withPartnerAccepted */15](proposal)(log$1);
                Caml_oo_curry.js2(710435299, 1, watcher, Generators.Log[/* lastItem */4](log$2));
                return WatcherHelpers.testWatcherHasCompleted(watcher);
              }));
        Jest.describe("With 2 users and a proposal", (function (param) {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, match[1], /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user3);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log);
                return WatcherHelpers.testWatcherHasNoEventPending(Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1)));
              }));
        Jest.describe("With 2 users and a proposal and endorsement", (function (param) {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user3);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log));
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        Jest.describe("With 2 users and a removal and a proposal", (function (param) {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartnerRemoved */23](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user3);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log);
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("PartnerAccepted", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 4) {
                                return Caml_obj.caml_equal(param[0][/* data */2], proposal[/* data */6]);
                              } else {
                                return false;
                              }
                            }));
              }));
        Jest.describe("Process gets denied when it has been rejected", (function (param) {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user3);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerRejected */14](undefined, user2, proposal)(log);
                var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                return WatcherHelpers.testWatcherHasEventPending("PartnerDenied", watcher, Generators.Log[/* systemIssuer */3](log$1), (function (param) {
                              if (param.tag === 5) {
                                return true;
                              } else {
                                return false;
                              }
                            }));
              }));
        return Jest.describe("Completes when the partner is denied", (function (param) {
                      var match = Generators.threeUserSessions(/* () */0);
                      var user3 = match[2];
                      var user2 = match[1];
                      var user1 = match[0];
                      var eta = Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                            user1,
                            /* [] */0
                          ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1)));
                      var func = Generators.Log[/* withPartnerProposed */12];
                      var log = Curry._1((function (param, param$1, param$2, param$3) {
                                return Curry._6(func, param, param$1, param$2, param$3, user1, user3);
                              })(undefined, undefined, undefined, undefined), eta);
                      var proposal = $$Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                      var log$1 = Generators.Log[/* withPartnerRejected */14](undefined, user2, proposal)(log);
                      var watcher = Watcher__PartnerApproval.make(proposal, Generators.Log[/* eventLog */6](log$1));
                      var log$2 = Generators.Log[/* withPartnerDenied */16](proposal)(log$1);
                      Caml_oo_curry.js2(710435299, 2, watcher, Generators.Log[/* lastItem */4](log$2));
                      return WatcherHelpers.testWatcherHasCompleted(watcher);
                    }));
      }));

var PartnerApproval = 0;

exports.PartnerApproval = PartnerApproval;
/*  Not a pure module */
