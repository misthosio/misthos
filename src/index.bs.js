// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Json = require("bs-json/src/Json.js");
var Income = require("./Income.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var IncomeEvent = require("./IncomeEvent.bs.js");
var Json_decode = require("bs-json/src/Json_decode.js");

function filterOne(set) {
  return Belt_Set.keepU(set, (function (i) {
                return !(i[/* txId */0] === "35815aaadec8a110391de8ae2e8c304e3e6084d3cd1344d8155a2293ee54324b" || i[/* txId */0] === "d029a186f3d3124aca7fdc95d085ce25e0519918bf63ecb32cdfbb1da3268d8c");
              }));
}

function text(prim) {
  return prim;
}

var smallLog = Json_decode.array(IncomeEvent.decode, Json.parseOrRaise(Income.income));

IncomeEvent.inputSet(/* () */0);

var unused = Belt_Array.reduce(smallLog, IncomeEvent.inputSet(/* () */0), (function (unused, param) {
        return Belt_Set.add(unused, /* record */[
                    /* txId */param[/* txId */1],
                    /* txOutputN */param[/* txOutputN */2],
                    /* address */param[/* address */0],
                    /* nCoSigners */2,
                    /* nPubKeys */3
                  ]);
      }));

var filteredUnused = filterOne(unused);

function filterTwo(param) {
  return param[/* txId */0] !== "514ec6088ef79a9c56b1530b6d0e1a47fc5e61ab74993861e315d1430de2c407";
}

var unusedAfter = Belt_Set.keep(unused, filterTwo);

function countInputs(set) {
  return Belt_Array.reduce(Belt_Set.toArray(set), 0, (function (res, param) {
                var match = param[/* txId */0] === "b0478fed46339ffd2d0d36b0355d782be269b0452f452d7532b8f6e1dfa8e06b";
                if (match) {
                  return res + 1 | 0;
                } else {
                  return res;
                }
              }));
}

ReactDOMRe.renderToElementWithId("one file" + (String(countInputs(unusedAfter)) + " yup"), "root");

exports.filterOne = filterOne;
exports.text = text;
exports.smallLog = smallLog;
exports.unused = unused;
exports.filteredUnused = filteredUnused;
exports.filterTwo = filterTwo;
exports.unusedAfter = unusedAfter;
exports.countInputs = countInputs;
/* smallLog Not a pure module */
