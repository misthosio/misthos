// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Json = require("bs-json/src/Json.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../utils/Utils.bs.js");
var Session = require("../application/Session.bs.js");
var EventLog = require("../application/events/EventLog.bs.js");
var UserInfo = require("../application/UserInfo.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Blockstack = require("blockstack");
var WorkerUtils = require("./WorkerUtils.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var PersistWorkerMessage = require("./PersistWorkerMessage.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");
var EncryptionJs = require("blockstack/lib/encryption.js");

(( self.localStorage = require("./fakeLocalStorage").localStorage ));

(( self.window = { localStorage: self.localStorage , location: { origin: self.origin } } ));

function logMessage(msg) {
  console.log("[Persist Worker] - " + msg);
  return /* () */0;
}

function determinPartnerKeysAndRemovals(eventLog) {
  var match = Curry._3(EventLog.reduce, (function (param, item) {
          var $$event = item[/* event */0];
          var removalProcesses = param[3];
          var processLookup = param[2];
          var keys = param[1];
          var partners = param[0];
          switch ($$event.tag | 0) {
            case 4 : 
                var data = $$event[0][/* data */2];
                return /* tuple */[
                        /* :: */[
                          data[/* id */1],
                          partners
                        ],
                        Js_option.getWithDefault(keys, Utils.mapOption((function (pubKey) {
                                    return /* :: */[
                                            /* tuple */[
                                              data[/* id */1],
                                              pubKey
                                            ],
                                            keys
                                          ];
                                  }), data[/* pubKey */2])),
                        processLookup,
                        removalProcesses
                      ];
            case 6 : 
                var match = $$event[0];
                var id = match[/* data */6][/* id */0];
                var removals;
                try {
                  removals = List.assoc(id, removalProcesses);
                }
                catch (exn){
                  if (exn === Caml_builtin_exceptions.not_found) {
                    removals = /* [] */0;
                  } else {
                    throw exn;
                  }
                }
                return /* tuple */[
                        partners,
                        keys,
                        /* :: */[
                          /* tuple */[
                            match[/* processId */0],
                            id
                          ],
                          processLookup
                        ],
                        /* :: */[
                          /* tuple */[
                            id,
                            /* :: */[
                              item,
                              removals
                            ]
                          ],
                          List.remove_assoc(id, removalProcesses)
                        ]
                      ];
            case 7 : 
                var id$1 = List.assoc($$event[0][/* processId */0], processLookup);
                var removals$1 = List.assoc(id$1, removalProcesses);
                return /* tuple */[
                        partners,
                        keys,
                        processLookup,
                        /* :: */[
                          /* tuple */[
                            id$1,
                            /* :: */[
                              item,
                              removals$1
                            ]
                          ],
                          List.remove_assoc(id$1, removalProcesses)
                        ]
                      ];
            case 8 : 
                var id$2 = List.assoc($$event[0][/* processId */0], processLookup);
                var removals$2 = List.assoc(id$2, removalProcesses);
                return /* tuple */[
                        partners,
                        keys,
                        processLookup,
                        /* :: */[
                          /* tuple */[
                            id$2,
                            /* :: */[
                              item,
                              removals$2
                            ]
                          ],
                          List.remove_assoc(id$2, removalProcesses)
                        ]
                      ];
            case 9 : 
                var id$3 = $$event[0][/* data */2][/* id */0];
                var removals$3 = List.assoc(id$3, removalProcesses);
                var partial_arg = PrimitiveTypes.UserId[/* neq */6];
                return /* tuple */[
                        List.filter((function (param) {
                                  return partial_arg(id$3, param);
                                }))(partners),
                        keys,
                        processLookup,
                        /* :: */[
                          /* tuple */[
                            id$3,
                            /* :: */[
                              item,
                              removals$3
                            ]
                          ],
                          List.remove_assoc(id$3, removalProcesses)
                        ]
                      ];
            case 20 : 
                var match$1 = $$event[0];
                var custodianId = match$1[/* data */6][/* custodianId */0];
                var removals$4;
                try {
                  removals$4 = List.assoc(custodianId, removalProcesses);
                }
                catch (exn$1){
                  if (exn$1 === Caml_builtin_exceptions.not_found) {
                    removals$4 = /* [] */0;
                  } else {
                    throw exn$1;
                  }
                }
                return /* tuple */[
                        partners,
                        keys,
                        /* :: */[
                          /* tuple */[
                            match$1[/* processId */0],
                            custodianId
                          ],
                          processLookup
                        ],
                        /* :: */[
                          /* tuple */[
                            custodianId,
                            /* :: */[
                              item,
                              removals$4
                            ]
                          ],
                          List.remove_assoc(custodianId, removalProcesses)
                        ]
                      ];
            case 21 : 
                var id$4 = List.assoc($$event[0][/* processId */0], processLookup);
                var removals$5 = List.assoc(id$4, removalProcesses);
                return /* tuple */[
                        partners,
                        keys,
                        processLookup,
                        /* :: */[
                          /* tuple */[
                            id$4,
                            /* :: */[
                              item,
                              removals$5
                            ]
                          ],
                          List.remove_assoc(id$4, removalProcesses)
                        ]
                      ];
            case 22 : 
                var id$5 = List.assoc($$event[0][/* processId */0], processLookup);
                var removals$6 = List.assoc(id$5, removalProcesses);
                return /* tuple */[
                        partners,
                        keys,
                        processLookup,
                        /* :: */[
                          /* tuple */[
                            id$5,
                            /* :: */[
                              item,
                              removals$6
                            ]
                          ],
                          List.remove_assoc(id$5, removalProcesses)
                        ]
                      ];
            case 23 : 
                var custodianId$1 = $$event[0][/* data */2][/* custodianId */0];
                var removals$7 = List.assoc(custodianId$1, removalProcesses);
                var partial_arg$1 = PrimitiveTypes.UserId[/* neq */6];
                return /* tuple */[
                        List.filter((function (param) {
                                  return partial_arg$1(custodianId$1, param);
                                }))(partners),
                        keys,
                        processLookup,
                        /* :: */[
                          /* tuple */[
                            custodianId$1,
                            /* :: */[
                              item,
                              removals$7
                            ]
                          ],
                          List.remove_assoc(custodianId$1, removalProcesses)
                        ]
                      ];
            default:
              return /* tuple */[
                      partners,
                      keys,
                      processLookup,
                      removalProcesses
                    ];
          }
        }), /* tuple */[
        /* [] */0,
        /* [] */0,
        /* [] */0,
        /* [] */0
      ], eventLog);
  var keys = match[1];
  var partners = match[0];
  return /* tuple */[
          List.filter((function (param) {
                    return List.mem(param[0], partners);
                  }))(keys),
          /* tuple */[
            List.filter((function (param) {
                      return List.mem(param[0], partners) === false;
                    }))(match[3]),
            keys
          ]
        ];
}

function persistLogString(ventureId, logString, pubKey) {
  return Blockstack.putFile(PrimitiveTypes.VentureId[/* toString */0](ventureId) + ("/" + (UserInfo.storagePrefix(pubKey) + "/log.json")), Json.stringify(EncryptionJs.encryptECIES(pubKey, logString)), ( {"encrypt": false} ));
}

function persistSummaryString(ventureId, summaryString, pubKey) {
  return Blockstack.putFile(PrimitiveTypes.VentureId[/* toString */0](ventureId) + ("/" + (UserInfo.storagePrefix(pubKey) + "/summary.json")), Json.stringify(EncryptionJs.encryptECIES(pubKey, summaryString)), ( {"encrypt": false} ));
}

function persistRemovals(ventureId, param) {
  var removedKeys = param[1];
  return List.fold_left((function (promise, param) {
                var pubKey = List.assoc(param[0], removedKeys);
                var eventLog = List.fold_left((function (log, item) {
                        return Curry._2(EventLog.appendItem, item, log);
                      }), Curry._1(EventLog.make, /* () */0), List.rev(param[1]));
                return promise.then((function () {
                                return persistLogString(ventureId, Json.stringify(Curry._1(EventLog.encode, eventLog)), pubKey);
                              })).then((function () {
                              return persistSummaryString(ventureId, Json.stringify(Curry._1(EventLog.encodeSummary, Curry._1(EventLog.getSummary, eventLog))), pubKey);
                            }));
              }), Promise.resolve(/* () */0), param[0]);
}

function persist(ventureId, eventLog, param) {
  var removals = param[1];
  var logString = Json.stringify(Curry._1(EventLog.encode, eventLog));
  var summaryString = Json.stringify(Curry._1(EventLog.encodeSummary, Curry._1(EventLog.getSummary, eventLog)));
  return List.fold_left((function (promise, param) {
                  var pubKey = param[1];
                  return promise.then((function () {
                                  return persistLogString(ventureId, logString, pubKey);
                                })).then((function () {
                                return persistSummaryString(ventureId, summaryString, pubKey);
                              }));
                }), Promise.resolve(/* () */0), param[0]).then((function () {
                return Promise.resolve(removals);
              }));
}

function persistVenture(ventureId) {
  logMessage("Persisting venture '" + (PrimitiveTypes.VentureId[/* toString */0](ventureId) + "'"));
  Session.getCurrentSession(/* () */0).then((function (param) {
          if (typeof param === "number") {
            return Promise.resolve(/* () */0);
          } else {
            return WorkerUtils.loadVenture(ventureId).then((function (eventLog) {
                            return persist(ventureId, eventLog, determinPartnerKeysAndRemovals(eventLog));
                          })).then((function (param) {
                          return persistRemovals(ventureId, param);
                        }));
          }
        }));
  return /* () */0;
}

function handleMessage(param) {
  if (typeof param === "number") {
    return /* () */0;
  } else {
    switch (param.tag | 0) {
      case 0 : 
          logMessage("Handling 'SessionStarted'");
          return WorkerLocalStorage.setBlockstackItems(param[0]);
      case 3 : 
          if (param[2].length !== 0) {
            return persistVenture(param[0]);
          } else {
            return /* () */0;
          }
      case 4 : 
      case 5 : 
          return persistVenture(param[0]);
      default:
        return /* () */0;
    }
  }
}

self.onmessage = (function (msg) {
    return handleMessage(PersistWorkerMessage.decodeIncoming(msg.data.payload));
  });

exports.logMessage = logMessage;
exports.determinPartnerKeysAndRemovals = determinPartnerKeysAndRemovals;
exports.persistLogString = persistLogString;
exports.persistSummaryString = persistSummaryString;
exports.persistRemovals = persistRemovals;
exports.persist = persist;
exports.persistVenture = persistVenture;
exports.handleMessage = handleMessage;
/*  Not a pure module */
