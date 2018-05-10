// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../../src/utils/Utils.bs.js");
var Generators = require("./Generators.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Venture__Validation = require("../../src/application/Venture__Validation.bs.js");

var TestingInvalidSequence = Caml_exceptions.create("ValidationHelpers.TestingInvalidSequence");

function constructState(log) {
  return Generators.Log[/* reduce */0]((function (s, item) {
                var bad = Venture__Validation.validate(s, item);
                if (typeof bad === "number") {
                  if (bad !== 0) {
                    throw [
                          TestingInvalidSequence,
                          Venture__Validation.resultToString(bad)
                        ];
                  } else {
                    return Venture__Validation.apply(item, s);
                  }
                } else {
                  throw [
                        TestingInvalidSequence,
                        Venture__Validation.resultToString(bad)
                      ];
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

function withIssuer(issuer, dataValidation, data, state) {
  return Curry._3(dataValidation, data, state, Utils.publicKeyFromKeyPair(issuer[/* issuerKeyPair */2]));
}

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
exports.withIssuer = withIssuer;
/* Jest Not a pure module */