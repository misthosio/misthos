// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../../utils/Utils.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var ProcessCollector = require("./ProcessCollector.bs.js");
var PayoutTransaction = require("../../application/wallet/PayoutTransaction.bs.js");

function make(localUser) {
  return /* record */[
          /* network : Regtest */0,
          /* localUser */localUser,
          /* payouts */ProcessCollector.make(/* () */0),
          /* txIdToProcessIdMap */Belt_MapString.empty,
          /* txDates */Belt_MapString.empty,
          /* income */Belt_MapString.empty
        ];
}

function getPayout(processId, param) {
  return Belt_Map.get(param[/* payouts */2], processId);
}

function getIncome(txId, param) {
  return Belt_MapString.get(param[/* income */5], txId);
}

function payoutsPendingApproval(param) {
  return Belt_List.keepU(Belt_List.fromArray(Belt_Map.valuesToArray(param[/* payouts */2])), (function (payout) {
                var match = payout[/* status */1];
                return match === 0;
              }));
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* network */$$event[0][/* network */6],
                /* localUser */state[/* localUser */1],
                /* payouts */state[/* payouts */2],
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 26 : 
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.addProposal(state[/* localUser */1], $$event[0], (function (data) {
                        return /* record */[
                                /* payoutStatus : PendingApproval */0,
                                /* summary */PayoutTransaction.summary(state[/* network */0], data[/* payoutTx */1]),
                                /* txId : None */0,
                                /* date : None */0
                              ];
                      }), state[/* payouts */2]),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 27 : 
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.addRejection(state[/* localUser */1], $$event[0], state[/* payouts */2]),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 28 : 
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.addEndorsement(state[/* localUser */1], $$event[0], state[/* payouts */2]),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 29 : 
        var accepted = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(accepted[/* processId */0], (function (data) {
                        return /* record */[
                                /* payoutStatus : Accepted */1,
                                /* summary */data[/* summary */1],
                                /* txId */data[/* txId */2],
                                /* date */data[/* date */3]
                              ];
                      }), ProcessCollector.addAcceptance(accepted, state[/* payouts */2])),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 30 : 
        var abort = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(abort[/* processId */0], (function (data) {
                        return /* record */[
                                /* payoutStatus : Aborted */3,
                                /* summary */data[/* summary */1],
                                /* txId */data[/* txId */2],
                                /* date */data[/* date */3]
                              ];
                      }), ProcessCollector.addAbort(abort, state[/* payouts */2])),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 31 : 
        var denial = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(denial[/* processId */0], (function (data) {
                        return /* record */[
                                /* payoutStatus : Denied */2,
                                /* summary */data[/* summary */1],
                                /* txId */data[/* txId */2],
                                /* date */data[/* date */3]
                              ];
                      }), ProcessCollector.addDenial(denial, state[/* payouts */2])),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 34 : 
        var match = $$event[0];
        var txId = match[/* txId */1];
        var processId = match[/* processId */0];
        var txDate = Belt_MapString.get(state[/* txDates */4], txId);
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(processId, (function (data) {
                        var match = Js_option.isSome(txDate);
                        return /* record */[
                                /* payoutStatus */match ? /* Confirmed */5 : /* Unconfirmed */4,
                                /* summary */data[/* summary */1],
                                /* txId : Some */[txId],
                                /* date */txDate
                              ];
                      }), state[/* payouts */2]),
                /* txIdToProcessIdMap */Belt_MapString.set(state[/* txIdToProcessIdMap */3], txId, processId),
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 36 : 
        var match$1 = $$event[0];
        var errorMessage = match$1[/* errorMessage */1];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(match$1[/* processId */0], (function (data) {
                        var match = data[/* payoutStatus */0] !== /* Unconfirmed */4 && data[/* payoutStatus */0] !== /* Confirmed */5;
                        return /* record */[
                                /* payoutStatus */match ? /* Failed */[errorMessage] : data[/* payoutStatus */0],
                                /* summary */data[/* summary */1],
                                /* txId */data[/* txId */2],
                                /* date */data[/* date */3]
                              ];
                      }), state[/* payouts */2]),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 41 : 
        var match$2 = $$event[0];
        var amount = match$2[/* amount */4];
        var txId$1 = match$2[/* txId */2];
        var address = match$2[/* address */0];
        var txDate$1 = Belt_MapString.get(state[/* txDates */4], txId$1);
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */state[/* payouts */2],
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */Belt_MapString.update(state[/* income */5], txId$1, (function (param) {
                        if (param) {
                          var income = param[0];
                          return /* Some */[/* record */[
                                    /* status */income[/* status */0],
                                    /* date */income[/* date */1],
                                    /* txId */income[/* txId */2],
                                    /* amount */income[/* amount */3].plus(amount),
                                    /* addresses */Belt_SetString.add(income[/* addresses */4], address)
                                  ]];
                        } else {
                          var match = Js_option.isSome(txDate$1);
                          return /* Some */[/* record */[
                                    /* status */match ? /* Confirmed */1 : /* Unconfirmed */0,
                                    /* date */txDate$1,
                                    /* txId */txId$1,
                                    /* amount */amount,
                                    /* addresses */Belt_SetString.add(Belt_SetString.empty, address)
                                  ]];
                        }
                      }))
              ];
    case 42 : 
        var match$3 = $$event[0];
        var txId$2 = match$3[/* txId */0];
        var processId$1 = Belt_MapString.get(state[/* txIdToProcessIdMap */3], txId$2);
        var txDate$2 = new Date(match$3[/* unixTime */2] * 1000);
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */processId$1 ? ProcessCollector.updateData(processId$1[0], (function (data) {
                          return /* record */[
                                  /* payoutStatus : Confirmed */5,
                                  /* summary */data[/* summary */1],
                                  /* txId */data[/* txId */2],
                                  /* date : Some */[txDate$2]
                                ];
                        }), state[/* payouts */2]) : state[/* payouts */2],
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */Belt_MapString.set(state[/* txDates */4], txId$2, txDate$2),
                /* income */Belt_MapString.update(state[/* income */5], txId$2, (function (param) {
                        return Utils.mapOption((function (income) {
                                      return /* record */[
                                              /* status : Confirmed */1,
                                              /* date : Some */[txDate$2],
                                              /* txId */income[/* txId */2],
                                              /* amount */income[/* amount */3],
                                              /* addresses */income[/* addresses */4]
                                            ];
                                    }), param);
                      }))
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.getPayout = getPayout;
exports.getIncome = getIncome;
exports.payoutsPendingApproval = payoutsPendingApproval;
exports.apply = apply;
/* Utils Not a pure module */
