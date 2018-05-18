// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("./events/Event.bs.js");
var Utils = require("../utils/Utils.bs.js");
var Policy = require("./Policy.bs.js");
var Address = require("./wallet/Address.bs.js");
var PrimitiveTypes = require("./PrimitiveTypes.bs.js");
var AccountKeyChain = require("./wallet/AccountKeyChain.bs.js");
var TxInputCollector = require("./wallet/TxInputCollector.bs.js");
var PayoutTransaction = require("./wallet/PayoutTransaction.bs.js");

function make() {
  return /* record */[
          /* ventureId */PrimitiveTypes.VentureId[/* fromString */1](""),
          /* network : Testnet */1,
          /* payoutPolicy */Policy.unanimous,
          /* txInputCollector */TxInputCollector.make(/* () */0)
        ];
}

function apply($$event, state) {
  var state_000 = /* ventureId */state[/* ventureId */0];
  var state_001 = /* network */state[/* network */1];
  var state_002 = /* payoutPolicy */state[/* payoutPolicy */2];
  var state_003 = /* txInputCollector */TxInputCollector.apply($$event, state[/* txInputCollector */3]);
  var state$1 = /* record */[
    state_000,
    state_001,
    state_002,
    state_003
  ];
  if ($$event.tag) {
    return state$1;
  } else {
    var match = $$event[0];
    return /* record */[
            /* ventureId */match[/* ventureId */0],
            /* network */match[/* network */6],
            /* payoutPolicy */match[/* metaPolicy */4],
            state_003
          ];
  }
}

function exposeNextIncomeAddress(userId, accountIdx, param) {
  var match = param[/* txInputCollector */3];
  var ident = List.assoc(userId, List.assoc(accountIdx, match[/* activatedKeyChain */5]));
  var accountKeyChain = AccountKeyChain.Collection[/* lookup */2](accountIdx, ident, match[/* keyChains */3]);
  var coordinates = Address.Coordinates[/* nextExternal */2](userId, match[/* exposedCoordinates */6], accountKeyChain);
  return Event.IncomeAddressExposed[/* make */0](coordinates, Address.make(coordinates, accountKeyChain)[/* address */5]);
}

function preparePayoutTx(param, accountIdx, destinations, satsPerByte, param$1) {
  var txInputCollector = param$1[/* txInputCollector */3];
  var network = param[/* network */5];
  var userId = param[/* userId */0];
  try {
    var payoutTx = PayoutTransaction.build(TxInputCollector.oldInputs(accountIdx, userId, txInputCollector), txInputCollector[/* unused */1], destinations, satsPerByte, TxInputCollector.nextChangeAddress(accountIdx, userId, txInputCollector), network);
    var changeAddressCoordinates = Utils.mapOption((function (param) {
            return param[1];
          }), payoutTx[/* changeAddress */3]);
    var match = PayoutTransaction.signPayout(param$1[/* ventureId */0], userId, param[/* masterKeyChain */4], txInputCollector[/* keyChains */3], payoutTx, network);
    var payoutTx$1 = match ? match[0] : payoutTx;
    return /* Ok */[Curry._5(Event.Payout[/* Proposed */3][/* make */0], /* None */0, /* None */0, userId, param$1[/* payoutPolicy */2], /* record */[
                  /* accountIdx */accountIdx,
                  /* payoutTx */payoutTx$1,
                  /* changeAddressCoordinates */changeAddressCoordinates
                ])];
  }
  catch (exn){
    if (exn === PayoutTransaction.NotEnoughFunds) {
      return /* NotEnoughFunds */0;
    } else {
      throw exn;
    }
  }
}

exports.make = make;
exports.apply = apply;
exports.exposeNextIncomeAddress = exposeNextIncomeAddress;
exports.preparePayoutTx = preparePayoutTx;
/* Event Not a pure module */
