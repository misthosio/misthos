// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");

function make() {
  return /* record */[
          /* network : Regtest */0,
          /* ventureId */PrimitiveTypes.VentureId[/* fromString */1](""),
          /* transactionsOfInterest */Belt_SetString.empty,
          /* knownIncomeTxs */Belt_SetString.empty,
          /* confirmedTransactions */Belt_MapString.empty,
          /* notYetBroadcastPayouts */PrimitiveTypes.ProcessId[/* makeMap */8](/* () */0)
        ];
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        var match = $$event[0];
        return /* record */[
                /* network */match[/* network */8],
                /* ventureId */match[/* ventureId */0],
                /* transactionsOfInterest */state[/* transactionsOfInterest */2],
                /* knownIncomeTxs */state[/* knownIncomeTxs */3],
                /* confirmedTransactions */state[/* confirmedTransactions */4],
                /* notYetBroadcastPayouts */state[/* notYetBroadcastPayouts */5]
              ];
    case 33 : 
        var finalizedTx = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* ventureId */state[/* ventureId */1],
                /* transactionsOfInterest */state[/* transactionsOfInterest */2],
                /* knownIncomeTxs */state[/* knownIncomeTxs */3],
                /* confirmedTransactions */state[/* confirmedTransactions */4],
                /* notYetBroadcastPayouts */Belt_Map.set(state[/* notYetBroadcastPayouts */5], finalizedTx[/* processId */0], finalizedTx)
              ];
    case 34 : 
        var match$1 = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* ventureId */state[/* ventureId */1],
                /* transactionsOfInterest */Belt_SetString.add(state[/* transactionsOfInterest */2], match$1[/* txId */1]),
                /* knownIncomeTxs */state[/* knownIncomeTxs */3],
                /* confirmedTransactions */state[/* confirmedTransactions */4],
                /* notYetBroadcastPayouts */Belt_Map.remove(state[/* notYetBroadcastPayouts */5], match$1[/* processId */0])
              ];
    case 36 : 
        return /* record */[
                /* network */state[/* network */0],
                /* ventureId */state[/* ventureId */1],
                /* transactionsOfInterest */state[/* transactionsOfInterest */2],
                /* knownIncomeTxs */state[/* knownIncomeTxs */3],
                /* confirmedTransactions */state[/* confirmedTransactions */4],
                /* notYetBroadcastPayouts */Belt_Map.remove(state[/* notYetBroadcastPayouts */5], $$event[0][/* processId */0])
              ];
    case 41 : 
        var txId = $$event[0][/* txId */2];
        return /* record */[
                /* network */state[/* network */0],
                /* ventureId */state[/* ventureId */1],
                /* transactionsOfInterest */Belt_SetString.add(state[/* transactionsOfInterest */2], txId),
                /* knownIncomeTxs */Belt_SetString.add(state[/* knownIncomeTxs */3], txId),
                /* confirmedTransactions */state[/* confirmedTransactions */4],
                /* notYetBroadcastPayouts */state[/* notYetBroadcastPayouts */5]
              ];
    case 43 : 
        var match$2 = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* ventureId */state[/* ventureId */1],
                /* transactionsOfInterest */state[/* transactionsOfInterest */2],
                /* knownIncomeTxs */state[/* knownIncomeTxs */3],
                /* confirmedTransactions */Belt_MapString.set(state[/* confirmedTransactions */4], match$2[/* txId */0], match$2[/* blockHeight */1]),
                /* notYetBroadcastPayouts */state[/* notYetBroadcastPayouts */5]
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.apply = apply;
/* PrimitiveTypes Not a pure module */
