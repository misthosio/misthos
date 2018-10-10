// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../src/application/events/Event.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");
var ValidationHelpers = require("../helpers/ValidationHelpers.bs.js");
var Venture__Validation = require("../../src/application/Venture__Validation.bs.js");

describe("CreateVenture", (function () {
        describe("as first event", (function () {
                var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
                var log = Generators.Log[/* createVenture */11](user1);
                return ValidationHelpers.testValidationResult(undefined, Venture__Validation.make(/* () */0), Generators.Log[/* lastItem */4](log), /* Ok */0);
              }));
        describe("not as first event", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var log = Generators.Log[/* createVenture */11](match[0]);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* appendEvent */7](user2[/* issuerKeyPair */2], /* VentureCreated */Block.__(0, [Generators.Event[/* createVenture */0](user2)]), log)), /* BadData */["Venture is already created"]);
              }));
        return /* () */0;
      }));

describe("Any proposal type", (function () {
        describe("when submitting the identical proposal twice", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user2);
                        })(undefined, undefined, undefined, undefined), eta);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](log), /* Ignore */1);
              }));
        describe("when the supporter is a non-partner", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1));
                var func = Generators.Log[/* withPartnerProposed */12];
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Curry._1((function (param, param$1, param$2, param$3) {
                                        return Curry._6(func, param, param$1, param$2, param$3, user2, user3);
                                      })(undefined, undefined, undefined, undefined), log)), /* InvalidIssuer */2);
              }));
        describe("when the supporter is not the signer", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1));
                var func = Generators.Log[/* withPartnerProposed */12];
                var arg = Js_primitive.some(user1[/* issuerKeyPair */2]);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Curry._1((function (param, param$1, param$2) {
                                        return Curry._6(func, param, param$1, arg, param$2, user2, user3);
                                      })(undefined, undefined, undefined), log)), /* InvalidIssuer */2);
              }));
        describe("when the same proposal was already made by another partner", (function () {
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
                var func$1 = Generators.Log[/* withPartnerProposed */12];
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Curry._1((function (param, param$1, param$2, param$3) {
                                        return Curry._6(func$1, param, param$1, param$2, param$3, user2, user3);
                                      })(undefined, undefined, undefined, undefined), log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("Any rejection type", (function () {
        describe("when the process is unknown", (function () {
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
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* appendEvent */7](user2[/* issuerKeyPair */2], Event.makePartnerRejected(PrimitiveTypes.ProcessId[/* make */10](/* () */0), user2[/* userId */0]), log)), /* UnknownProcessId */3);
              }));
        describe("when the rejector is not a partner", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerRejected */14](undefined, user3, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the rejector is not the signer", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerRejected */14](Js_primitive.some(user1[/* issuerKeyPair */2]), user2, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the rejection has already been submitted", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user4);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerRejected */14](undefined, user2, proposal)(log);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](log$1), /* Ignore */1);
              }));
        describe("when the rejector has already endorsed", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user4);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(log);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerRejected */14](undefined, user2, proposal)(log$1)), /* AlreadyVoted */5);
              }));
        describe("when the rejection is fine", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerRejected */14](undefined, user2, proposal)(log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("Any endorsement type", (function () {
        describe("when the process is unknown", (function () {
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
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* appendEvent */7](user2[/* issuerKeyPair */2], Event.makePartnerEndorsed(PrimitiveTypes.ProcessId[/* make */10](/* () */0), user2[/* userId */0]), log)), /* UnknownProcessId */3);
              }));
        describe("when the supporter is not a partner", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerEndorsed */13](undefined, user3, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the supporter is not the signer", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerEndorsed */13](Js_primitive.some(user1[/* issuerKeyPair */2]), user2, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the endorsement has already been submitted", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user4);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(log);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](log$1), /* Ignore */1);
              }));
        describe("when the supporter has already rejected", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */17](undefined, match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */17](undefined, user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */18](user1)(Generators.Log[/* createVenture */11](user1))));
                var func = Generators.Log[/* withPartnerProposed */12];
                var log = Curry._1((function (param, param$1, param$2, param$3) {
                          return Curry._6(func, param, param$1, param$2, param$3, user1, user4);
                        })(undefined, undefined, undefined, undefined), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerRejected */14](undefined, user2, proposal)(log);
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(log$1)), /* AlreadyVoted */5);
              }));
        describe("when the endorsement is fine", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("Any acceptance type", (function () {
        describe("when everything is fine", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerAccepted */15](proposal)(log$1)), /* Ok */0);
              }));
        describe("New partners don't effect eligiblity", (function () {
                var match = Generators.fourUserSessions(/* () */0);
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(Generators.Log[/* withPartner */17](undefined, match[3], /* :: */[
                          user1,
                          /* :: */[
                            user2,
                            /* [] */0
                          ]
                        ], Generators.Log[/* withPartnerEndorsed */13](undefined, user1, proposal)(log)));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerAccepted */15](proposal)(log$1)), /* Ok */0);
              }));
        describe("when the data is wrong", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */13](undefined, user2, proposal)(log);
                var init = Curry._1(Event.Partner[/* Accepted */6][/* fromProposal */0], proposal);
                var init$1 = proposal[/* data */6];
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log$1), Generators.Log[/* lastItem */4](Generators.Log[/* appendSystemEvent */8](/* PartnerAccepted */Block.__(4, [/* record */[
                                        /* processId */init[/* processId */0],
                                        /* dependsOnCompletions */init[/* dependsOnCompletions */1],
                                        /* data : record */[
                                          /* lastPartnerRemovalProcess */init$1[/* lastPartnerRemovalProcess */0],
                                          /* id */PrimitiveTypes.UserId[/* fromString */1]("bad"),
                                          /* pubKey */init$1[/* pubKey */2]
                                        ]
                                      ]]), log$1)), /* BadData */["Data doesn't match proposal"]);
              }));
        describe("when the policy is not fullfilled", (function () {
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
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */5](log));
                return ValidationHelpers.testValidationResult(undefined, ValidationHelpers.constructState(undefined, log), Generators.Log[/* lastItem */4](Generators.Log[/* withPartnerAccepted */15](proposal)(log)), /* PolicyNotFulfilled */6);
              }));
        return /* () */0;
      }));

/*  Not a pure module */
