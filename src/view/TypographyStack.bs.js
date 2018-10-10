// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Link = require("./components/Link.bs.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Grid = require("@jsiebern/bs-material-ui/src/MaterialUi_Grid.bs.js");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");

var component = ReasonReact.statelessComponent("TypographyStack");

function make() {
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
              return ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                              ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* V6 */5, undefined, undefined, undefined, /* array */[
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Display4 */-11760686, undefined, undefined, /* array */[ViewCommon.text("Display 4")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Display3 */-11760687, undefined, undefined, /* array */[ViewCommon.text("Display 3")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Display2 */-11760688, undefined, undefined, /* array */[ViewCommon.text("Display 2")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Display1 */-11760689, undefined, undefined, /* array */[ViewCommon.text("Display 1")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Title */594052472, undefined, undefined, /* array */[ViewCommon.text("Title")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Subheading */148169314, undefined, undefined, /* array */[ViewCommon.text("Subheading")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Body2 */-904051920, undefined, undefined, /* array */[ViewCommon.text("Body2")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Body1 */-904051921, undefined, undefined, /* array */[ViewCommon.text("Body1")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Caption */-191243578, undefined, undefined, /* array */[ViewCommon.text("Caption")])),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Button */242538002, undefined, undefined, /* array */[ViewCommon.text("Button")]))
                                      ])),
                              ReasonReact.element(undefined, undefined, MaterialUi_Grid.make(undefined, undefined, undefined, undefined, undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* V6 */5, undefined, undefined, undefined, /* array */[
                                        ReasonReact.element(undefined, undefined, MButton.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Button")])),
                                        React.createElement("br", undefined),
                                        ReasonReact.element(undefined, undefined, Link.make(/* TypographyStack */2, undefined, /* array */[ViewCommon.text("Link")]))
                                      ]))
                            ]));
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
