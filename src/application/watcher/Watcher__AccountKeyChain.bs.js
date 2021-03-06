// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var $$Event = require("../events/Event.bs.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var EventLog = require("../events/EventLog.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var WalletTypes = require("../wallet/WalletTypes.bs.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var PrimitiveTypes = require("../PrimitiveTypes.bs.js");
var AccountKeyChain = require("../wallet/AccountKeyChain.bs.js");
var AccountSettings = require("../wallet/AccountSettings.bs.js");
var CustodianKeyChain = require("../wallet/CustodianKeyChain.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var class_tables = [
  0,
  0,
  0
];

function make(param, param$1, log) {
  var match = param$1[/* data */2];
  var settings = match[/* settings */1];
  var accountIdx = match[/* accountIdx */0];
  var issuerKeyPair = param[/* issuerKeyPair */2];
  var localUserId = param[/* userId */0];
  var identifiedEvent = function (keyChains, state) {
    var $$event = $$Event.AccountKeyChainIdentified[/* make */0](AccountKeyChain.make(Js_option.getWithDefault(AccountSettings.$$default, settings), accountIdx, keyChains));
    var identifier = $$event[/* keyChain */0][/* identifier */1];
    var match = List.mem_assoc(identifier, state[/* identifiedKeyChains */2]);
    if (match) {
      return /* tuple */[
              identifier,
              state[/* identifiedKeyChains */2],
              undefined
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
              /* tuple */[
                state[/* systemIssuer */0],
                /* AccountKeyChainIdentified */Block.__(38, [$$event])
              ]
            ];
    }
  };
  var activatedEvent = function (identifier, identifiedKeyChains) {
    return /* tuple */[
            issuerKeyPair,
            /* AccountKeyChainActivated */Block.__(39, [$$Event.AccountKeyChainActivated[/* make */0](accountIdx, localUserId, identifier, List.assoc(identifier, identifiedKeyChains))])
          ];
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
                      /* systemIssuer */$$event[0][/* systemIssuer */7],
                      /* custodianKeyChains */init[/* custodianKeyChains */1],
                      /* identifiedKeyChains */init[/* identifiedKeyChains */2],
                      /* identifiedEvent */init[/* identifiedEvent */3],
                      /* activatedEvent */init[/* activatedEvent */4],
                      /* waitingForIdentification */init[/* waitingForIdentification */5],
                      /* active */init[/* active */6]
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
                        /* waitingForIdentification */init$1[/* waitingForIdentification */5],
                        /* active */true
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 10 : 
                    if (PrimitiveTypes.UserId[/* eq */5]($$event[0][/* data */2][/* id */0], env$1[0])) {
                      var init$2 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$2[/* systemIssuer */0],
                        /* custodianKeyChains */init$2[/* custodianKeyChains */1],
                        /* identifiedKeyChains */init$2[/* identifiedKeyChains */2],
                        /* identifiedEvent */init$2[/* identifiedEvent */3],
                        /* activatedEvent */init$2[/* activatedEvent */4],
                        /* waitingForIdentification */init$2[/* waitingForIdentification */5],
                        /* active */false
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 24 : 
                    var match = $$event[0][/* data */2];
                    var removedAccount = match[/* accountIdx */1];
                    var custodianId = match[/* custodianId */0];
                    if (PrimitiveTypes.UserId[/* eq */5](custodianId, env$1[0]) && WalletTypes.AccountIndex[/* eq */7](removedAccount, removedAccount)) {
                      var init$3 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$3[/* systemIssuer */0],
                        /* custodianKeyChains */init$3[/* custodianKeyChains */1],
                        /* identifiedKeyChains */init$3[/* identifiedKeyChains */2],
                        /* identifiedEvent */init$3[/* identifiedEvent */3],
                        /* activatedEvent */init$3[/* activatedEvent */4],
                        /* waitingForIdentification */init$3[/* waitingForIdentification */5],
                        /* active */false
                      ];
                    } else if (WalletTypes.AccountIndex[/* eq */7](removedAccount, removedAccount)) {
                      try {
                        var custodianKeyChains = List.remove_assoc(custodianId, self$1[state][0][/* custodianKeyChains */1]);
                        var match$1 = Curry._2(env$1[2], custodianKeyChains, self$1[state][0]);
                        var identifiedKeyChains = match$1[1];
                        var identifier = match$1[0];
                        var init$4 = self$1[state][0];
                        tmp = /* record */[
                          /* systemIssuer */init$4[/* systemIssuer */0],
                          /* custodianKeyChains */custodianKeyChains,
                          /* identifiedKeyChains */identifiedKeyChains,
                          /* identifiedEvent */match$1[2],
                          /* activatedEvent */Curry._2(env$1[3], identifier, identifiedKeyChains),
                          /* waitingForIdentification */identifier,
                          /* active */init$4[/* active */6]
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
                case 37 : 
                    var match$2 = $$event[0];
                    var keyChain = match$2[/* keyChain */2];
                    var custodianId$1 = match$2[/* custodianId */1];
                    if (Caml_obj.caml_equal(CustodianKeyChain.accountIdx(keyChain), env$1[1])) {
                      var custodianKeyChains_000 = /* tuple */[
                        custodianId$1,
                        keyChain
                      ];
                      var custodianKeyChains_001 = List.remove_assoc(custodianId$1, self$1[state][0][/* custodianKeyChains */1]);
                      var custodianKeyChains$1 = /* :: */[
                        custodianKeyChains_000,
                        custodianKeyChains_001
                      ];
                      var match$3 = Curry._2(env$1[2], custodianKeyChains$1, self$1[state][0]);
                      var identifiedKeyChains$1 = match$3[1];
                      var identifier$1 = match$3[0];
                      var init$5 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$5[/* systemIssuer */0],
                        /* custodianKeyChains */custodianKeyChains$1,
                        /* identifiedKeyChains */identifiedKeyChains$1,
                        /* identifiedEvent */match$3[2],
                        /* activatedEvent */Curry._2(env$1[3], identifier$1, identifiedKeyChains$1),
                        /* waitingForIdentification */identifier$1,
                        /* active */init$5[/* active */6]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 38 : 
                    var keyChain$1 = $$event[0][/* keyChain */0];
                    if (Caml_obj.caml_equal(keyChain$1[/* accountIdx */0], env$1[1]) && keyChain$1[/* identifier */1] === self$1[state][0][/* waitingForIdentification */5]) {
                      var init$6 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$6[/* systemIssuer */0],
                        /* custodianKeyChains */init$6[/* custodianKeyChains */1],
                        /* identifiedKeyChains */init$6[/* identifiedKeyChains */2],
                        /* identifiedEvent */undefined,
                        /* activatedEvent */init$6[/* activatedEvent */4],
                        /* waitingForIdentification */"",
                        /* active */init$6[/* active */6]
                      ];
                    } else {
                      tmp = self$1[state][0];
                    }
                    break;
                case 39 : 
                    var match$4 = $$event[0];
                    var identifier$2 = match$4[/* identifier */2];
                    if (WalletTypes.AccountIndex[/* eq */7](match$4[/* accountIdx */0], env$1[1]) && PrimitiveTypes.UserId[/* eq */5](match$4[/* custodianId */1], env$1[0])) {
                      var init$7 = self$1[state][0];
                      tmp = /* record */[
                        /* systemIssuer */init$7[/* systemIssuer */0],
                        /* custodianKeyChains */init$7[/* custodianKeyChains */1],
                        /* identifiedKeyChains : :: */[
                          /* tuple */[
                            identifier$2,
                            List.assoc(identifier$2, self$1[state][0][/* identifiedKeyChains */2]) + 1 | 0
                          ],
                          List.remove_assoc(identifier$2, self$1[state][0][/* identifiedKeyChains */2])
                        ],
                        /* identifiedEvent */init$7[/* identifiedEvent */3],
                        /* activatedEvent */undefined,
                        /* waitingForIdentification */init$7[/* waitingForIdentification */5],
                        /* active */init$7[/* active */6]
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
          (function (self$1, param) {
              return false;
            }),
          pendingEvent,
          (function (self$1, param) {
              var match = self$1[state][0][/* active */6];
              if (match) {
                var match$1 = self$1[state][0][/* identifiedEvent */3];
                if (match$1 !== undefined) {
                  return self$1[state][0][/* identifiedEvent */3];
                } else {
                  return self$1[state][0][/* activatedEvent */4];
                }
              }
              
            })
        ]);
    var env_init = function (env$1) {
      var self = CamlinternalOO.create_object_opt(0, $$class);
      self[state] = /* record */[/* contents : record */[
          /* systemIssuer */BitcoinjsLib.ECPair.makeRandom(),
          /* custodianKeyChains : [] */0,
          /* identifiedKeyChains : [] */0,
          /* identifiedEvent */undefined,
          /* activatedEvent */undefined,
          /* waitingForIdentification */"",
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
  Curry._3(EventLog.reduce, (function (param, item) {
          return Caml_oo_curry.js2(710435299, 1, $$process, item);
        }), /* () */0, log);
  return $$process;
}

exports.make = make;
/* Event Not a pure module */
