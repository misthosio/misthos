// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Utils = require("../utils/Utils.bs.js");
var Session = require("../application/Session.bs.js");
var Venture = require("../application/Venture.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var VentureWorkerMessage = require("./VentureWorkerMessage.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

(( self.localStorage = require("./fakeLocalStorage").localStorage ));

(( self.window = { localStorage: self.localStorage , location: { origin: self.origin } } ));

function postMessage$1(msg) {
  postMessage(VentureWorkerMessage.encodeOutgoing(msg));
  return /* () */0;
}

function logMessage(msg) {
  console.log("[Venture Worker] - " + msg);
  return /* () */0;
}

function indexUpdated(index) {
  postMessage(VentureWorkerMessage.encodeOutgoing(/* UpdateIndex */Block.__(0, [index])));
  return /* () */0;
}

function ventureLoaded(id, events) {
  var msg_001 = List.rev(events);
  var msg = /* VentureLoaded */Block.__(1, [
      id,
      msg_001
    ]);
  postMessage(VentureWorkerMessage.encodeOutgoing(msg));
  return /* () */0;
}

function ventureCreated(id, events) {
  var msg_001 = List.rev(events);
  var msg = /* VentureCreated */Block.__(2, [
      id,
      msg_001
    ]);
  postMessage(VentureWorkerMessage.encodeOutgoing(msg));
  return /* () */0;
}

function newItems(id, items) {
  if (items) {
    var msg_001 = List.rev(items);
    var msg = /* NewItems */Block.__(3, [
        id,
        msg_001
      ]);
    postMessage(VentureWorkerMessage.encodeOutgoing(msg));
    return /* () */0;
  } else {
    return /* () */0;
  }
}

var Notify = /* module */[
  /* indexUpdated */indexUpdated,
  /* ventureLoaded */ventureLoaded,
  /* ventureCreated */ventureCreated,
  /* newItems */newItems
];

function withVenture(ventureAction, f, param) {
  var venturesThread = param[/* venturesThread */0].then((function (threads) {
          return Promise.resolve(Utils.mapOption((function (param) {
                            var ventures = param[1];
                            var data = param[0];
                            var match;
                            switch (ventureAction.tag | 0) {
                              case 0 : 
                                  var match$1 = Curry._2(Venture.Cmd[/* Create */0][/* exec */0], data, ventureAction[0]);
                                  match = /* tuple */[
                                    match$1[0],
                                    match$1[1].then((function (param) {
                                            postMessage(VentureWorkerMessage.encodeOutgoing(/* UpdateIndex */Block.__(0, [param[0]])));
                                            return Promise.resolve(param[1]);
                                          }))
                                  ];
                                  break;
                              case 1 : 
                                  var ventureId = ventureAction[0];
                                  try {
                                    match = /* tuple */[
                                      ventureId,
                                      List.assoc(ventureId, ventures)
                                    ];
                                  }
                                  catch (exn){
                                    if (exn === Caml_builtin_exceptions.not_found) {
                                      match = /* tuple */[
                                        ventureId,
                                        Venture.load(data, ventureId)
                                      ];
                                    } else {
                                      throw exn;
                                    }
                                  }
                                  break;
                              case 2 : 
                                  var ventureId$1 = ventureAction[0];
                                  match = /* tuple */[
                                    ventureId$1,
                                    Venture.join(data, ventureAction[1], ventureId$1).then((function (param) {
                                            postMessage(VentureWorkerMessage.encodeOutgoing(/* UpdateIndex */Block.__(0, [param[0]])));
                                            return Promise.resolve(param[1]);
                                          }))
                                  ];
                                  break;
                              
                            }
                            var ventureId$2 = match[0];
                            return /* tuple */[
                                    data,
                                    /* :: */[
                                      /* tuple */[
                                        ventureId$2,
                                        match[1].then(Curry.__1(f))
                                      ],
                                      List.remove_assoc(ventureId$2, ventures)
                                    ]
                                  ];
                          }), threads));
        }));
  return /* record */[/* venturesThread */venturesThread];
}

function updateSession(items, state) {
  logMessage("Handling 'UpdateSession'");
  WorkerLocalStorage.setBlockstackItems(items);
  var sessionThread = Session.getCurrentSession(/* () */0).then((function (param) {
          if (typeof param === "number") {
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
                      Venture.Index[/* load */0](/* () */0).then((function (index) {
                              return Promise.resolve((postMessage(VentureWorkerMessage.encodeOutgoing(/* UpdateIndex */Block.__(0, [index]))), /* () */0));
                            }));
                      return Promise.resolve(/* Some */[/* tuple */[
                                    data,
                                    /* [] */0
                                  ]]);
                    }
                    
                  } else {
                    return Promise.resolve(/* None */0);
                  }
                }))];
}

function load(ventureId) {
  logMessage("Handling 'Load'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    ventureLoaded(ventureId, Venture.getAllEvents(venture));
                    return Promise.resolve(venture);
                  }), param);
    });
}

function joinVia(ventureId, userId) {
  logMessage("Handling 'JoinVia'");
  var partial_arg = /* JoinVia */Block.__(2, [
      ventureId,
      userId
    ]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    ventureLoaded(ventureId, Venture.getAllEvents(venture));
                    return Promise.resolve(venture);
                  }), param);
    });
}

function create(name) {
  logMessage("Handling 'Create'");
  var partial_arg = /* Create */Block.__(0, [name]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    ventureCreated(Venture.getId(venture), Venture.getAllEvents(venture));
                    return Promise.resolve(venture);
                  }), param);
    });
}

function proposePartner(ventureId, prospectId) {
  logMessage("Handling 'ProposePartner'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* ProposePartner */3][/* exec */0], prospectId, venture).then((function (param) {
                                  if (typeof param === "number") {
                                    return Promise.resolve(venture);
                                  } else {
                                    newItems(ventureId, param[1]);
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param);
    });
}

function rejectPartner(ventureId, processId) {
  logMessage("Handling 'RejectPartner'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* RejectPartner */4][/* exec */0], processId, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function endorsePartner(ventureId, processId) {
  logMessage("Handling 'EndorsePartner'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* EndorsePartner */5][/* exec */0], processId, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function proposePartnerRemoval(ventureId, partnerId) {
  logMessage("Handling 'ProposePartnerRemoval'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* ProposePartnerRemoval */6][/* exec */0], partnerId, venture).then((function (param) {
                                  if (param) {
                                    newItems(ventureId, param[1]);
                                    return Promise.resolve(param[0]);
                                  } else {
                                    return Promise.resolve(venture);
                                  }
                                }));
                  }), param);
    });
}

function rejectPartnerRemoval(ventureId, processId) {
  logMessage("Handling 'RejectPartnerRemoval'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* RejectPartnerRemoval */7][/* exec */0], processId, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function endorsePartnerRemoval(ventureId, processId) {
  logMessage("Handling 'EndorsePartnerRemoval'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* EndorsePartnerRemoval */8][/* exec */0], processId, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function proposePayout(ventureId, accountIdx, destinations, fee) {
  logMessage("Handling 'ProposePayout'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._4(Venture.Cmd[/* ProposePayout */10][/* exec */0], accountIdx, destinations, fee, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function rejectPayout(ventureId, processId) {
  logMessage("Handling 'RejectPayout'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* RejectPayout */11][/* exec */0], processId, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function endorsePayout(ventureId, processId) {
  logMessage("Handling 'EndorsePayout'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* EndorsePayout */12][/* exec */0], processId, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function exposeIncomeAddress(ventureId, accountIdx) {
  logMessage("Handling 'ExposeIncomeAddress'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* ExposeIncomeAddress */9][/* exec */0], accountIdx, venture).then((function (param) {
                                  newItems(ventureId, param[2]);
                                  return Promise.resolve(param[1]);
                                }));
                  }), param);
    });
}

function transactionDetected(ventureId, events) {
  logMessage("Handling 'TransactionDetected'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* SynchronizeWallet */2][/* exec */0], events, venture).then((function (param) {
                                  newItems(ventureId, param[1]);
                                  return Promise.resolve(param[0]);
                                }));
                  }), param);
    });
}

function newItemsDetected(ventureId, items) {
  logMessage("Handling 'NewItemsDetected'");
  var partial_arg = /* Load */Block.__(1, [ventureId]);
  return (function (param) {
      return withVenture(partial_arg, (function (venture) {
                    return Curry._2(Venture.Cmd[/* SynchronizeLogs */1][/* exec */0], items, venture).then((function (param) {
                                  if (param.tag) {
                                    logMessage("There were " + (String(List.length(param[2])) + " conflicts while syncing"));
                                    newItems(ventureId, param[1]);
                                    return Promise.resolve(param[0]);
                                  } else {
                                    newItems(ventureId, param[1]);
                                    return Promise.resolve(param[0]);
                                  }
                                }));
                  }), param);
    });
}

var Handle = /* module */[
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
  /* proposePayout */proposePayout,
  /* rejectPayout */rejectPayout,
  /* endorsePayout */endorsePayout,
  /* exposeIncomeAddress */exposeIncomeAddress,
  /* transactionDetected */transactionDetected,
  /* newItemsDetected */newItemsDetected
];

function handleMessage(param) {
  switch (param.tag | 0) {
    case 0 : 
        var partial_arg = param[0];
        return (function (param) {
            return updateSession(partial_arg, param);
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
        return proposePayout(param[0], param[1], param[2], param[3]);
    case 11 : 
        return rejectPayout(param[0], param[1]);
    case 12 : 
        return endorsePayout(param[0], param[1]);
    case 13 : 
        return exposeIncomeAddress(param[0], param[1]);
    case 14 : 
        return transactionDetected(param[0], param[1]);
    case 15 : 
        return newItemsDetected(param[0], param[1]);
    
  }
}

var cleanState = /* record */[/* venturesThread */Promise.resolve(/* None */0)];

var workerState = [cleanState];

self.onmessage = (function (msg) {
    workerState[0] = handleMessage(VentureWorkerMessage.decodeIncoming(msg.data))(workerState[0]);
    return /* () */0;
  });

var Message = 0;

exports.Message = Message;
exports.postMessage = postMessage$1;
exports.logMessage = logMessage;
exports.Notify = Notify;
exports.Handle = Handle;
exports.handleMessage = handleMessage;
exports.cleanState = cleanState;
exports.workerState = workerState;
/*  Not a pure module */
