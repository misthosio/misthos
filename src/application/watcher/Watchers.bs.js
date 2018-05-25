// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../../utils/Utils.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var Watcher__SignPayout = require("./Watcher__SignPayout.bs.js");
var Watcher__AbortPayout = require("./Watcher__AbortPayout.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var Watcher__FinalizePayout = require("../events/Watcher__FinalizePayout.bs.js");
var Watcher__PayoutApproval = require("./Watcher__PayoutApproval.bs.js");
var Watcher__AccountKeyChain = require("./Watcher__AccountKeyChain.bs.js");
var Watcher__PartnerApproval = require("./Watcher__PartnerApproval.bs.js");
var Watcher__CustodianApproval = require("./Watcher__CustodianApproval.bs.js");
var Watcher__CustodianKeyChain = require("./Watcher__CustodianKeyChain.bs.js");
var Watcher__InitializeVenture = require("./Watcher__InitializeVenture.bs.js");
var Watcher__PartnerRemovalApproval = require("./Watcher__PartnerRemovalApproval.bs.js");
var Watcher__AccountCreationApproval = require("./Watcher__AccountCreationApproval.bs.js");
var Watcher__AutoEndorseCustodianSelf = require("./Watcher__AutoEndorseCustodianSelf.bs.js");
var Watcher__CustodianRemovalApproval = require("./Watcher__CustodianRemovalApproval.bs.js");

function initWatcherFor(session, param, log) {
  var $$event = param[/* event */0];
  switch ($$event.tag | 0) {
    case 0 : 
        return /* :: */[
                Watcher__InitializeVenture.make(session, $$event[0], log),
                /* [] */0
              ];
    case 1 : 
        return /* :: */[
                Watcher__PartnerApproval.make($$event[0], log),
                /* [] */0
              ];
    case 4 : 
        return /* :: */[
                Watcher__AutoEndorseCustodianSelf.make(session, $$event[0], log),
                /* [] */0
              ];
    case 6 : 
        return /* :: */[
                Watcher__PartnerRemovalApproval.make($$event[0], log),
                /* [] */0
              ];
    case 11 : 
        return /* :: */[
                Watcher__AccountCreationApproval.make($$event[0], log),
                /* [] */0
              ];
    case 14 : 
        return /* :: */[
                Watcher__AccountKeyChain.make(session, $$event[0], log),
                /* [] */0
              ];
    case 15 : 
        return /* :: */[
                Watcher__CustodianApproval.make($$event[0], log),
                /* [] */0
              ];
    case 18 : 
        return /* :: */[
                Watcher__CustodianKeyChain.make(session, $$event[0], log),
                /* [] */0
              ];
    case 20 : 
        return /* :: */[
                Watcher__CustodianRemovalApproval.make($$event[0], log),
                /* [] */0
              ];
    case 25 : 
        var proposal = $$event[0];
        return /* :: */[
                Watcher__PayoutApproval.make(proposal, log),
                /* :: */[
                  Watcher__AbortPayout.make(proposal, log),
                  /* [] */0
                ]
              ];
    case 27 : 
        return /* :: */[
                Watcher__SignPayout.make(session, $$event[0], log),
                /* [] */0
              ];
    case 28 : 
        return /* :: */[
                Watcher__FinalizePayout.make($$event[0], log),
                /* [] */0
              ];
    default:
      return /* [] */0;
  }
}

function apply($staropt$star, session, item, log, watchers) {
  var reconstruct = $staropt$star ? $staropt$star[0] : false;
  if (item) {
    var item$1 = item[0];
    if (reconstruct === false) {
      List.iter((function (w) {
              return Caml_oo_curry.js2(710435299, 3, w, item$1);
            }), watchers);
    }
    return List.filter((function (w) {
                    return Caml_oo_curry.js2(111581468, 4, w, /* () */0) === false;
                  }))(List.append(initWatcherFor(session, item$1, log), watchers));
  } else {
    return watchers;
  }
}

function processPendingPromise(session, eventFound, promise) {
  return promise.then((function (param) {
                var watchers = param[2];
                var state = param[1];
                var log = param[0];
                var tmp;
                try {
                  tmp = /* Some */[List.find((function (w) {
                            return Js_option.isSome(Caml_oo_curry.js2(761988163, 5, w, /* () */0));
                          }), watchers)];
                }
                catch (exn){
                  if (exn === Caml_builtin_exceptions.not_found) {
                    tmp = /* None */0;
                  } else {
                    throw exn;
                  }
                }
                var nextEvent = Utils.mapOption((function (w) {
                        return Js_option.getExn(Caml_oo_curry.js2(761988163, 6, w, /* () */0));
                      }), tmp);
                if (nextEvent) {
                  return processPendingPromise(session, eventFound, nextEvent[0].then((function (param) {
                                    var match = Curry._4(eventFound, param[0], param[1], log, state);
                                    var log$1 = match[1];
                                    return Promise.resolve(/* tuple */[
                                                log$1,
                                                match[2],
                                                apply(/* None */0, session, match[0], log$1, watchers)
                                              ]);
                                  })));
                } else {
                  return Promise.resolve(/* tuple */[
                              log,
                              state,
                              watchers
                            ]);
                }
              }));
}

function processPending(session, log, eventFound, state, watchers) {
  return processPendingPromise(session, eventFound, Promise.resolve(/* tuple */[
                  log,
                  state,
                  watchers
                ]));
}

function applyAndProcessPending(session, item, log, eventFound, state, watchers) {
  return processPending(session, log, eventFound, state, apply(/* None */0, session, item, log, watchers));
}

var Initialize = 0;

var PartnerApproval = 0;

var PartnerRemovalApproval = 0;

var AccountCreationApproval = 0;

var CustodianApproval = 0;

var CustodianRemovalApproval = 0;

var AutoEndorseCustodianSelf = 0;

var CustodianKeyChain = 0;

var AccountKeyChain = 0;

var AbortPayout = 0;

var PayoutApproval = 0;

var SignPayout = 0;

var FinalizePayout = 0;

exports.Initialize = Initialize;
exports.PartnerApproval = PartnerApproval;
exports.PartnerRemovalApproval = PartnerRemovalApproval;
exports.AccountCreationApproval = AccountCreationApproval;
exports.CustodianApproval = CustodianApproval;
exports.CustodianRemovalApproval = CustodianRemovalApproval;
exports.AutoEndorseCustodianSelf = AutoEndorseCustodianSelf;
exports.CustodianKeyChain = CustodianKeyChain;
exports.AccountKeyChain = AccountKeyChain;
exports.AbortPayout = AbortPayout;
exports.PayoutApproval = PayoutApproval;
exports.SignPayout = SignPayout;
exports.FinalizePayout = FinalizePayout;
exports.initWatcherFor = initWatcherFor;
exports.apply = apply;
exports.processPendingPromise = processPendingPromise;
exports.processPending = processPending;
exports.applyAndProcessPending = applyAndProcessPending;
/* Utils Not a pure module */
