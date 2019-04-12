// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Grid = require("./components/Grid.bs.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var Session = require("../web/Session.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("PublicHome");

function make(_children) {
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
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, Grid.make(Caml_option.some(ViewCommon.text("Nameless Login detected")), undefined, undefined, undefined, Caml_option.some(React.createElement("div", undefined, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("\n             You have signed in with a blockstack user that doesn\'t have a registered blockstack.id,\n             make sure to that your blockstack-browser is up to date and that you log in with a registered id (ie. \"username.blockstack.id\" NOT \"ID-1NVqLfofzHgraUVSf6s3k96KHG3VEudo2s\"). Close all Misthos tabs (except this one) and then click the button bellow to try again.\n             ")])), ReasonReact.element(undefined, undefined, MButton.make(/* Inherit */-72987685, (function (param) {
                                                Session.signOut(undefined, /* () */0);
                                                return /* () */0;
                                              }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Sign Out to try again")])))), undefined, undefined, undefined, /* array */[]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.make = make;
/* component Not a pure module */
