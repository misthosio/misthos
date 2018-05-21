// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Theme = require("../Theme.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Button = require("@jsiebern/bs-material-ui/src/MaterialUi_Button.bs.js");

var component = ReasonReact.statelessComponent("MButton");

function button(fullWidth) {
  return Css.style(/* :: */[
              Css.borderRadius(Css.px(25)),
              /* :: */[
                Css.border(Css.px(2), /* solid */12956715, Css.black),
                /* :: */[
                  Css.paddingLeft(Css.px(25)),
                  /* :: */[
                    Css.paddingRight(Css.px(25)),
                    /* :: */[
                      Css.margin2(Css.px(Theme.space(5)), Css.px(0)),
                      /* :: */[
                        Css.width(fullWidth ? /* `percent */[
                                -119887163,
                                100.0
                              ] : Css.auto),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var Styles = /* module */[/* button */button];

function make(color, onClick, $staropt$star, children) {
  var fullWidth = $staropt$star ? $staropt$star[0] : false;
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
              return ReasonReact.element(/* None */0, /* None */0, MaterialUi_Button.make(/* Some */[button(fullWidth)], color, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, onClick, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[children]));
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
