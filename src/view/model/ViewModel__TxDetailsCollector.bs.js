// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../../utils/Utils.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var PrimitiveTypes = require("../../application/PrimitiveTypes.bs.js");
var ProcessCollector = require("./ProcessCollector.bs.js");
var PayoutTransaction = require("../../application/wallet/PayoutTransaction.bs.js");

function getExplorerLink(network, txId) {
  if (network >= 2) {
    return "https://www.blockchain.com/en/btc/tx/" + txId;
  } else {
    return "https://testnet.blockchain.info/tx/" + txId;
  }
}

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

function getDateAndStatus(txId, param) {
  var match = Belt_MapString.get(param[/* txDates */4], txId);
  if (match !== undefined) {
    return /* tuple */[
            Caml_option.some(Caml_option.valFromOption(match)),
            /* Confirmed */1
          ];
  } else {
    return /* tuple */[
            undefined,
            /* Unconfirmed */0
          ];
  }
}

function getProcessIdForTx(txId, param) {
  return Belt_MapString.getExn(param[/* txIdToProcessIdMap */3], txId);
}

function payoutsPendingBroadcast(param) {
  return Belt_List.keepU(Belt_List.fromArray(Belt_Map.valuesToArray(param[/* payouts */2])), (function (payout) {
                var match = payout[/* data */5][/* payoutStatus */0];
                if (typeof match === "number") {
                  return match < 2;
                } else {
                  return false;
                }
              }));
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* network */$$event[0][/* network */8],
                /* localUser */state[/* localUser */1],
                /* payouts */state[/* payouts */2],
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 26 : 
        var proposal = $$event[0];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.addProposal(state[/* localUser */1], proposal, (function (data) {
                        return /* record */[
                                /* payoutStatus : PendingApproval */0,
                                /* signatures */Belt_Set.add(PrimitiveTypes.UserId[/* emptySet */9], proposal[/* proposerId */4]),
                                /* payoutTx */data[/* payoutTx */1],
                                /* summary */PayoutTransaction.summary(state[/* network */0], data[/* payoutTx */1]),
                                /* explorerLink */undefined,
                                /* txId */undefined,
                                /* date */undefined
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
                                /* signatures */data[/* signatures */1],
                                /* payoutTx */data[/* payoutTx */2],
                                /* summary */data[/* summary */3],
                                /* explorerLink */data[/* explorerLink */4],
                                /* txId */data[/* txId */5],
                                /* date */data[/* date */6]
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
                                /* signatures */data[/* signatures */1],
                                /* payoutTx */data[/* payoutTx */2],
                                /* summary */data[/* summary */3],
                                /* explorerLink */data[/* explorerLink */4],
                                /* txId */data[/* txId */5],
                                /* date */data[/* date */6]
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
                                /* signatures */data[/* signatures */1],
                                /* payoutTx */data[/* payoutTx */2],
                                /* summary */data[/* summary */3],
                                /* explorerLink */data[/* explorerLink */4],
                                /* txId */data[/* txId */5],
                                /* date */data[/* date */6]
                              ];
                      }), ProcessCollector.addDenial(denial, state[/* payouts */2])),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 32 : 
        var match = $$event[0];
        var custodianId = match[/* custodianId */1];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(match[/* processId */0], (function (data) {
                        return /* record */[
                                /* payoutStatus */data[/* payoutStatus */0],
                                /* signatures */Belt_Set.add(data[/* signatures */1], custodianId),
                                /* payoutTx */data[/* payoutTx */2],
                                /* summary */data[/* summary */3],
                                /* explorerLink */data[/* explorerLink */4],
                                /* txId */data[/* txId */5],
                                /* date */data[/* date */6]
                              ];
                      }), state[/* payouts */2]),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 34 : 
        var match$1 = $$event[0];
        var txId = match$1[/* txId */1];
        var processId = match$1[/* processId */0];
        var txDate = Belt_MapString.get(state[/* txDates */4], txId);
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(processId, (function (data) {
                        var match = Js_option.isSome(txDate);
                        return /* record */[
                                /* payoutStatus */match ? /* Confirmed */5 : /* Unconfirmed */4,
                                /* signatures */data[/* signatures */1],
                                /* payoutTx */data[/* payoutTx */2],
                                /* summary */data[/* summary */3],
                                /* explorerLink */getExplorerLink(state[/* network */0], txId),
                                /* txId */txId,
                                /* date */txDate
                              ];
                      }), state[/* payouts */2]),
                /* txIdToProcessIdMap */Belt_MapString.set(state[/* txIdToProcessIdMap */3], txId, processId),
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 36 : 
        var match$2 = $$event[0];
        var errorMessage = match$2[/* errorMessage */1];
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */ProcessCollector.updateData(match$2[/* processId */0], (function (data) {
                        var match = data[/* payoutStatus */0] !== /* Unconfirmed */4 && data[/* payoutStatus */0] !== /* Confirmed */5;
                        return /* record */[
                                /* payoutStatus */match ? /* Failed */[errorMessage] : data[/* payoutStatus */0],
                                /* signatures */data[/* signatures */1],
                                /* payoutTx */data[/* payoutTx */2],
                                /* summary */data[/* summary */3],
                                /* explorerLink */data[/* explorerLink */4],
                                /* txId */data[/* txId */5],
                                /* date */data[/* date */6]
                              ];
                      }), state[/* payouts */2]),
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */state[/* income */5]
              ];
    case 41 : 
        var match$3 = $$event[0];
        var amount = match$3[/* amount */4];
        var txId$1 = match$3[/* txId */2];
        var address = match$3[/* address */0];
        var txDate$1 = Belt_MapString.get(state[/* txDates */4], txId$1);
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */state[/* payouts */2],
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */state[/* txDates */4],
                /* income */Belt_MapString.update(state[/* income */5], txId$1, (function (param) {
                        if (param !== undefined) {
                          var income = param;
                          return /* record */[
                                  /* status */income[/* status */0],
                                  /* explorerLink */income[/* explorerLink */1],
                                  /* date */income[/* date */2],
                                  /* txId */income[/* txId */3],
                                  /* amount */amount.plus(income[/* amount */4]),
                                  /* addresses */Belt_SetString.add(income[/* addresses */5], address)
                                ];
                        } else {
                          var match = Js_option.isSome(txDate$1);
                          return /* record */[
                                  /* status */match ? /* Confirmed */1 : /* Unconfirmed */0,
                                  /* explorerLink */getExplorerLink(state[/* network */0], txId$1),
                                  /* date */txDate$1,
                                  /* txId */txId$1,
                                  /* amount */amount,
                                  /* addresses */Belt_SetString.add(Belt_SetString.empty, address)
                                ];
                        }
                      }))
              ];
    case 43 : 
        var match$4 = $$event[0];
        var txId$2 = match$4[/* txId */0];
        var processId$1 = Belt_MapString.get(state[/* txIdToProcessIdMap */3], txId$2);
        var txDate$2 = new Date(match$4[/* unixTime */2] * 1000);
        return /* record */[
                /* network */state[/* network */0],
                /* localUser */state[/* localUser */1],
                /* payouts */processId$1 !== undefined ? ProcessCollector.updateData(Caml_option.valFromOption(processId$1), (function (data) {
                          return /* record */[
                                  /* payoutStatus : Confirmed */5,
                                  /* signatures */data[/* signatures */1],
                                  /* payoutTx */data[/* payoutTx */2],
                                  /* summary */data[/* summary */3],
                                  /* explorerLink */data[/* explorerLink */4],
                                  /* txId */data[/* txId */5],
                                  /* date */Caml_option.some(txDate$2)
                                ];
                        }), state[/* payouts */2]) : state[/* payouts */2],
                /* txIdToProcessIdMap */state[/* txIdToProcessIdMap */3],
                /* txDates */Belt_MapString.set(state[/* txDates */4], txId$2, txDate$2),
                /* income */Belt_MapString.update(state[/* income */5], txId$2, (function (param) {
                        return Utils.mapOption((function (income) {
                                      return /* record */[
                                              /* status : Confirmed */1,
                                              /* explorerLink */income[/* explorerLink */1],
                                              /* date */Caml_option.some(txDate$2),
                                              /* txId */income[/* txId */3],
                                              /* amount */income[/* amount */4],
                                              /* addresses */income[/* addresses */5]
                                            ];
                                    }), param);
                      }))
              ];
    default:
      return state;
  }
}

exports.getExplorerLink = getExplorerLink;
exports.make = make;
exports.getPayout = getPayout;
exports.getIncome = getIncome;
exports.getDateAndStatus = getDateAndStatus;
exports.getProcessIdForTx = getProcessIdForTx;
exports.payoutsPendingBroadcast = payoutsPendingBroadcast;
exports.apply = apply;
/* Utils Not a pure module */
