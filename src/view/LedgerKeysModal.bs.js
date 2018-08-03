// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var Spinner = require("./components/Spinner.bs.js");
var LedgerJS = require("../ffi/LedgerJS.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ViewCommon = require("./ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var CustodianKeyChain = require("../application/wallet/CustodianKeyChain.bs.js");

var component = ReasonReact.reducerComponent("LedgerKeys");

function make(viewData, submitKeyChain, _, _$1) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var match = viewData[/* ledgerId */0];
              var ledgerConnected = match ? "Ledger is connected" : "Ledger is not connected";
              var match$1 = viewData[/* ledgerUpToDate */1];
              var ledgerUpToDate = match$1 ? "Ledger pub keys are up to date" : "Ledger keys need rotating";
              var match$2 = state[/* error */1];
              var error;
              if (match$2) {
                var match$3 = match$2[0];
                error = match$3 ? ViewCommon.text(LedgerJS.errorToString(match$3[0])) : ViewCommon.text("This ledger has the wrong seed");
              } else {
                error = null;
              }
              var match$4 = state[/* status */0];
              var spinner = match$4 !== 1 ? null : ReasonReact.element(/* None */0, /* None */0, Spinner.make("InProgress", /* None */0, /* array */[]));
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Connect Ledger")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", undefined, React.createElement("p", undefined, ViewCommon.text(ledgerConnected)), React.createElement("p", undefined, ViewCommon.text(ledgerUpToDate)), error, spinner, ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function (param) {
                                                return ViewCommon.ignoreEvent((function () {
                                                              return Curry._1(send, /* SubmitPubKeys */0);
                                                            }), param);
                                              })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Submit keys")])))], /* None */0, /* None */0, /* None */0, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* status : Idle */0,
                      /* error : None */0
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var match = state[/* status */0];
              if (typeof action === "number") {
                if (match !== 0) {
                  return /* NoUpdate */0;
                } else {
                  return /* UpdateWithSideEffects */Block.__(2, [
                            /* record */[
                              /* status : InProgress */1,
                              /* error : None */0
                            ],
                            (function (param) {
                                var send = param[/* send */3];
                                Curry._1(viewData[/* getCustodianKeyChain */2], /* () */0).then((function (param) {
                                        if (param.tag) {
                                          return Promise.resolve(Curry._1(send, /* FailedGettingKeys */Block.__(0, [/* LedgerError */[param[0]]])));
                                        } else {
                                          var keyChain = param[0];
                                          var match = viewData[/* ledgerId */0];
                                          if (match && Js_option.getExn(CustodianKeyChain.hardwareId(keyChain)) !== match[0]) {
                                            return Promise.resolve(Curry._1(send, /* FailedGettingKeys */Block.__(0, [/* WrongHardwareId */0])));
                                          } else {
                                            return Promise.resolve(Curry._1(submitKeyChain, keyChain));
                                          }
                                        }
                                      }));
                                return /* () */0;
                              })
                          ]);
                }
              } else if (action.tag) {
                return /* NoUpdate */0;
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* status : Idle */0,
                            /* error : Some */[action[0]]
                          ]]);
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.ViewData = ViewData;
exports.component = component;
exports.make = make;
/* component Not a pure module */
