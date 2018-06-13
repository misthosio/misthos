// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Helpers = require("../../helpers/Helpers.bs.js");
var EstimateFeeClient = require("../../../src/application/wallet/EstimateFeeClient.bs.js");

Helpers.enableHttpRequests(/* () */0);

describe("fees", (function () {
        return Jest.testPromise(/* None */0, "will fetch", (function () {
                      return EstimateFeeClient.fetchFees(/* () */0).then((function (param) {
                                    return Promise.resolve(Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](param[/* high */0].gt(param[/* normal */1]))));
                                  }));
                    }));
      }));

/*  Not a pure module */