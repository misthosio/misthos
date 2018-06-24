// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Utils = require("../../utils/Utils.bs.js");
var React = require("react");
var Colors = require("../Colors.bs.js");
var Router = require("../Router.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var MaterialUi_ListItem = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItem.bs.js");
var MaterialUi_ListItemText = require("@jsiebern/bs-material-ui/src/MaterialUi_ListItemText.bs.js");

var component = ReasonReact.statelessComponent("Transaction");

var root = Css.style(/* :: */[
      Css.flex(1),
      /* :: */[
        Css.padding2(Css.px(0), Css.px(16)),
        /* :: */[
          Css.minWidth(Css.px(0)),
          /* :: */[
            Css.firstChild(/* :: */[
                  Css.paddingLeft(Css.px(16)),
                  /* [] */0
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

function amount(inOut) {
  return Css.style(/* :: */[
              Css.color(inOut ? Colors.strongPink : Colors.misthosTeal),
              /* :: */[
                Css.$$float(/* right */-379319332),
                /* [] */0
              ]
            ]);
}

var Styles = /* module */[
  /* root */root,
  /* amount */amount
];

function make(tx, _) {
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
              var afmt = function (amount) {
                return ViewCommon.text(BTC.format(amount) + " BTC");
              };
              var dfmt = function (param) {
                return Utils.mapOption((function (date) {
                              return ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(date.toDateString())]));
                            }), param);
              };
              var match = tx[/* status */1];
              var match$1 = tx[/* txType */0];
              var primary = match ? (
                  match$1 ? ViewCommon.text("UNCONFIRMED PAYOUT") : ViewCommon.text("UNCONFIRMED INCOME")
                ) : (
                  match$1 ? ViewCommon.text("PAYOUT") : ViewCommon.text("INCOME")
                );
              var secondary = dfmt(tx[/* date */4]);
              var amount$1 = afmt(tx[/* amount */3]);
              var partial_arg = tx[/* detailsLink */5];
              return ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItem.make(/* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function (param) {
                                  return Router.clickToRoute(partial_arg, param);
                                })], /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_ListItemText.make(/* None */0, /* None */0, /* None */0, /* Some */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                  primary,
                                                  React.createElement("span", {
                                                        className: amount(tx[/* txType */0])
                                                      }, amount$1)
                                                ]))], /* None */0, secondary, /* None */0, /* Some */[/* :: */[
                                          /* Root */Block.__(0, [root]),
                                          /* [] */0
                                        ]], /* None */0, /* array */[]))]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
