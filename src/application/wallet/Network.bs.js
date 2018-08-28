// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("./BTC.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Address = require("./Address.bs.js");
var Belt_Id = require("bs-platform/lib/js/belt_Id.js");
var Belt_Map = require("bs-platform/lib/js/belt_Map.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Json_encode = require("@glennsl/bs-json/src/Json_encode.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");

function encode(param) {
  switch (param) {
    case 0 : 
        return "regtest";
    case 1 : 
        return "testnet";
    case 2 : 
        return "mainnet";
    
  }
}

function decode(raw) {
  var name = Json_decode.string(raw);
  switch (name) {
    case "mainnet" : 
        return /* Mainnet */2;
    case "regtest" : 
        return /* Regtest */0;
    case "testnet" : 
        return /* Testnet */1;
    default:
      return Js_exn.raiseError("Network.decode");
  }
}

function compareInputs(param, param$1) {
  var c = Caml_primitive.caml_string_compare(param[/* txId */0], param$1[/* txId */0]);
  if (c !== 0) {
    return c;
  } else {
    return Caml_primitive.caml_int_compare(param[/* txOutputN */1], param$1[/* txOutputN */1]);
  }
}

var include = Belt_Id.MakeComparableU(/* module */[/* cmp */compareInputs]);

var cmp = include[0];

var TxInputCmp = /* module */[
  /* compareInputs */compareInputs,
  /* cmp */cmp
];

function inputSet() {
  return Belt_Set.make([cmp]);
}

function inputMap() {
  return Belt_Map.make([cmp]);
}

function encodeInput(input) {
  var match = input[/* unlocked */8];
  return Json_encode.object_(/* :: */[
              /* tuple */[
                "txId",
                input[/* txId */0]
              ],
              /* :: */[
                /* tuple */[
                  "txOutputN",
                  input[/* txOutputN */1]
                ],
                /* :: */[
                  /* tuple */[
                    "address",
                    input[/* address */2]
                  ],
                  /* :: */[
                    /* tuple */[
                      "value",
                      BTC.encode(input[/* value */3])
                    ],
                    /* :: */[
                      /* tuple */[
                        "nCoSigners",
                        input[/* nCoSigners */4]
                      ],
                      /* :: */[
                        /* tuple */[
                          "nPubKeys",
                          input[/* nPubKeys */5]
                        ],
                        /* :: */[
                          /* tuple */[
                            "coordinates",
                            Address.Coordinates[/* encode */9](input[/* coordinates */6])
                          ],
                          /* :: */[
                            /* tuple */[
                              "sequence",
                              Json_encode.nullable((function (prim) {
                                      return prim;
                                    }), input[/* sequence */7])
                            ],
                            /* :: */[
                              /* tuple */[
                                "unlocked",
                                Json_encode.nullable((function (prim) {
                                        return prim;
                                      }), match ? true : undefined)
                              ],
                              /* [] */0
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

function decodeInput(raw) {
  return /* record */[
          /* txId */Json_decode.field("txId", Json_decode.string, raw),
          /* txOutputN */Json_decode.field("txOutputN", Json_decode.$$int, raw),
          /* address */Json_decode.field("address", Json_decode.string, raw),
          /* value */Json_decode.field("value", BTC.decode, raw),
          /* nCoSigners */Json_decode.field("nCoSigners", Json_decode.$$int, raw),
          /* nPubKeys */Json_decode.field("nPubKeys", Json_decode.$$int, raw),
          /* coordinates */Json_decode.field("coordinates", Address.Coordinates[/* decode */10], raw),
          /* sequence */Json_decode.optional((function (param) {
                  return Json_decode.field("sequence", Json_decode.$$int, param);
                }), raw),
          /* unlocked */Js_option.isSome(Json_decode.optional((function (param) {
                      return Json_decode.field("unlocked", Json_decode.bool, param);
                    }), raw))
        ];
}

function bitcoinNetwork(param) {
  if (param >= 2) {
    return BitcoinjsLib.networks.bitcoin;
  } else {
    return BitcoinjsLib.networks.testnet;
  }
}

var testnetIncomeAddress = "2Mt1spz31MXtY5bVHUAEGtFQcFHrG9gza6k";

function incomeAddress(param) {
  if (param >= 2) {
    return "3BLpAZRAH5U8Vk7tVKUhfwkGqaB7teuaau";
  } else {
    return testnetIncomeAddress;
  }
}

exports.encode = encode;
exports.decode = decode;
exports.TxInputCmp = TxInputCmp;
exports.inputSet = inputSet;
exports.inputMap = inputMap;
exports.encodeInput = encodeInput;
exports.decodeInput = decodeInput;
exports.bitcoinNetwork = bitcoinNetwork;
exports.testnetIncomeAddress = testnetIncomeAddress;
exports.incomeAddress = incomeAddress;
/* include Not a pure module */
