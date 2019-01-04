// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Utils = require("../../utils/Utils.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var BitcoinjsLib = require("bitcoinjs-lib");

function estimateInputWeight(withDms, unlocked, nCoSigners, nPubKeys) {
  return (((306 + Caml_int32.imul(unlocked ? 1 : nCoSigners, 73) | 0) + 1 | 0) + Caml_int32.imul(nPubKeys, 34) | 0) + (
          withDms ? 15 : 3
        ) | 0;
}

function outputWeight(address, network) {
  return 36 + (Utils.hexByteLength(Utils.bufToHex(BitcoinjsLib.address.toOutputScript(address, network))) << 2) | 0;
}

var baseWeight = 42;

function outputCost(address, fee, network) {
  var weight = outputWeight(address, network);
  return fee.times(weight / 4);
}

function inputCost(withDms, unlocked, nCoSigners, nPubKeys, fee) {
  var weight = estimateInputWeight(withDms, unlocked, nCoSigners, nPubKeys);
  return fee.times(weight / 4);
}

function canPayForItself(fee, input) {
  var weight = estimateInputWeight(Js_option.isSome(input[/* sequence */7]), input[/* unlocked */8], input[/* nCoSigners */4], input[/* nPubKeys */5]);
  return input[/* value */3].gte(fee.times(weight / 4));
}

function estimate(outputs, inputs, fee, network) {
  var weight = (baseWeight + List.fold_left((function (t, o) {
            return t + outputWeight(o, network) | 0;
          }), 0, outputs) | 0) + List.fold_left((function (t, i) {
          return t + estimateInputWeight(Js_option.isSome(i[/* sequence */7]), i[/* unlocked */8], i[/* nCoSigners */4], i[/* nPubKeys */5]) | 0;
        }), 0, inputs) | 0;
  return fee.times(weight / 4);
}

var minChange = inputCost;

exports.inputCost = inputCost;
exports.canPayForItself = canPayForItself;
exports.outputCost = outputCost;
exports.minChange = minChange;
exports.estimate = estimate;
/* Utils Not a pure module */
