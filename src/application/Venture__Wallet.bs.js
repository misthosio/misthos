// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$Event = require("./events/Event.bs.js");
var Utils = require("../utils/Utils.bs.js");
var Policy = require("./Policy.bs.js");
var Address = require("./wallet/Address.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var PrimitiveTypes = require("./PrimitiveTypes.bs.js");
var PayoutTransaction = require("./wallet/PayoutTransaction.bs.js");
var WalletInfoCollector = require("./wallet/WalletInfoCollector.bs.js");

function make(param) {
  return /* record */[
          /* ventureId */PrimitiveTypes.VentureId[/* fromString */1](""),
          /* network : Regtest */0,
          /* payoutPolicy */Policy.defaultPayout,
          /* walletInfoCollector */WalletInfoCollector.make(/* () */0)
        ];
}

function apply($$event, state) {
  var state_000 = /* ventureId */state[/* ventureId */0];
  var state_001 = /* network */state[/* network */1];
  var state_002 = /* payoutPolicy */state[/* payoutPolicy */2];
  var state_003 = /* walletInfoCollector */WalletInfoCollector.apply($$event, state[/* walletInfoCollector */3]);
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
            /* network */match[/* network */8],
            /* payoutPolicy */Js_option.getWithDefault(Policy.defaultPayout, Utils.mapOption((function (p) {
                        return p[/* payout */4];
                      }), match[/* initialPolicies */6])),
            state_003
          ];
  }
}

function exposeNextIncomeAddress(userId, accountIdx, param) {
  var walletInfoCollector = param[/* walletInfoCollector */3];
  var accountKeyChain = WalletInfoCollector.currentKeyChain(accountIdx, userId, walletInfoCollector);
  var coordinates = Address.Coordinates[/* nextExternal */2](userId, WalletInfoCollector.exposedCoordinates(walletInfoCollector), accountKeyChain);
  return Curry._2($$Event.Income[/* AddressExposed */0][/* make */0], userId, Address.make(coordinates, accountKeyChain));
}

function preparePayoutTx(eligibleWhenProposing, param, accountIdx, payoutTx, signatures, param$1) {
  var userId = param[/* userId */0];
  try {
    var match = PayoutTransaction.signPayout(param$1[/* ventureId */0], userId, param[/* masterKeyChain */4], WalletInfoCollector.accountKeyChains(param$1[/* walletInfoCollector */3]), payoutTx, signatures);
    var payoutTx$1 = match ? match[0] : payoutTx;
    return /* Ok */[Curry._6($$Event.Payout[/* Proposed */3][/* make */0], undefined, undefined, eligibleWhenProposing, userId, param$1[/* payoutPolicy */2], /* record */[
                  /* accountIdx */accountIdx,
                  /* payoutTx */payoutTx$1
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

function endorsePayout(processId, signatures, param, param$1) {
  var walletInfoCollector = param$1[/* walletInfoCollector */3];
  var userId = param[/* userId */0];
  var match = PayoutTransaction.signPayout(param$1[/* ventureId */0], userId, param[/* masterKeyChain */4], WalletInfoCollector.accountKeyChains(walletInfoCollector), WalletInfoCollector.getPayoutTx(processId, walletInfoCollector), signatures);
  if (match) {
    return /* :: */[
            /* PayoutSigned */Block.__(32, [Curry._3($$Event.Payout[/* Signed */9][/* make */0], processId, userId, match[0])]),
            /* :: */[
              $$Event.makePayoutEndorsed(processId, userId),
              /* [] */0
            ]
          ];
  } else {
    return /* :: */[
            $$Event.makePayoutEndorsed(processId, userId),
            /* [] */0
          ];
  }
}

function signPayout(processId, signatures, param, param$1) {
  var walletInfoCollector = param$1[/* walletInfoCollector */3];
  var userId = param[/* userId */0];
  var match = PayoutTransaction.signPayout(param$1[/* ventureId */0], userId, param[/* masterKeyChain */4], WalletInfoCollector.accountKeyChains(walletInfoCollector), WalletInfoCollector.getPayoutTx(processId, walletInfoCollector), signatures);
  if (match) {
    return /* :: */[
            /* PayoutSigned */Block.__(32, [Curry._3($$Event.Payout[/* Signed */9][/* make */0], processId, userId, match[0])]),
            /* [] */0
          ];
  } else {
    return /* [] */0;
  }
}

exports.make = make;
exports.apply = apply;
exports.exposeNextIncomeAddress = exposeNextIncomeAddress;
exports.preparePayoutTx = preparePayoutTx;
exports.endorsePayout = endorsePayout;
exports.signPayout = signPayout;
/* Event Not a pure module */
