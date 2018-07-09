// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Colors = require("../Colors.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Divider = require("@jsiebern/bs-material-ui/src/MaterialUi_Divider.bs.js");

var component = ReasonReact.statelessComponent("MDivider");

var divider = Css.style(/* :: */[
      Css.borderRadius(Css.px(4)),
      /* :: */[
        Css.backgroundColor(Colors.black),
        /* :: */[
          Css.boxShadow(undefined, undefined, Css.px(5), undefined, undefined, Css.rgba(0, 0, 0, 0.02)),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[/* divider */divider];

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
              return ReasonReact.element(undefined, undefined, MaterialUi_Divider.make(undefined, divider, /* `String */[
                              -976970511,
                              "li"
                            ], undefined, undefined, undefined, undefined, /* array */[]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
