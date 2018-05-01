// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Json = require("bs-json/src/Json.js");
var Blockstack = require("blockstack");
var Json_decode = require("bs-json/src/Json_decode.js");
var Json_encode = require("bs-json/src/Json_encode.js");
var PrimitiveTypes = require("./PrimitiveTypes.bs.js");

function item(item$1) {
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "name",
                item$1[/* name */1]
              ],
              /* :: */[
                /* tuple */[
                  "id",
                  PrimitiveTypes.VentureId[/* encode */2](item$1[/* id */0])
                ],
                /* [] */0
              ]
            ]);
}

function index(param) {
  return Json_encode.list(item, param);
}

var Encode = /* module */[
  /* item */item,
  /* index */index
];

function item$1(json) {
  return /* record */[
          /* id */Json_decode.field("id", PrimitiveTypes.VentureId[/* decode */3], json),
          /* name */Json_decode.field("name", Json_decode.string, json)
        ];
}

function index$1(param) {
  return Json_decode.list(item$1, param);
}

var Decode = /* module */[
  /* item */item$1,
  /* index */index$1
];

var indexPath = "index.json";

function persist(index) {
  return Blockstack.putFile(indexPath, Json.stringify(Json_encode.list(item, index))).then((function () {
                return Promise.resolve(index);
              }));
}

function load() {
  return Blockstack.getFile(indexPath).then((function (nullVentures) {
                if (nullVentures == null) {
                  return persist(/* [] */0);
                } else {
                  var param = Json.parseOrRaise(nullVentures);
                  return Promise.resolve(Json_decode.list(item$1, param));
                }
              }));
}

function add(id, name) {
  return load(/* () */0).then((function (index) {
                return persist(/* :: */[
                            /* record */[
                              /* id */id,
                              /* name */name
                            ],
                            index
                          ]);
              }));
}

var encode = index;

var decode = index$1;

exports.Encode = Encode;
exports.Decode = Decode;
exports.encode = encode;
exports.decode = decode;
exports.indexPath = indexPath;
exports.persist = persist;
exports.load = load;
exports.add = add;
/* blockstack Not a pure module */
