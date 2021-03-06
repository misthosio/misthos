// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Session = require("../web/Session.bs.js");
var Venture = require("../application/Venture.bs.js");
var EventLog = require("../application/events/EventLog.bs.js");
var UserInfo = require("../application/UserInfo.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Blockstack = require("../ffi/Blockstack.bs.js");
var WorkerUtils = require("./WorkerUtils.bs.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var PersistWorkerMessage = require("./PersistWorkerMessage.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

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
                        /* :: */[
                          /* tuple */[
                            data[/* id */1],
                            data[/* pubKey */2]
                          ],
                          keys
                        ],
                        processLookup,
                        removalProcesses
                      ];
            case 7 : 
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
            case 8 : 
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
            case 9 : 
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
            case 10 : 
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
            case 21 : 
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
            case 22 : 
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
            case 23 : 
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
            case 24 : 
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
  return Blockstack.putFileEncryptedFor(PrimitiveTypes.VentureId[/* toString */0](ventureId) + ("/" + (UserInfo.storagePrefix(pubKey) + "/log.json")), logString, pubKey);
}

function persistSummaryString(ventureId, summaryString, pubKey) {
  return Blockstack.putFileEncryptedFor(PrimitiveTypes.VentureId[/* toString */0](ventureId) + ("/" + (UserInfo.storagePrefix(pubKey) + "/summary.json")), summaryString, pubKey);
}

function persistRemovals(ventureId, param) {
  var removedKeys = param[1];
  return List.fold_left((function (promise, param) {
                var pubKey = List.assoc(param[0], removedKeys);
                if (pubKey !== undefined) {
                  var pubKey$1 = pubKey;
                  var eventLog = List.fold_left((function (log, item) {
                          return Curry._2(EventLog.appendItem, item, log);
                        }), Curry._1(EventLog.make, /* () */0), List.rev(param[1]));
                  return promise.then((function (param) {
                                  return persistLogString(ventureId, Json.stringify(Curry._1(EventLog.encode, eventLog)), pubKey$1);
                                })).then((function (param) {
                                return persistSummaryString(ventureId, Json.stringify(Curry._1(EventLog.encodeSummary, Curry._1(EventLog.getSummary, eventLog))), pubKey$1);
                              }));
                } else {
                  return promise;
                }
              }), Promise.resolve(/* () */0), param[0]);
}

var missingKeys = /* record */[/* contents */Belt_MapString.empty];

function addToMissingKeys(ventureId, userId, f) {
  var key = PrimitiveTypes.VentureId[/* toString */0](ventureId) + PrimitiveTypes.UserId[/* toString */0](userId);
  missingKeys[0] = Belt_MapString.set(missingKeys[0], key, f);
  return /* () */0;
}

function removeVentureFromMissingKeys(ventureId) {
  var ventureStr = PrimitiveTypes.VentureId[/* toString */0](ventureId);
  missingKeys[0] = Belt_MapString.keepU(missingKeys[0], (function (key, param) {
          return key.startsWith(ventureStr) === false;
        }));
  return /* () */0;
}

setInterval((function (param) {
        Belt_MapString.reduceU(missingKeys[0], Promise.resolve(/* () */0), (function (promise, key, param) {
                var f = param[1];
                return UserInfo.Public[/* read */0](param[0]).then((function (param) {
                              if (param) {
                                if (Belt_MapString.has(missingKeys[0], key)) {
                                  logMessage("Missing key has been found");
                                  return Curry._2(f, param[0][/* appPubKey */0], promise).then((function (param) {
                                                missingKeys[0] = Belt_MapString.remove(missingKeys[0], key);
                                                return Promise.resolve(/* () */0);
                                              }));
                                } else {
                                  return promise;
                                }
                              } else {
                                logMessage("Could not find UserInfo");
                                return promise;
                              }
                            }));
              }));
        return /* () */0;
      }), 10000);

function persist(ventureId, eventLog, param) {
  var removals = param[1];
  var logString = Json.stringify(Curry._1(EventLog.encode, eventLog));
  var summaryString = Json.stringify(Curry._1(EventLog.encodeSummary, Curry._1(EventLog.getSummary, eventLog)));
  var persistLogAndSummary = function (pubKey, promise) {
    return promise.then((function (param) {
                    return persistLogString(ventureId, logString, pubKey);
                  })).then((function (param) {
                  return persistSummaryString(ventureId, summaryString, pubKey);
                }));
  };
  return List.fold_left((function (promise, param) {
                  var pubKey = param[1];
                  var id = param[0];
                  removeVentureFromMissingKeys(ventureId);
                  if (pubKey !== undefined) {
                    return persistLogAndSummary(pubKey, promise);
                  } else {
                    return UserInfo.Public[/* read */0](id).then((function (param) {
                                  if (param) {
                                    return persistLogAndSummary(param[0][/* appPubKey */0], promise);
                                  } else {
                                    addToMissingKeys(ventureId, id, /* tuple */[
                                          id,
                                          persistLogAndSummary
                                        ]);
                                    return promise;
                                  }
                                }));
                  }
                }), Promise.resolve(/* () */0), param[0]).then((function (param) {
                return Promise.resolve(removals);
              }));
}

function persistVenture(ventureId) {
  logMessage("Persisting venture '" + (PrimitiveTypes.VentureId[/* toString */0](ventureId) + "'"));
  return Session.getCurrentSession(/* () */0).then((function (param) {
                if (typeof param === "number" || param.tag !== 1) {
                  return Promise.resolve(/* () */0);
                } else {
                  return WorkerUtils.loadVenture(ventureId).then((function (eventLog) {
                                  return persist(ventureId, eventLog, determinPartnerKeysAndRemovals(eventLog));
                                })).then((function (param) {
                                return persistRemovals(ventureId, param);
                              }));
                }
              }));
}

function handleMessage(param) {
  if (typeof param === "number") {
    return Promise.resolve(/* () */0);
  } else {
    switch (param.tag | 0) {
      case 0 : 
          logMessage("Handling 'SessionStarted'");
          WorkerLocalStorage.setBlockstackItems(param[0]);
          return Venture.Index[/* load */0](/* () */0).then((function (param) {
                        return Belt_List.reduce(param[/* ventures */0], Promise.resolve(/* () */0), (function (p, param) {
                                      var id = param[/* id */0];
                                      return p.then((function (param) {
                                                    return persistVenture(id);
                                                  }));
                                    }));
                      }));
      case 3 : 
          if (param[2].length !== 0) {
            return persistVenture(param[0]);
          } else {
            return Promise.resolve(/* () */0);
          }
      case 4 : 
      case 5 : 
          return persistVenture(param[0]);
      default:
        return Promise.resolve(/* () */0);
    }
  }
}

self.onmessage = (function (msg) {
    handleMessage(PersistWorkerMessage.decodeIncoming(msg.data.payload));
    return /* () */0;
  });

exports.logMessage = logMessage;
exports.determinPartnerKeysAndRemovals = determinPartnerKeysAndRemovals;
exports.persistLogString = persistLogString;
exports.persistSummaryString = persistSummaryString;
exports.persistRemovals = persistRemovals;
exports.missingKeys = missingKeys;
exports.addToMissingKeys = addToMissingKeys;
exports.removeVentureFromMissingKeys = removeVentureFromMissingKeys;
exports.persist = persist;
exports.persistVenture = persistVenture;
exports.handleMessage = handleMessage;
/*  Not a pure module */
