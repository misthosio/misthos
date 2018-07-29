// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Belt = require("bs-platform/lib/js/belt.js");
var Grid = require("./components/Grid.bs.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var TACText = require("./text/TACText.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("ViewIncomeModal");

function make(signTAC, _) {
  var onAggree = function (param) {
    return ViewCommon.ignoreEvent(signTAC, param);
  };
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
          /* render */(function () {
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Misthos Terms of Use")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles
                                  }, ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[Belt_Array.concatMany(Belt_Array.map(TACText.terms, (function (section) {
                                                        var match = section[/* body */1];
                                                        var tmp;
                                                        tmp = match.tag ? React.createElement("ul", undefined, Belt_Array.map(match[0], (function (p) {
                                                                      return React.createElement("li", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(p)])));
                                                                    }))) : Belt_Array.map(match[0], (function (p) {
                                                                  return ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(p)]));
                                                                }));
                                                        return /* array */[
                                                                ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Subheading */148169314, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(section[/* heading */0])])),
                                                                tmp
                                                              ];
                                                      })))])), ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[onAggree], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("I agree to the terms of Use")])))], /* None */0, /* None */0, /* None */0, /* array */[]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var Id = Belt.Id;

var $$Array = Belt.$$Array;

var SortArray = Belt.SortArray;

var MutableQueue = Belt.MutableQueue;

var MutableStack = Belt.MutableStack;

var List = Belt.List;

var Range = Belt.Range;

var $$Set = Belt.$$Set;

var $$Map = Belt.$$Map;

var MutableSet = Belt.MutableSet;

var MutableMap = Belt.MutableMap;

var HashSet = Belt.HashSet;

var HashMap = Belt.HashMap;

var Option = Belt.Option;

var Result = Belt.Result;

var Debug = Belt.Debug;

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.Id = Id;
exports.$$Array = $$Array;
exports.SortArray = SortArray;
exports.MutableQueue = MutableQueue;
exports.MutableStack = MutableStack;
exports.List = List;
exports.Range = Range;
exports.$$Set = $$Set;
exports.$$Map = $$Map;
exports.MutableSet = MutableSet;
exports.MutableMap = MutableMap;
exports.HashSet = HashSet;
exports.HashMap = HashMap;
exports.Option = Option;
exports.Result = Result;
exports.Debug = Debug;
exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.make = make;
/* component Not a pure module */