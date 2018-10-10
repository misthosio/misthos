// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

var estimateFeeUrl = "https://estimatefee.com/n/";

function nConfsUrl(n) {
  return estimateFeeUrl + String(n);
}

function fetchNConfs(n) {
  return fetch(estimateFeeUrl + String(n)).then((function (prim) {
                  return prim.json();
                })).then((function (res) {
                return Promise.resolve(BTC.fromFloat(Json_decode.$$float(res)));
              }));
}

function fetchFees() {
  return Promise.all(/* tuple */[
                fetchNConfs(2),
                fetchNConfs(6),
                fetchNConfs(12)
              ]).then((function (param) {
                return Promise.resolve(/* record */[
                            /* high */BTC.dividedByRounded(param[0], 1000),
                            /* normal */BTC.dividedByRounded(param[1], 1000),
                            /* economy */BTC.dividedByRounded(param[2], 1000)
                          ]);
              }));
}

exports.estimateFeeUrl = estimateFeeUrl;
exports.nConfsUrl = nConfsUrl;
exports.fetchNConfs = fetchNConfs;
exports.fetchFees = fetchFees;
/* BTC Not a pure module */
