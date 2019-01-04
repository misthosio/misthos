// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Theme = require("../Theme.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_Input = require("@jsiebern/bs-material-ui/src/MaterialUi_Input.bs.js");
var MaterialUi_FormControl = require("@jsiebern/bs-material-ui/src/MaterialUi_FormControl.bs.js");
var MaterialUi_FormHelperText = require("@jsiebern/bs-material-ui/src/MaterialUi_FormHelperText.bs.js");

var component = ReasonReact.statelessComponent("MInput");

function margin(tf, bf) {
  return Css.style(/* :: */[
              Css.marginTop(Css.px(Theme.space(tf))),
              /* :: */[
                Css.marginBottom(Css.px(Theme.space(bf))),
                /* :: */[
                  Css.minHeight(Css.px(30)),
                  /* [] */0
                ]
              ]
            ]);
}

var inputRoot = Css.style(/* :: */[
      Css.fontSize(Css.px(14)),
      /* [] */0
    ]);

var Styles = /* module */[
  /* margin */margin,
  /* inputRoot */inputRoot
];

function make(placeholder, value, onChange, autoFocus, fullWidth, endAdornment, error, name, inputProps, type_, $staropt$star, _children) {
  var ensuring = $staropt$star !== undefined ? $staropt$star : false;
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
              var match = error !== undefined ? /* tuple */[
                  true,
                  error
                ] : /* tuple */[
                  false,
                  ""
                ];
              var error$1 = match[0];
              return ReasonReact.element(undefined, undefined, MaterialUi_FormControl.make(margin(ensuring ? 4 : 3, 0), undefined, undefined, error$1, fullWidth, undefined, undefined, undefined, undefined, undefined, /* array */[
                              ReasonReact.element(undefined, undefined, MaterialUi_Input.make(undefined, autoFocus, undefined, undefined, undefined, undefined, endAdornment, undefined, undefined, undefined, undefined, inputProps, undefined, undefined, undefined, name, onChange, placeholder, undefined, undefined, undefined, undefined, undefined, type_, value, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* :: */[
                                        /* Root */Block.__(0, [inputRoot]),
                                        /* [] */0
                                      ], undefined, /* array */[])),
                              error$1 ? ReasonReact.element(undefined, undefined, MaterialUi_FormHelperText.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(match[1])])) : null
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
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
