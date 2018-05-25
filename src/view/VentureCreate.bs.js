// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Body2 = require("./components/Body2.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var MInput = require("./components/MInput.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var MButton = require("./components/MButton.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var CommandExecutor = require("./components/CommandExecutor.bs.js");

var component = ReasonReact.reducerComponent("VentureCreate");

var infoBox = Css.style(/* :: */[
      Css.border(Css.px(2), Css.solid, Colors.black),
      /* :: */[
        Css.padding4(Css.px(0), Css.px(Theme.space(4)), Css.px(Theme.space(4)), Css.px(Theme.space(4))),
        /* :: */[
          Css.marginTop(Css.px(32)),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[/* infoBox */infoBox];

function make(onCreateVenture, cmdStatus, _) {
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
              return ReasonReact.element(/* None */0, /* None */0, Body2.make(/* Some */[/* :: */[
                                "Create a Venture",
                                /* [] */0
                              ]], React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("\n                 Set up a new Venture with yourself as the initial Partner.\n                 You can add and remove Partners once the Venture is created.\n                 But first, let’s start with a name.\n                ")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* array */[ViewCommon.text("Venture Name")])), ReasonReact.element(/* None */0, /* None */0, MInput.make(/* Some */["Enter a Venture Name"], /* Some */[/* `String */[
                                            -976970511,
                                            param[/* state */1][/* newVenture */0]
                                          ]], /* Some */[(function (e) {
                                              return Curry._1(send, /* ChangeNewVenture */[ViewCommon.extractString(e)]);
                                            })], /* Some */[true], /* Some */[true], /* None */0, /* None */0, /* None */0, /* array */[])), ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                              return Curry._1(send, /* CreateVenture */0);
                                            })], /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("create venture")])), ReasonReact.element(/* None */0, /* None */0, CommandExecutor.Status[/* make */2](cmdStatus, /* CreateVenture */0, /* array */[]))), React.createElement("div", {
                                  className: infoBox
                                }, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* array */[ViewCommon.text("What can you do with a venture?")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("\n                 • Your Venture can receive money from different sources, such as customers, clients, and investors\n                ")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("\n                 • Every Partner of the Venture has full transparency of income and payouts\n                ")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("\n                 • The team decides the Policies by which payouts take place\n                ")]))), /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[/* newVenture */""];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* newVenture */action[0]]]);
              } else {
                var name = $$String.trim(state[/* newVenture */0]);
                if (name === "") {
                  return /* NoUpdate */0;
                } else {
                  Curry._1(onCreateVenture, name);
                  return /* Update */Block.__(0, [/* record */[/* newVenture */""]]);
                }
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
