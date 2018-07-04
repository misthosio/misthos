// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../application/events/Event.bs.js");
var Utils = require("../utils/Utils.bs.js");
var Network = require("../application/wallet/Network.bs.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var EventLog = require("../application/events/EventLog.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var WorkerUtils = require("./WorkerUtils.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var AddressCollector = require("../application/wallet/AddressCollector.bs.js");
var TransactionCollector = require("../application/wallet/TransactionCollector.bs.js");
var VentureWorkerMessage = require("./VentureWorkerMessage.bs.js");

function postMessage$1(msg) {
  postMessage({
        payload: VentureWorkerMessage.encodeIncoming(msg),
        correlationId: ""
      });
  return /* () */0;
}

var logLabel = "[Wallet Sync]";

function logMessage(param) {
  return WorkerUtils.logMessage(logLabel, param);
}

function catchAndLogError(param) {
  return WorkerUtils.catchAndLogError(logLabel, param);
}

function broadcastPayouts(param) {
  var ventureId = param[/* ventureId */1];
  var network = param[/* network */0];
  return Belt_Map.forEachU(param[/* notYetBroadcastPayouts */5], (function (processId, param) {
                var txId = param[/* txId */1];
                return catchAndLogError(Curry._1(Network.broadcastTransaction(network), BitcoinjsLib.Transaction.fromHex(param[/* payoutTx */2][/* txHex */0])).then((function (result) {
                                  var tmp;
                                  if (typeof result === "number") {
                                    tmp = postMessage$1(/* SyncWallet */Block.__(15, [
                                            ventureId,
                                            /* :: */[
                                              Curry._2(Event.Payout[/* Broadcast */11][/* make */0], processId, txId),
                                              /* [] */0
                                            ],
                                            /* [] */0,
                                            /* [] */0,
                                            /* [] */0,
                                            /* [] */0
                                          ]));
                                  } else {
                                    switch (result.tag | 0) {
                                      case 0 : 
                                          tmp = postMessage$1(/* SyncWallet */Block.__(15, [
                                                  ventureId,
                                                  /* :: */[
                                                    Curry._2(Event.Payout[/* Broadcast */11][/* make */0], processId, result[0]),
                                                    /* [] */0
                                                  ],
                                                  /* [] */0,
                                                  /* [] */0,
                                                  /* [] */0,
                                                  /* [] */0
                                                ]));
                                          break;
                                      case 1 : 
                                          var errorMessage = result[0];
                                          Utils.printError("Broadcasting transaction failed", errorMessage);
                                          tmp = postMessage$1(/* SyncWallet */Block.__(15, [
                                                  ventureId,
                                                  /* [] */0,
                                                  /* :: */[
                                                    Curry._2(Event.Payout[/* BroadcastFailed */13][/* make */0], processId, errorMessage),
                                                    /* [] */0
                                                  ],
                                                  /* [] */0,
                                                  /* [] */0,
                                                  /* [] */0
                                                ]));
                                          break;
                                      case 2 : 
                                          tmp = /* () */0;
                                          break;
                                      
                                    }
                                  }
                                  return Promise.resolve(tmp);
                                })));
              }));
}

function scanTransactions(param) {
  var transactions = param[1];
  var addresses = param[0];
  return Network.transactionInputs(addresses[/* network */0])(addresses[/* exposedAddresses */2]).then((function (utxos) {
                var __x = Belt_SetString.mergeMany(transactions[/* transactionsOfInterest */2], Belt_List.toArray(Belt_List.mapU(utxos, (function (param) {
                                return param[/* txId */0];
                              }))));
                return Curry._1(Network.transactionInfo(addresses[/* network */0]), Belt_SetString.diff(__x, transactions[/* confirmedTransactions */4])).then((function (txInfos) {
                              return Promise.resolve(/* tuple */[
                                          utxos,
                                          txInfos,
                                          transactions
                                        ]);
                            }));
              }));
}

function findAddressesAndTxIds(log) {
  return Curry._3(EventLog.reduce, (function (param, param$1) {
                var $$event = param$1[/* event */0];
                return /* tuple */[
                        AddressCollector.apply($$event, param[0]),
                        TransactionCollector.apply($$event, param[1])
                      ];
              }), /* tuple */[
              AddressCollector.make(/* () */0),
              TransactionCollector.make(/* () */0)
            ], log);
}

function filterUTXOs(knownTxs, utxos) {
  return Belt_List.keepMapU(utxos, (function (utxo) {
                var match = Belt_SetString.has(knownTxs, utxo[/* txId */0]);
                if (match) {
                  return /* None */0;
                } else {
                  return /* Some */[utxo];
                }
              }));
}

function detectIncomeFromVenture(ventureId, eventLog) {
  logMessage("Sychronizing wallet state for venture '" + (PrimitiveTypes.VentureId[/* toString */0](ventureId) + "'"));
  return scanTransactions(findAddressesAndTxIds(eventLog)).then((function (param) {
                var transactions = param[2];
                broadcastPayouts(transactions);
                var utxos = filterUTXOs(transactions[/* knownIncomeTxs */3], param[0]);
                var events = Belt_List.mapU(utxos, (function (utxo) {
                        return Curry._5(Event.Income[/* Detected */1][/* make */0], utxo[/* txOutputN */1], utxo[/* coordinates */6], utxo[/* address */2], utxo[/* txId */0], utxo[/* value */3]);
                      }));
                var match = Belt_List.keepMapU(param[1], (function (param) {
                        var unixTime = param[/* unixTime */2];
                        var blockHeight = param[/* blockHeight */1];
                        if (blockHeight && unixTime) {
                          return /* Some */[Curry._3(Event.Transaction[/* Confirmed */0][/* make */0], param[/* txId */0], blockHeight[0], unixTime[0])];
                        } else {
                          return /* None */0;
                        }
                      }));
                var tmp;
                var exit = 0;
                if (events || match) {
                  exit = 1;
                } else {
                  tmp = /* () */0;
                }
                if (exit === 1) {
                  tmp = postMessage$1(/* SyncWallet */Block.__(15, [
                          ventureId,
                          /* [] */0,
                          /* [] */0,
                          events,
                          /* [] */0,
                          match
                        ]));
                }
                return Promise.resolve(tmp);
              }));
}

function syncWallets(ventures) {
  return Belt_Map.forEachU(ventures, (function (id, log) {
                return catchAndLogError(detectIncomeFromVenture(id, log));
              }));
}

exports.postMessage = postMessage$1;
exports.logLabel = logLabel;
exports.logMessage = logMessage;
exports.catchAndLogError = catchAndLogError;
exports.broadcastPayouts = broadcastPayouts;
exports.scanTransactions = scanTransactions;
exports.findAddressesAndTxIds = findAddressesAndTxIds;
exports.filterUTXOs = filterUTXOs;
exports.detectIncomeFromVenture = detectIncomeFromVenture;
exports.syncWallets = syncWallets;
/* Event Not a pure module */
