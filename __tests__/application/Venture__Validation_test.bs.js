// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../src/application/events/Event.bs.js");
var Policy = require("../../src/application/Policy.bs.js");
var Generators = require("../helpers/Generators.bs.js");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Venture__Validation = require("../../src/application/Venture__Validation.bs.js");

var TestingInvalidSequence = Caml_exceptions.create("Venture__Validation_test.TestingInvalidSequence");

function constructState(log) {
  return Generators.Log[/* reduce */0]((function (s, item) {
                var match = Venture__Validation.validate(s, item);
                if (typeof match === "number") {
                  if (match !== 0) {
                    throw TestingInvalidSequence;
                  } else {
                    return Venture__Validation.apply(item, s);
                  }
                } else {
                  throw TestingInvalidSequence;
                }
              }), Venture__Validation.make(/* () */0), log);
}

function testValidationResult(state, item, expected) {
  var description = Venture__Validation.resultToString(expected);
  return Jest.test("valdation should return '" + (description + "'"), (function () {
                return Jest.Expect[/* toEqual */12](description, Jest.Expect[/* expect */0](Venture__Validation.resultToString(Venture__Validation.validate(state, item))));
              }));
}

function testDataValidation(dataValidation, state, data, expected) {
  var description = Venture__Validation.resultToString(expected);
  return Jest.test("valdation should return '" + (description + "'"), (function () {
                return Jest.Expect[/* toEqual */12](description, Jest.Expect[/* expect */0](Venture__Validation.resultToString(Curry._2(dataValidation, data, state))));
              }));
}

describe("CreateVenture", (function () {
        describe("as first event", (function () {
                var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
                var log = Generators.Log[/* createVenture */9](user1);
                return testValidationResult(Venture__Validation.make(/* () */0), Generators.Log[/* lastItem */3](log), /* Ok */0);
              }));
        describe("not as first event", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var log = Generators.Log[/* createVenture */9](match[0]);
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* appendEvent */6](user2[/* issuerKeyPair */2], /* VentureCreated */Block.__(0, [Generators.Event[/* createVenture */0](user2)]), log)), /* BadData */["Venture is already created"]);
              }));
        return /* () */0;
      }));

describe("Any proposal type", (function () {
        describe("when submitting the identical proposal twice", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user2);
                        })(/* None */0, /* None */0, /* None */0), eta);
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](log), /* Ignore */1);
              }));
        describe("with the wrong policy", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                var func = Generators.Log[/* withPartnerProposed */10];
                var arg = /* Some */[Policy.unanimousMinusOne];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1) {
                                        return Curry._5(func, param, param$1, arg, user1, user2);
                                      })(/* None */0, /* None */0), log)), /* PolicyMissmatch */5);
              }));
        describe("when the supporter is a non-partner", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                var func = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func, param, param$1, param$2, user2, user3);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* InvalidIssuer */2);
              }));
        describe("when the supporter is not the signer", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                var func = Generators.Log[/* withPartnerProposed */10];
                var arg = /* Some */[user1[/* issuerKeyPair */2]];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1) {
                                        return Curry._5(func, param, arg, param$1, user2, user3);
                                      })(/* None */0, /* None */0), log)), /* InvalidIssuer */2);
              }));
        describe("when the proposal was already submitted by this partner", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user2);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var func$1 = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func$1, param, param$1, param$2, user1, user2);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* BadData */["This proposal already exists"]);
              }));
        describe("when the same proposal was already made by another partner", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var func$1 = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func$1, param, param$1, param$2, user2, user3);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("Any rejection type", (function () {
        describe("when the process is unknown", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* appendEvent */6](user2[/* issuerKeyPair */2], Event.makePartnerRejected(PrimitiveTypes.ProcessId[/* make */7](/* () */0), user2[/* userId */0]), log)), /* UnknownProcessId */3);
              }));
        describe("when the rejector is not a partner", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](match[1], /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerRejected */12](/* None */0, user3, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the rejector is not the signer", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerRejected */12](/* Some */[user1[/* issuerKeyPair */2]], user2, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the rejection has already been submitted", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */14](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1))));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user4);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                var log$1 = Generators.Log[/* withPartnerRejected */12](/* None */0, user2, proposal)(log);
                return testValidationResult(constructState(log$1), Generators.Log[/* lastItem */3](log$1), /* Ignore */1);
              }));
        describe("when the rejector has already endorsed", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */14](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1))));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user4);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */11](/* None */0, user2, proposal)(log);
                return testValidationResult(constructState(log$1), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerRejected */12](/* None */0, user2, proposal)(log$1)), /* AlreadyEndorsed */4);
              }));
        describe("when the rejection is fine", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerRejected */12](/* None */0, user2, proposal)(log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("Any endorsement type", (function () {
        describe("when the process is unknown", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* appendEvent */6](user2[/* issuerKeyPair */2], Event.makePartnerEndorsed(PrimitiveTypes.ProcessId[/* make */7](/* () */0), user2[/* userId */0]), log)), /* UnknownProcessId */3);
              }));
        describe("when the supporter is not a partner", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](match[1], /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerEndorsed */11](/* None */0, user3, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the supporter is not the signer", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerEndorsed */11](/* Some */[user1[/* issuerKeyPair */2]], user2, proposal)(log)), /* InvalidIssuer */2);
              }));
        describe("when the endorsement has already been submitted", (function () {
                var match = Generators.fourUserSessions(/* () */0);
                var user4 = match[3];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](match[2], /* :: */[
                      user1,
                      /* :: */[
                        user2,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */14](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1))));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user4);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                var log$1 = Generators.Log[/* withPartnerEndorsed */11](/* None */0, user2, proposal)(log);
                return testValidationResult(constructState(log$1), Generators.Log[/* lastItem */3](log$1), /* Ignore */1);
              }));
        describe("when the endorsement is fine", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var eta = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                var log = Curry._1((function (param, param$1, param$2) {
                          return Curry._5(func, param, param$1, param$2, user1, user3);
                        })(/* None */0, /* None */0, /* None */0), eta);
                var proposal = Event.getPartnerProposedExn(Generators.Log[/* lastEvent */4](log));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerEndorsed */11](/* None */0, user2, proposal)(log)), /* Ok */0);
              }));
        return /* () */0;
      }));

describe("PartnerProposal", (function () {
        describe("when proposing another partner", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                var func = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func, param, param$1, param$2, user1, user2);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* Ok */0);
              }));
        describe("when the prospect is already a partner", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                var func = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func, param, param$1, param$2, user2, user1);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* BadData */["Partner already exists"]);
              }));
        describe("when the creator proposes themselves", (function () {
                var user1 = Generators.userSession(PrimitiveTypes.UserId[/* fromString */1]("user1"));
                var log = Generators.Log[/* createVenture */9](user1);
                var func = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func, param, param$1, param$2, user1, user1);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* Ok */0);
              }));
        describe("when proposing a partner that was removed", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withPartnerRemoved */19](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withPartner */14](user2, /* :: */[
                          user1,
                          /* [] */0
                        ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1))));
                var func = Generators.Log[/* withPartnerProposed */10];
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Curry._1((function (param, param$1, param$2) {
                                        return Curry._5(func, param, param$1, param$2, user1, user2);
                                      })(/* None */0, /* None */0, /* None */0), log)), /* Ok */0);
              }));
        describe("when the partner was removed but the proposal doesn't show it", (function () {
                var match = Generators.threeUserSessions(/* () */0);
                var user3 = match[2];
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withPartnerRemoved */19](user2, /* :: */[
                      user1,
                      /* :: */[
                        user3,
                        /* [] */0
                      ]
                    ], Generators.Log[/* withPartner */14](user3, /* :: */[
                          user1,
                          /* :: */[
                            user2,
                            /* [] */0
                          ]
                        ], Generators.Log[/* withPartner */14](user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)))));
                var func = Generators.Log[/* withPartnerProposed */10];
                var arg = function (param, param$1) {
                  return Curry._5(func, /* Some */[false], param, param$1, user3, user2);
                };
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3]((function (eta) {
                                    return Curry._1(arg(/* None */0, /* None */0), eta);
                                  })(log)), /* BadData */["Last removal doesn't match"]);
              }));
        return /* () */0;
      }));

describe("PartnerRemovalProposal", (function () {
        describe("when proposing another partner", (function () {
                var match = Generators.twoUserSessions(/* () */0);
                var user2 = match[1];
                var user1 = match[0];
                var log = Generators.Log[/* withPartner */14](user2, /* :: */[
                      user1,
                      /* [] */0
                    ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                return testValidationResult(constructState(log), Generators.Log[/* lastItem */3](Generators.Log[/* withPartnerRemovalProposed */16](user1, user2, log)), /* Ok */0);
              }));
        describe("validate Data", (function () {
                describe("when the prospect is not a partner", (function () {
                        var match = Generators.twoUserSessions(/* () */0);
                        var user2 = match[1];
                        var user1 = match[0];
                        var log = Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1));
                        return testDataValidation(Venture__Validation.validatePartnerRemovalData, constructState(log), /* record */[
                                    /* id */user2[/* userId */0],
                                    /* lastPartnerProcess */PrimitiveTypes.ProcessId[/* make */7](/* () */0)
                                  ], /* BadData */["Partner with Id '" + (PrimitiveTypes.UserId[/* toString */0](user2[/* userId */0]) + "' doesn't exist")]);
                      }));
                describe("when lastPartnerProcess doesn't match", (function () {
                        var match = Generators.twoUserSessions(/* () */0);
                        var user2 = match[1];
                        var user1 = match[0];
                        var log = Generators.Log[/* withPartner */14](user2, /* :: */[
                              user1,
                              /* [] */0
                            ], Generators.Log[/* withFirstPartner */15](user1)(Generators.Log[/* createVenture */9](user1)));
                        return testDataValidation(Venture__Validation.validatePartnerRemovalData, constructState(log), /* record */[
                                    /* id */user2[/* userId */0],
                                    /* lastPartnerProcess */PrimitiveTypes.ProcessId[/* make */7](/* () */0)
                                  ], /* BadData */["lastPartnerProcess doesn't match"]);
                      }));
                return /* () */0;
              }));
        return /* () */0;
      }));

var G = 0;

var E = 0;

var L = 0;

var Validation = 0;

exports.G = G;
exports.E = E;
exports.L = L;
exports.Validation = Validation;
exports.TestingInvalidSequence = TestingInvalidSequence;
exports.constructState = constructState;
exports.testValidationResult = testValidationResult;
exports.testDataValidation = testDataValidation;
/*  Not a pure module */
