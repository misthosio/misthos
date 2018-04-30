// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Colors = require("../Colors.bs.js");
var MaterialUi = require("@jsiebern/bs-material-ui/src/MaterialUi.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Spinner");

var progress = Css.style(/* :: */[
      Css.color(Colors.misthosTeal),
      /* [] */0
    ]);

var container = Css.style(/* :: */[
      Css.textAlign(Css.center),
      /* [] */0
    ]);

var Styles = /* module */[
  /* progress */progress,
  /* container */container
];

function make(text, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return ReasonReact.element(/* None */0, /* None */0, MaterialUi.Grid[/* make */23](/* None */0, /* Some */[/* Center */980392437], /* None */0, /* None */0, /* Some */[/* true */1], /* Some */[/* Row */4102650], /* None */0, /* None */0, /* Some */[/* Center */980392437], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi.Grid[/* make */23](/* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* Some */[/* Row */4102650], /* None */0, /* None */0, /* Some */[/* Center */980392437], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi.Grid[/* make */23](/* None */0, /* None */0, /* Some */[container], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* true */1], /* None */0, /* Some */[/* V2 */2], /* Some */[/* V4 */4], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* V8 */8], /* None */0, /* None */0, /* array */[
                                          ReasonReact.element(/* None */0, /* None */0, MaterialUi.CircularProgress[/* make */5](/* Some */[progress], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[])),
                                          ReasonReact.element(/* None */0, /* None */0, MaterialUi.Typography[/* make */7](/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* Body1 */-904051921], /* None */0, /* array */[text]))
                                        ]))]))]));
    });
  return newrecord;
}

exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */