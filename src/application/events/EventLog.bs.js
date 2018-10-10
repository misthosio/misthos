// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Log = require("./Log.bs.js");
var Event = require("./Event.bs.js");

var include = Log.Make([
      Event.encode,
      Event.decode
    ]);

var make = include[0];

var items = include[1];

var append = include[2];

var appendItem = include[3];

var appendItems = include[4];

var reduce = include[5];

var findNewItems = include[6];

var length = include[7];

var encode = include[8];

var decode = include[9];

var encodeItem = include[10];

var decodeItem = include[11];

var getSummary = include[12];

var encodeSummary = include[13];

var decodeSummary = include[14];

exports.make = make;
exports.items = items;
exports.append = append;
exports.appendItem = appendItem;
exports.appendItems = appendItems;
exports.reduce = reduce;
exports.findNewItems = findNewItems;
exports.length = length;
exports.encode = encode;
exports.decode = decode;
exports.encodeItem = encodeItem;
exports.decodeItem = decodeItem;
exports.getSummary = getSummary;
exports.encodeSummary = encodeSummary;
exports.decodeSummary = decodeSummary;
/* include Not a pure module */
