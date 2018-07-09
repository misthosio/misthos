// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Blockstack = require("blockstack");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function getFileFromUser(file, username) {
  return Blockstack.getFile(file, {
              username: username,
              decrypt: false
            });
}

function getFileFromUserAndDecrypt(file, username) {
  return Blockstack.getFile(file, {
              username: username,
              decrypt: true
            });
}

function fetchIds($staropt$star, beginning) {
  var current = $staropt$star !== undefined ? $staropt$star : /* array */[];
  if (beginning === "") {
    return Promise.resolve(/* tuple */[
                "",
                /* array */[]
              ]);
  } else if (beginning.includes(".")) {
    return Promise.resolve(/* tuple */[
                beginning,
                current
              ]);
  } else {
    return fetch("https://core.blockstack.org/v1/search?query=" + beginning).then((function (prim) {
                    return prim.json();
                  })).then((function (res) {
                  return Promise.resolve(/* tuple */[
                              beginning,
                              Json_decode.field("results", (function (param) {
                                      return Json_decode.array((function (user) {
                                                    return Json_decode.field("fullyQualifiedName", Json_decode.string, user);
                                                  }), param);
                                    }), res)
                            ]);
                }));
  }
}

exports.getFileFromUser = getFileFromUser;
exports.getFileFromUserAndDecrypt = getFileFromUserAndDecrypt;
exports.fetchIds = fetchIds;
/* blockstack Not a pure module */
