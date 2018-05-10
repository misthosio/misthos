// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../events/Event.bs.js");
var Utils = require("../../utils/Utils.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var EventLog = require("../events/EventLog.bs.js");
var WalletTypes = require("../wallet/WalletTypes.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("../wallet/AccountKeyChain.bs.js");
var CustodianKeyChain = require("../wallet/CustodianKeyChain.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var class_tables = [
  0,
  0,
  0
];

function make(param, param$1, log) {
  var accountIdx = param$1[/* data */2][/* accountIdx */0];
  var issuerKeyPair = param[/* issuerKeyPair */2];
  var localUserId = param[/* userId */0];
  var identifiedEvent = function (keyChains, state) {
    var $$event = Event.AccountKeyChainIdentified[/* make */0](AccountKeyChain.make(accountIdx, WalletTypes.AccountKeyChainIndex[/* first */2], keyChains));
    var identifier = $$event[/* identifier */0];
    var match = List.mem_assoc(identifier, state[/* identifiedKeyChains */2]);
    if (match) {
      return /* tuple */[
              identifier,
              state[/* identifiedKeyChains */2],
              /* None */0
            ];
    } else {
      return /* tuple */[
              identifier,
              /* :: */[
                /* tuple */[
                  identifier,
                  0
                ],
                state[/* identifiedKeyChains */2]
              ],
              /* Some */[/* tuple */[
                  state[/* systemIssuer */0],
                  /* AccountKeyChainIdentified */Block.__(30, [$$event])
                ]]
            ];
    }
  };
  var activatedEvent = function (identifier, identifiedKeyChains) {
    return /* Some */[/* tuple */[
              issuerKeyPair,
              /* AccountKeyChainActivated */Block.__(31, [Event.AccountKeyChainActivated[/* make */0](accountIdx, localUserId, identifier, List.assoc(identifier, identifiedKeyChains))])
            ]];
  };
  if (!class_tables[0]) {
    var $$class = CamlinternalOO.create_table([
          "processCompleted",
          "receive",
          "pendingEvent"
        ]);
    var env = CamlinternalOO.new_variable($$class, "");
    var ids = CamlinternalOO.new_methods_variables($$class, [
          "receive",
          "processCompleted",
          "pendingEvent"
        ], ["state"]);
    var receive = ids[0];
    var processCompleted = ids[1];
    var pendingEvent = ids[2];
    var state = ids[3];
    CamlinternalOO.set_methods($$class, /* array */[
          receive,
          (function (self$1, param) {
              var env$1 = self$1[env];
              var $$event = param[/* event */0];
              var tmp;
              switch ($$event.tag | 0) {
                case 0 : 
                    var init = self$1[state][0];
                    tmp = /* record */[
                      /* systemIssuer */$$event[0][/* systemIssuer */5],
                      /* custodianKeyChains */init[/* custodianKeyChains */1],
                      /* identifiedKeyChains */init[/* identifiedKeyChains */2],
                      /* identifiedEvent */init[/* identifiedEvent */3],
                      /* activatedEvent */init[/* activatedEvent */4],
                      /* active */init[/* active */5]
                    ];
                    break;
                case 4 : 
                    if (PrimitiveTypes.UserId[/* eq */5]($$event[0][/* data */2][/* id */1], env$1[0])) {
                      var init$1 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$1[/* systemIssuer */0],
                        /* custodianKeyChains */init$1[/* custodianKeyChains */1],
                        /* identifiedKeyChains */init$1[/* identifiedKeyChains */2],
                        /* identifiedEvent */init$1[/* identifiedEvent */3],
                        /* activatedEvent */init$1[/* activatedEvent */4],
                        /* active */true
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 8 : 
                    if (PrimitiveTypes.UserId[/* eq */5]($$event[0][/* data */2][/* id */0], env$1[0])) {
                      var init$2 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$2[/* systemIssuer */0],
                        /* custodianKeyChains */init$2[/* custodianKeyChains */1],
                        /* identifiedKeyChains */init$2[/* identifiedKeyChains */2],
                        /* identifiedEvent */init$2[/* identifiedEvent */3],
                        /* activatedEvent */init$2[/* activatedEvent */4],
                        /* active */false
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 20 : 
                    var match = $$event[0][/* data */2];
                    var removedAccount = match[/* accountIdx */1];
                    if (WalletTypes.AccountIndex[/* eq */7](removedAccount, removedAccount)) {
                      try {
                        var custodianKeyChains = List.remove_assoc(match[/* custodianId */0], self$1[state][0][/* custodianKeyChains */1]);
                        var match$1 = Curry._2(env$1[2], custodianKeyChains, self$1[state][0]);
                        var identifiedKeyChains = match$1[1];
                        var init$3 = self$1[state][0];
                        tmp = /* record */[
                          /* systemIssuer */init$3[/* systemIssuer */0],
                          /* custodianKeyChains */init$3[/* custodianKeyChains */1],
                          /* identifiedKeyChains */identifiedKeyChains,
                          /* identifiedEvent */match$1[2],
                          /* activatedEvent */Curry._2(env$1[3], match$1[0], identifiedKeyChains),
                          /* active */init$3[/* active */5]
                        ];
                      }
                      catch (exn){
                        if (exn === Caml_builtin_exceptions.not_found) {
                          tmp = self$1[state][0];
                        } else {
                          throw exn;
                        }
                      }
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 29 : 
                    var match$2 = $$event[0];
                    var keyChain = match$2[/* keyChain */2];
                    var custodianId = match$2[/* custodianId */1];
                    if (Caml_obj.caml_equal(CustodianKeyChain.accountIdx(keyChain), env$1[1])) {
                      var custodianKeyChains_000 = /* tuple */[
                        custodianId,
                        keyChain
                      ];
                      var custodianKeyChains_001 = List.remove_assoc(custodianId, self$1[state][0][/* custodianKeyChains */1]);
                      var custodianKeyChains$1 = /* :: */[
                        custodianKeyChains_000,
                        custodianKeyChains_001
                      ];
                      var match$3 = Curry._2(env$1[2], custodianKeyChains$1, self$1[state][0]);
                      var identifiedKeyChains$1 = match$3[1];
                      var init$4 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$4[/* systemIssuer */0],
                        /* custodianKeyChains */custodianKeyChains$1,
                        /* identifiedKeyChains */identifiedKeyChains$1,
                        /* identifiedEvent */match$3[2],
                        /* activatedEvent */Curry._2(env$1[3], match$3[0], identifiedKeyChains$1),
                        /* active */init$4[/* active */5]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 30 : 
                    if (Caml_obj.caml_equal($$event[0][/* keyChain */1][/* accountIdx */0], env$1[1])) {
                      var init$5 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$5[/* systemIssuer */0],
                        /* custodianKeyChains */init$5[/* custodianKeyChains */1],
                        /* identifiedKeyChains */init$5[/* identifiedKeyChains */2],
                        /* identifiedEvent : None */0,
                        /* activatedEvent */init$5[/* activatedEvent */4],
                        /* active */init$5[/* active */5]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 31 : 
                    var match$4 = $$event[0];
                    var identifier = match$4[/* identifier */2];
                    if (WalletTypes.AccountIndex[/* eq */7](match$4[/* accountIdx */0], env$1[1]) && PrimitiveTypes.UserId[/* eq */5](match$4[/* custodianId */1], env$1[0])) {
                      var init$6 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$6[/* systemIssuer */0],
                        /* custodianKeyChains */init$6[/* custodianKeyChains */1],
                        /* identifiedKeyChains : :: */[
                          /* tuple */[
                            identifier,
                            List.assoc(identifier, self$1[state][0][/* identifiedKeyChains */2]) + 1 | 0
                          ],
                          List.remove_assoc(identifier, self$1[state][0][/* identifiedKeyChains */2])
                        ],
                        /* identifiedEvent */init$6[/* identifiedEvent */3],
                        /* activatedEvent : None */0,
                        /* active */init$6[/* active */5]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                default:
                  tmp = self$1[state][0];
              }
              self$1[state][0] = tmp;
              return /* () */0;
            }),
          processCompleted,
          (function (_, _$1) {
              return false;
            }),
          pendingEvent,
          (function (self$1, _) {
              var match = self$1[state][0][/* active */5];
              if (match) {
                var match$1 = self$1[state][0][/* identifiedEvent */3];
                return Utils.mapOption((function (prim) {
                              return Promise.resolve(prim);
                            }), match$1 ? self$1[state][0][/* identifiedEvent */3] : self$1[state][0][/* activatedEvent */4]);
              } else {
                return /* None */0;
              }
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[state] = [/* record */[
          /* systemIssuer */BitcoinjsLib.ECPair.makeRandom(),
          /* custodianKeyChains : [] */0,
          /* identifiedKeyChains : [] */0,
          /* identifiedEvent : None */0,
          /* activatedEvent : None */0,
          /* active */false
        ]];
      self[env] = env$1;
      return self;
    };
    CamlinternalOO.init_class($$class);
    class_tables[0] = env_init;
  }
  var envs = [
    localUserId,
    accountIdx,
    identifiedEvent,
    activatedEvent
  ];
  var $$process = Curry._1(class_tables[0], envs);
  Curry._3(EventLog.reduce, (function (_, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
