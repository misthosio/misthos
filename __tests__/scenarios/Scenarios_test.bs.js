// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../src/application/wallet/BTC.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var Scenarios = require("../helpers/Scenarios.bs.js");
var ViewModel = require("../../src/view/model/ViewModel.bs.js");

Scenarios.run("income-summary", (function (viewModel) {
        var createPayoutModal = ViewModel.createPayoutModal(viewModel);
        var balance = createPayoutModal[/* balance */1];
        return Jest.test("Balance is correct", (function () {
                      return Jest.Expect[/* toEqual */12](BTC.fromSatoshis(/* int64 */[
                                      /* hi */0,
                                      /* lo */50756770
                                    ]), Jest.Expect[/* expect */0](balance[/* currentSpendable */0]));
                    }));
      }));

/*  Not a pure module */
