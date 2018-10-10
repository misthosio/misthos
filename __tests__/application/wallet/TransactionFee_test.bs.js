// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../../src/application/wallet/BTC.bs.js");
var Jest = require("@glennsl/bs-jest/src/jest.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var TransactionFee = require("../../../src/application/wallet/TransactionFee.bs.js");

var oneSatPerByte = BTC.fromSatoshis(/* int64 */[
      /* hi */0,
      /* lo */1
    ]);

describe("inputCost", (function () {
        Jest.test("1 cosigner", (function () {
                return Jest.Expect[/* toEqual */12](113, Jest.Expect[/* expect */0](BTC.toSatoshisFloat(TransactionFee.inputCost(false, false, 1, 2, oneSatPerByte))));
              }));
        Jest.test("2 cosigners", (function () {
                return Jest.Expect[/* toEqual */12](140, Jest.Expect[/* expect */0](BTC.toSatoshisFloat(TransactionFee.inputCost(false, false, 2, 3, oneSatPerByte))));
              }));
        Jest.test("2 cosigner with dms", (function () {
                return Jest.Expect[/* toEqual */12](143, Jest.Expect[/* expect */0](BTC.toSatoshisFloat(TransactionFee.inputCost(true, false, 2, 3, oneSatPerByte))));
              }));
        return Jest.test("2 cosigner unlocked", (function () {
                      return Jest.Expect[/* toEqual */12](125, Jest.Expect[/* expect */0](BTC.toSatoshisFloat(TransactionFee.inputCost(true, true, 2, 3, oneSatPerByte))));
                    }));
      }));

describe("outputCost", (function () {
        Jest.test("p2pkh output", (function () {
                return Jest.Expect[/* toEqual */12](BTC.fromSatoshis(/* int64 */[
                                /* hi */0,
                                /* lo */34
                              ]), Jest.Expect[/* expect */0](TransactionFee.outputCost("mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU", oneSatPerByte, BitcoinjsLib.networks.testnet)));
              }));
        return Jest.test("p2sh output", (function () {
                      return Jest.Expect[/* toEqual */12](BTC.fromSatoshis(/* int64 */[
                                      /* hi */0,
                                      /* lo */32
                                    ]), Jest.Expect[/* expect */0](TransactionFee.outputCost("2N8qFbjFX4ZA1jTatE17kYZnS849NB9bN2T", oneSatPerByte, BitcoinjsLib.networks.testnet)));
                    }));
      }));

/* oneSatPerByte Not a pure module */
