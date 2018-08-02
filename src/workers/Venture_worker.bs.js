// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Raven = require("../ffi/Raven.bs.js");
var Utils = require("../utils/Utils.bs.js");
var Session = require("../web/Session.bs.js");
var Venture = require("../application/Venture.bs.js");
var EventLog = require("../application/events/EventLog.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var VentureWorkerMessage = require("./VentureWorkerMessage.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

(( self.localStorage = require("./fakeLocalStorage").localStorage ));

(( self.window = { localStorage: self.localStorage , location: { origin: self.origin } } ));

Raven.initialize(/* () */0);

function postMessage$1(correlationId, msg) {
  postMessage({
        payload: VentureWorkerMessage.encodeOutgoing(msg),
        correlationId: correlationId
      });
  return /* () */0;
}

function logMessage(msg) {
  console.log("[Venture Worker] - " + msg);
  return /* () */0;
}

function logError(error) {
  Raven.captureException(error);
  console.error("[Venture Worker] - Encountered an unhandled exception");
  console.error(error);
  return /* () */0;
}

function cmdSuccess(ventureId, correlationId, response) {
  return postMessage$1(correlationId, /* CmdCompleted */Block.__(6, [
                ventureId,
                correlationId,
                /* Ok */Block.__(0, [response])
              ]));
}

function cmdError(ventureId, correlationId, response) {
  return postMessage$1(correlationId, /* CmdCompleted */Block.__(6, [
                ventureId,
                correlationId,
                /* Error */Block.__(1, [response])
              ]));
}

function sessionPending(correlationId) {
  return postMessage$1(correlationId, /* SessionPending */0);
}

function sessionStarted(correlationId, blockstackItems, storagePrefix) {
  return postMessage$1(correlationId, /* SessionStarted */Block.__(0, [
                blockstackItems,
                storagePrefix
              ]));
}

function indexUpdated(correlationId, index) {
  return postMessage$1(correlationId, /* UpdateIndex */Block.__(2, [index]));
}

function ventureLoaded(correlationId, id, venture, newItems) {
  return postMessage$1(correlationId, /* VentureLoaded */Block.__(3, [
                id,
                Venture.getEventLog(venture),
                newItems
              ]));
}

function ventureJoined(correlationId, id, venture) {
  var log = Venture.getEventLog(venture);
  return postMessage$1(correlationId, /* VentureLoaded */Block.__(3, [
                id,
                log,
                Curry._1(EventLog.items, log)
              ]));
}

function ventureCreated(venture) {
  var arg_000 = Venture.getId(venture);
  var arg_001 = Venture.getEventLog(venture);
  var arg = /* VentureCreated */Block.__(4, [
      arg_000,
      arg_001
    ]);
  return (function (param) {
      return postMessage$1(param, arg);
    });
}

function newIncomeAddress(correlationId, ventureId, address) {
  return postMessage$1(correlationId, /* NewIncomeAddress */Block.__(1, [
                ventureId,
                address
              ]));
}

function newItems(correlationId, id, items) {
  if (items.length !== 0) {
    return postMessage$1(correlationId, /* NewItems */Block.__(5, [
                  id,
                  items
                ]));
  } else {
    return /* () */0;
  }
}

var Notify = /* module */[
  /* cmdSuccess */cmdSuccess,
  /* cmdError */cmdError,
  /* sessionPending */sessionPending,
  /* sessionStarted */sessionStarted,
  /* indexUpdated */indexUpdated,
  /* ventureLoaded */ventureLoaded,
  /* ventureJoined */ventureJoined,
  /* ventureCreated */ventureCreated,
  /* newIncomeAddress */newIncomeAddress,
  /* newItems */newItems
];

var DeadThread = Caml_exceptions.create("Venture_worker.DeadThread");

function loadAndNotify(notify, $staropt$star, data, correlationId, ventureId) {
  var persist = $staropt$star ? $staropt$star[0] : true;
  return Venture.load(/* Some */[persist], data, ventureId).then((function (param) {
                if (param.tag) {
                  if (notify) {
                    cmdError(ventureId, correlationId, /* CouldNotLoadVenture */2);
                  }
                  throw [
                        DeadThread,
                        param[0]
                      ];
                } else {
                  var venture = param[0];
                  if (notify) {
                    ventureLoaded(correlationId, ventureId, venture, param[1]);
                  }
                  return Promise.resolve(venture);
                }
              }));
}

function withVenture($staropt$star, ventureAction, f, correlationId, param) {
  var notify = $staropt$star ? $staropt$star[0] : false;
  var venturesThread = param[/* venturesThread */0].then((function (threads) {
          return Promise.resolve(Utils.mapOption((function (param) {
                            var ventures = param[1];
                            var data = param[0];
                            var match;
                            switch (ventureAction.tag | 0) {
                              case 0 : 
                                  var match$1 = Curry._2(Venture.Cmd[/* Create */0][/* exec */0], data, ventureAction[0]);
                                  var ventureId = match$1[0];
                                  match = /* tuple */[
                                    ventureId,
                                    match$1[1].then((function (param) {
                                            if (param.tag) {
                                              cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                              throw [
                                                    DeadThread,
                                                    param[0]
                                                  ];
                                            } else {
                                              postMessage$1(correlationId, /* UpdateIndex */Block.__(2, [param[0]]));
                                              return Promise.resolve(param[1]);
                                            }
                                          }))
                                  ];
                                  break;
                              case 1 : 
                                  var ventureId$1 = ventureAction[0];
                                  try {
                                    match = /* tuple */[
                                      ventureId$1,
                                      List.assoc(ventureId$1, ventures).then((function (venture) {
                                                if (notify) {
                                                  ventureLoaded(correlationId, ventureId$1, venture, /* array */[]);
                                                }
                                                return Promise.resolve(venture);
                                              })).catch((function () {
                                              return loadAndNotify(notify, /* None */0, data, correlationId, ventureId$1);
                                            }))
                                    ];
                                  }
                                  catch (exn){
                                    if (exn === Caml_builtin_exceptions.not_found) {
                                      match = /* tuple */[
                                        ventureId$1,
                                        loadAndNotify(notify, /* None */0, data, correlationId, ventureId$1)
                                      ];
                                    } else {
                                      throw exn;
                                    }
                                  }
                                  break;
                              case 2 : 
                                  var ventureId$2 = ventureAction[0];
                                  match = /* tuple */[
                                    ventureId$2,
                                    loadAndNotify(notify, /* Some */[false], data, correlationId, ventureId$2)
                                  ];
                                  break;
                              case 3 : 
                                  var ventureId$3 = ventureAction[0];
                                  match = /* tuple */[
                                    ventureId$3,
                                    Venture.join(data, ventureAction[1], ventureId$3).then((function (param) {
                                            switch (param.tag | 0) {
                                              case 0 : 
                                                  var venture = param[1];
                                                  postMessage$1(correlationId, /* UpdateIndex */Block.__(2, [param[0]]));
                                                  ventureLoaded(correlationId, ventureId$3, venture, param[2]);
                                                  return Promise.resolve(venture);
                                              case 1 : 
                                                  var venture$1 = param[1];
                                                  postMessage$1(correlationId, /* UpdateIndex */Block.__(2, [param[0]]));
                                                  ventureJoined(correlationId, ventureId$3, venture$1);
                                                  return Promise.resolve(venture$1);
                                              case 2 : 
                                                  cmdError(ventureId$3, correlationId, /* CouldNotJoinVenture */1);
                                                  throw [
                                                        DeadThread,
                                                        param[0]
                                                      ];
                                              
                                            }
                                          }))
                                  ];
                                  break;
                              
                            }
                            var ventureId$4 = match[0];
                            var partial_arg = Curry._1(f, correlationId);
                            return /* tuple */[
                                    data,
                                    /* :: */[
                                      /* tuple */[
                                        ventureId$4,
                                        match[1].then(Curry.__1(partial_arg)).catch((function (err) {
                                                logError(err);
                                                return loadAndNotify(true, /* None */0, data, correlationId, ventureId$4);
                                              }))
                                      ],
                                      List.remove_assoc(ventureId$4, ventures)
                                    ]
                                  ];
                          }), threads));
        }));
  return /* record */[/* venturesThread */venturesThread];
}

function updateSession(items, correlationId, state) {
  logMessage("Handling 'UpdateSession'");
  WorkerLocalStorage.setBlockstackItems(items);
  var sessionThread = Session.getCurrentSession(/* () */0).then((function (param) {
          if (typeof param === "number" || param.tag !== 1) {
            return Promise.resolve(/* None */0);
          } else {
            return Promise.resolve(/* Some */[param[0]]);
          }
        }));
  return /* record */[/* venturesThread */Promise.all(/* tuple */[
                  sessionThread,
                  state[/* venturesThread */0]
                ]).then((function (param) {
                  var venturesThread = param[1];
                  var session = param[0];
                  if (session) {
                    var data = session[0];
                    var exit = 0;
                    if (venturesThread) {
                      var match = venturesThread[0];
                      if (PrimitiveTypes.UserId[/* eq */5](data[/* userId */0], match[0][/* userId */0])) {
                        return Promise.resolve(/* Some */[/* tuple */[
                                      data,
                                      match[1]
                                    ]]);
                      } else {
                        exit = 1;
                      }
                    } else {
                      exit = 1;
                    }
                    if (exit === 1) {
                      sessionStarted(correlationId, items, data[/* storagePrefix */3]);
                      Venture.Index[/* load */0](/* () */0).then((function (index) {
                              return Promise.resolve(postMessage$1(correlationId, /* UpdateIndex */Block.__(2, [index])));
                            }));
                      return Promise.resolve(/* Some */[/* tuple */[
                                    data,
                                    /* [] */0
                                  ]]);
                    }
                    
                  } else {
                    postMessage$1(correlationId, /* SessionPending */0);
                    return Promise.resolve(/* None */0);
                  }
                }))];
}

function load(ventureId) {
  logMessage("Handling 'Load'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  var partial_arg$1 = /* Some */[true];
  return (function (param, param$1) {
      return withVenture(partial_arg$1, partial_arg, (function () {
                    return (function (prim) {
                        return Promise.resolve(prim);
                      });
                  }), param, param$1);
    });
}

function joinVia(ventureId, userId) {
  logMessage("Handling 'JoinVia'");
  var partial_arg = /* JoinVia */Block.__(3, [
      ventureId,
      userId
    ]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function () {
                    return (function (prim) {
                        return Promise.resolve(prim);
                      });
                  }), param, param$1);
    });
}

function create(name) {
  logMessage("Handling 'Create'");
  var partial_arg = /* Create */Block.__(0, [name]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    ventureCreated(venture)(correlationId);
                    return Promise.resolve(venture);
                  }), param, param$1);
    });
}

function proposePartner(ventureId, prospectId) {
  logMessage("Handling 'ProposePartner'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* ProposePartner */4][/* exec */0], prospectId, venture).then((function (param) {
                                  if (typeof param === "number") {
                                    switch (param) {
                                      case 0 : 
                                          cmdError(ventureId, correlationId, /* MaxPartnersReached */3);
                                          return Promise.resolve(venture);
                                      case 1 : 
                                          cmdError(ventureId, correlationId, /* PartnerAlreadyProposed */5);
                                          return Promise.resolve(venture);
                                      case 2 : 
                                          cmdError(ventureId, correlationId, /* PartnerAlreadyExists */4);
                                          return Promise.resolve(venture);
                                      case 3 : 
                                          cmdError(ventureId, correlationId, /* UserIdDoesNotExist */6);
                                          return Promise.resolve(venture);
                                      
                                    }
                                  } else if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[2]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessStarted */Block.__(0, [param[0]]));
                                    return Promise.resolve(param[1]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function rejectPartner(ventureId, processId) {
  logMessage("Handling 'RejectPartner'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* RejectPartner */5][/* exec */0], processId, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessRejected */Block.__(2, [processId]));
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function endorsePartner(ventureId, processId) {
  logMessage("Handling 'EndorsePartner'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* EndorsePartner */6][/* exec */0], processId, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessEndorsed */Block.__(1, [processId]));
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function proposePartnerRemoval(ventureId, partnerId) {
  logMessage("Handling 'ProposePartnerRemoval'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* ProposePartnerRemoval */7][/* exec */0], partnerId, venture).then((function (param) {
                                  if (typeof param === "number") {
                                    return Promise.resolve(venture);
                                  } else if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[2]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessStarted */Block.__(0, [param[0]]));
                                    return Promise.resolve(param[1]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function rejectPartnerRemoval(ventureId, processId) {
  logMessage("Handling 'RejectPartnerRemoval'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* RejectPartnerRemoval */8][/* exec */0], processId, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessRejected */Block.__(2, [processId]));
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function endorsePartnerRemoval(ventureId, processId) {
  logMessage("Handling 'EndorsePartnerRemoval'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* EndorsePartnerRemoval */9][/* exec */0], processId, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessEndorsed */Block.__(1, [processId]));
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function submitCustodianKeyChain(ventureId, keyChain) {
  logMessage("Handling 'SubmitCustodianKeyChain'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* SubmitCustodianKeyChain */3][/* exec */0], keyChain, venture).then((function (param) {
                                  if (typeof param === "number") {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* KeyChainSubmitted */0);
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function proposePayout(ventureId, accountIdx, destinations, fee) {
  logMessage("Handling 'ProposePayout'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._4(Venture.Cmd[/* ProposePayout */11][/* exec */0], accountIdx, destinations, fee, venture).then((function (param) {
                                  if (typeof param === "number") {
                                    logMessage("Not enough funds");
                                    return Promise.resolve(venture);
                                  } else if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[2]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessStarted */Block.__(0, [param[0]]));
                                    return Promise.resolve(param[1]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function rejectPayout(ventureId, processId) {
  logMessage("Handling 'RejectPayout'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* RejectPayout */12][/* exec */0], processId, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessRejected */Block.__(2, [processId]));
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function endorsePayout(ventureId, processId) {
  logMessage("Handling 'EndorsePayout'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* EndorsePayout */13][/* exec */0], processId, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    cmdSuccess(ventureId, correlationId, /* ProcessEndorsed */Block.__(1, [processId]));
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function exposeIncomeAddress(ventureId, accountIdx) {
  logMessage("Handling 'ExposeIncomeAddress'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._2(Venture.Cmd[/* ExposeIncomeAddress */10][/* exec */0], accountIdx, venture).then((function (param) {
                                  if (param.tag) {
                                    cmdError(ventureId, correlationId, /* CouldNotPersistVenture */7);
                                    return Promise.resolve(venture);
                                  } else {
                                    newIncomeAddress(correlationId, ventureId, param[0]);
                                    newItems(correlationId, ventureId, param[2]);
                                    return Promise.resolve(param[1]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function syncWallet(ventureId, broadcasts, broadcastFailures, income, unlocked, confs) {
  logMessage("Handling 'SynchWallet'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._6(Venture.Cmd[/* SynchronizeWallet */2][/* exec */0], broadcasts, broadcastFailures, income, unlocked, confs, venture).then((function (param) {
                                  if (param.tag) {
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(correlationId, ventureId, param[1]);
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param, param$1);
    });
}

function newItemsDetected(ventureId, items, partnerId) {
  logMessage("Handling 'NewItemsDetected'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param, param$1) {
      return withVenture(/* None */0, partial_arg, (function (correlationId, venture) {
                    return Curry._3(Venture.Cmd[/* SynchronizeLogs */1][/* exec */0], /* Some */[partnerId], items, venture).then((function (param) {
                                  switch (param.tag | 0) {
                                    case 0 : 
                                        newItems(correlationId, ventureId, param[1]);
                                        return Promise.resolve(param[0]);
                                    case 1 : 
                                        logMessage("There were " + (String(param[2].length) + " conflicts while syncing"));
                                        newItems(correlationId, ventureId, param[1]);
                                        return Promise.resolve(param[0]);
                                    case 2 : 
                                        return Promise.resolve(venture);
                                    
                                  }
                                }));
                  }), param, param$1);
    });
}

function syncTabs(ventureId, items) {
  logMessage("Handling 'SyncTabs'");
  var partial_arg = /* Reload */Block.__(2, [ventureId]);
  var partial_arg$1 = /* Some */[true];
  return (function (param, param$1) {
      return withVenture(partial_arg$1, partial_arg, (function (correlationId, venture) {
                    return Curry._3(Venture.Cmd[/* SynchronizeLogs */1][/* exec */0], /* None */0, items, venture).then((function (param) {
                                  switch (param.tag | 0) {
                                    case 0 : 
                                        newItems(correlationId, ventureId, param[1]);
                                        return Promise.resolve(param[0]);
                                    case 1 : 
                                        logMessage("There were " + (String(param[2].length) + " conflicts while syncing"));
                                        newItems(correlationId, ventureId, param[1]);
                                        return Promise.resolve(param[0]);
                                    case 2 : 
                                        return Promise.resolve(venture);
                                    
                                  }
                                }));
                  }), param, param$1);
    });
}

var Handle = /* module */[
  /* loadAndNotify */loadAndNotify,
  /* withVenture */withVenture,
  /* updateSession */updateSession,
  /* load */load,
  /* joinVia */joinVia,
  /* create */create,
  /* proposePartner */proposePartner,
  /* rejectPartner */rejectPartner,
  /* endorsePartner */endorsePartner,
  /* proposePartnerRemoval */proposePartnerRemoval,
  /* rejectPartnerRemoval */rejectPartnerRemoval,
  /* endorsePartnerRemoval */endorsePartnerRemoval,
  /* submitCustodianKeyChain */submitCustodianKeyChain,
  /* proposePayout */proposePayout,
  /* rejectPayout */rejectPayout,
  /* endorsePayout */endorsePayout,
  /* exposeIncomeAddress */exposeIncomeAddress,
  /* syncWallet */syncWallet,
  /* newItemsDetected */newItemsDetected,
  /* syncTabs */syncTabs
];

function handleMessage(param) {
  switch (param.tag | 0) {
    case 0 : 
        var partial_arg = param[0];
        return (function (param, param$1) {
            return updateSession(partial_arg, param, param$1);
          });
    case 1 : 
        return create(param[0]);
    case 2 : 
        return load(param[0]);
    case 3 : 
        return joinVia(param[0], param[1]);
    case 4 : 
        return proposePartner(param[0], param[1]);
    case 5 : 
        return rejectPartner(param[0], param[1]);
    case 6 : 
        return endorsePartner(param[0], param[1]);
    case 7 : 
        return proposePartnerRemoval(param[0], param[1]);
    case 8 : 
        return rejectPartnerRemoval(param[0], param[1]);
    case 9 : 
        return endorsePartnerRemoval(param[0], param[1]);
    case 10 : 
        return submitCustodianKeyChain(param[0], param[1]);
    case 11 : 
        return proposePayout(param[0], param[1], param[2], param[3]);
    case 12 : 
        return rejectPayout(param[0], param[1]);
    case 13 : 
        return endorsePayout(param[0], param[1]);
    case 14 : 
        return exposeIncomeAddress(param[0], param[1]);
    case 15 : 
        return newItemsDetected(param[0], param[1], param[2]);
    case 16 : 
        return syncWallet(param[0], param[1], param[2], param[3], param[4], param[5]);
    case 17 : 
        return syncTabs(param[0], param[1]);
    
  }
}

var cleanState = /* record */[/* venturesThread */Promise.resolve(/* None */0)];

var workerState = [cleanState];

self.onmessage = (function (msg) {
    workerState[0] = handleMessage(VentureWorkerMessage.decodeIncoming(msg.data.payload))(msg.data.correlationId, workerState[0]);
    return /* () */0;
  });

var Message = 0;

exports.Message = Message;
exports.postMessage = postMessage$1;
exports.logMessage = logMessage;
exports.logError = logError;
exports.Notify = Notify;
exports.DeadThread = DeadThread;
exports.Handle = Handle;
exports.handleMessage = handleMessage;
exports.cleanState = cleanState;
exports.workerState = workerState;
/*  Not a pure module */
