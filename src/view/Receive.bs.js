// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var MButton = require("./components/MButton.bs.js");
var Spinner = require("./components/Spinner.bs.js");
var Clipboard = require("../ffi/Clipboard.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var WithWidth = require("./components/WithWidth.bs.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var BreakPoints = require("./BreakPoints.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Environment = require("../web/Environment.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var WarningsText = require("./text/WarningsText.bs.js");
var MaterialUi_Button = require("@jsiebern/bs-material-ui/src/MaterialUi_Button.bs.js");
var MaterialUi_Tooltip = require("@jsiebern/bs-material-ui/src/MaterialUi_Tooltip.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");

var component = ReasonReact.reducerComponent("Receive");

var alignCenter = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.alignItems(/* center */98248149),
          /* [] */0
        ]
      ]
    ]);

var addressImage = Css.style(/* :: */[
      BreakPoints.xs(/* :: */[
            Css.height(Css.px(200)),
            /* [] */0
          ]),
      /* :: */[
        BreakPoints.sm(/* :: */[
              Css.height(Css.px(250)),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var spinner = Css.style(/* :: */[
      BreakPoints.xs(/* :: */[
            Css.height(Css.px(259)),
            /* [] */0
          ]),
      /* :: */[
        BreakPoints.sm(/* :: */[
              Css.height(Css.px(297)),
              /* [] */0
            ]),
        /* :: */[
          Css.display(/* flex */-1010954439),
          /* :: */[
            Css.flexDirection(/* column */-963948842),
            /* :: */[
              Css.alignItems(Css.center),
              /* :: */[
                Css.justifyContent(/* spaceAround */-485895757),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* alignCenter */alignCenter,
  /* addressImage */addressImage,
  /* spinner */spinner
];

function make(commands, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */(function (param) {
              Curry._1(param[/* send */3], /* GetIncomeAddress */0);
              var clipboard = Clipboard.make(".copy-btn", "modal");
              return Curry._1(param[/* onUnmount */4], (function (param) {
                            clipboard.destroy();
                            return /* () */0;
                          }));
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var match = Environment.get(/* () */0)[/* network */5];
              var warning = match !== 1 ? undefined : Caml_option.some(WarningsText.testnet);
              var copyButtonSM = Js_option.getWithDefault(null, Utils.mapOption((function (address) {
                          var button = React.cloneElement(ReasonReact.element(undefined, undefined, MaterialUi_IconButton.make("copy-btn", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[Icons.copy])), {
                                "data-clipboard-text": address
                              });
                          return ReasonReact.element(undefined, undefined, MaterialUi_Tooltip.make(undefined, undefined, undefined, undefined, undefined, "address-copy-btn", undefined, undefined, undefined, undefined, undefined, undefined, /* Bottom */437082891, undefined, undefined, ViewCommon.text("Copy to Clipboard"), undefined, undefined, undefined, undefined, /* array */[button]));
                        }), state[/* address */0]));
              var copyButtonXS = Js_option.getWithDefault(null, Utils.mapOption((function (address) {
                          return React.cloneElement(ReasonReact.element(undefined, undefined, MaterialUi_Button.make("copy-btn", undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Copy Address")])), {
                                      "data-clipboard-text": address
                                    });
                        }), state[/* address */0]));
              var match$1 = state[/* address */0];
              return ReasonReact.element(undefined, undefined, Grid.make(Caml_option.some(ViewCommon.text("Receive BTC")), undefined, undefined, undefined, Caml_option.some(React.createElement("div", {
                                      className: ScrollList.containerStyles + (" " + alignCenter)
                                    }, ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[React.createElement("div", {
                                                    className: alignCenter
                                                  }, match$1 !== undefined ? React.createElement("img", {
                                                          className: addressImage,
                                                          src: "https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=" + match$1
                                                        }) : ReasonReact.element(undefined, undefined, Spinner.make("Generating new address", spinner, /* array */[])), ReasonReact.element(undefined, undefined, WithWidth.make(/* SM */18586, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                    ViewCommon.text(Js_option.getWithDefault("", state[/* address */0])),
                                                                    copyButtonSM
                                                                  ])), /* array */[
                                                            ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(Js_option.getWithDefault("", state[/* address */0]))])),
                                                            copyButtonXS
                                                          ], /* array */[])), ReasonReact.element(undefined, undefined, MButton.make(undefined, (function (_e) {
                                                              return Curry._1(send, /* GetIncomeAddress */0);
                                                            }), undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Generate new address")])))])))), undefined, undefined, warning, /* array */[]));
            }),
          /* initialState */(function (param) {
              return /* record */[/* address */undefined];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[/* address */action[0]]]);
              } else {
                return /* UpdateWithSideEffects */Block.__(2, [
                          /* record */[/* address */undefined],
                          (function (param) {
                              var send = param[/* send */3];
                              Curry._1(commands[/* exposeIncomeAddress */11], WalletTypes.AccountIndex[/* default */11]).then((function (address) {
                                      return Promise.resolve(Curry._1(send, /* UpdateAddress */[address]));
                                    }));
                              return /* () */0;
                            })
                        ]);
              }
            }),
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
