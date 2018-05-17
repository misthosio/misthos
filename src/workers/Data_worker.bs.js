// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Venture = require("../application/Venture.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var EventLog = require("../application/events/EventLog.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var WebWorker = require("../ffi/WebWorker.bs.js");
var WorkerUtils = require("./WorkerUtils.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var DataWorkerMessage = require("./DataWorkerMessage.bs.js");
var WorkerLocalStorage = require("./WorkerLocalStorage.bs.js");
var VentureWorkerMessage = require("./VentureWorkerMessage.bs.js");

(( self.localStorage = require("./fakeLocalStorage").localStorage ));

(( self.window = { localStorage: self.localStorage , location: { origin: self.origin } } ));

function postMessage$1(msg) {
  postMessage({
        msg: VentureWorkerMessage.encodeIncoming(msg),
        syncId: WebWorker.emptySyncId
      });
  return /* () */0;
}

function logMessage(msg) {
  console.log("[Data Worker] - " + msg);
  return /* () */0;
}

function handleMsg(venturesPromise, msg) {
  return venturesPromise.then((function (ventures) {
                if (typeof msg === "number") {
                  logMessage("Handling 'SessionPending'");
                  return Promise.resolve(PrimitiveTypes.VentureId[/* makeMap */8](/* () */0));
                } else {
                  switch (msg.tag | 0) {
                    case 0 : 
                        logMessage("Handling 'SessionStarted'");
                        WorkerLocalStorage.setBlockstackItems(msg[0]);
                        return Venture.Index[/* load */0](/* () */0).then((function (index) {
                                      return Promise.all(Belt_List.toArray(Belt_List.map(index, (function (param) {
                                                              var id = param[/* id */0];
                                                              return WorkerUtils.loadVenture(id).then((function (venture) {
                                                                            return Promise.resolve(/* tuple */[
                                                                                        id,
                                                                                        venture
                                                                                      ]);
                                                                          }));
                                                            })))).then((function (ventures) {
                                                    return Promise.resolve(Belt_Map.mergeMany(PrimitiveTypes.VentureId[/* makeMap */8](/* () */0), ventures));
                                                  }));
                                    }));
                    case 1 : 
                    case 2 : 
                        return Promise.resolve(ventures);
                    case 3 : 
                        logMessage("Handling 'VentureLoaded'");
                        return Promise.resolve(Belt_Map.set(ventures, msg[0], msg[1]));
                    case 4 : 
                        logMessage("Handling 'VentureCreated'");
                        return Promise.resolve(Belt_Map.set(ventures, msg[0], msg[1]));
                    case 5 : 
                        var ventureId = msg[0];
                        logMessage("Handling 'NewItems'");
                        var venture = Belt_Map.getExn(ventures, ventureId);
                        return Promise.resolve(Belt_Map.set(ventures, ventureId, Curry._2(EventLog.appendItems, msg[1], venture)));
                    
                  }
                }
              }));
}

var intervalId = [/* None */0];

var venturesPromise = [Promise.resolve(PrimitiveTypes.VentureId[/* makeMap */8](/* () */0))];

self.onmessage = (function (msg) {
    venturesPromise[0] = handleMsg(venturesPromise[0], DataWorkerMessage.decodeIncoming(msg.data.msg));
    return /* () */0;
  });

var tenSecondsInMilliseconds = 10000;

var syncInterval = 10000;

exports.postMessage = postMessage$1;
exports.logMessage = logMessage;
exports.tenSecondsInMilliseconds = tenSecondsInMilliseconds;
exports.syncInterval = syncInterval;
exports.handleMsg = handleMsg;
exports.intervalId = intervalId;
exports.venturesPromise = venturesPromise;
/*  Not a pure module */
