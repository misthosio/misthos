// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var Utils = require("../utils/Utils.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Blockstack = require("../ffi/Blockstack.bs.js");
var Blockstack$1 = require("blockstack");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");

var infoFileName = "public.json";

function encode(data) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "appPubKey",
                data[/* appPubKey */0]
              ],
              /* [] */0
            ]);
}

function decode(raw) {
  return /* record */[/* appPubKey */Json_decode.field("appPubKey", Json_decode.string, raw)];
}

function persist(appPubKey) {
  return Blockstack$1.putFile(infoFileName, Json.stringify(encode(/* record */[/* appPubKey */appPubKey])), ( {"encrypt": false} ));
}

function read(username) {
  return Blockstack.getFileFromUser(infoFileName, username).then((function (nullFile) {
                  if (nullFile == null) {
                    return Promise.resolve(/* NotFound */0);
                  } else {
                    return Promise.resolve(/* Ok */[decode(Json.parseOrRaise(nullFile))]);
                  }
                })).catch((function (error) {
                Utils.printError("Couldn't fetch public.json", error);
                return Promise.resolve(/* NotFound */0);
              }));
}

var Public = /* module */[
  /* infoFileName */infoFileName,
  /* encode */encode,
  /* decode */decode,
  /* persist */persist,
  /* read */read
];

var infoFileName$1 = "private.json";

function encode$1(data) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "chainCode",
                Utils.bufToHex(data[/* chainCode */0])
              ],
              /* [] */0
            ]);
}

function decode$1(raw) {
  return /* record */[/* chainCode */Utils.bufFromHex(Json_decode.field("chainCode", Json_decode.string, raw))];
}

function persist$1(chainCode) {
  return Blockstack$1.putFile(infoFileName$1, Json.stringify(encode$1(/* record */[/* chainCode */chainCode]))).then((function () {
                return Promise.resolve(/* record */[/* chainCode */chainCode]);
              }));
}

function read$1() {
  return Blockstack$1.getFile(infoFileName$1).then((function (nullFile) {
                  if (nullFile == null) {
                    return Promise.resolve(/* NotFound */0);
                  } else {
                    return Promise.resolve(/* Ok */[decode$1(Json.parseOrRaise(nullFile))]);
                  }
                })).catch((function (error) {
                Utils.printError("Couldn't fetch private.json", error);
                return Promise.resolve(/* NotFound */0);
              }));
}

var Private = /* module */[
  /* infoFileName */infoFileName$1,
  /* encode */encode$1,
  /* decode */decode$1,
  /* persist */persist$1,
  /* read */read$1
];

function getOrInit(appPubKey) {
  return read$1(/* () */0).then((function (param) {
                if (param) {
                  return Promise.resolve(param[0]);
                } else {
                  return persist(appPubKey).then((function () {
                                return persist$1(Utils.bufFromHex($$String.sub(appPubKey, 0, 64)));
                              }));
                }
              }));
}

function storagePrefix(appPubKey) {
  return BitcoinjsLib.ECPair.fromPublicKeyBuffer(Utils.bufFromHex(appPubKey)).getAddress();
}

exports.Public = Public;
exports.Private = Private;
exports.getOrInit = getOrInit;
exports.storagePrefix = storagePrefix;
/* Utils Not a pure module */
