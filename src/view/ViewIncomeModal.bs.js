// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var StatusChip = require("./components/StatusChip.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Belt_SetString = require("bs-platform/lib/js/belt_SetString.js");

var link = Css.style(/* :: */[
      Css.color(Colors.black),
      /* :: */[
        Css.hover(/* :: */[
              Css.color(Colors.misthosTeal),
              /* [] */0
            ]),
        /* [] */0
      ]
    ]);

var Styles = /* module */[/* link */link];

var component = ReasonReact.statelessComponent("ViewIncomeModal");

function make(viewData, _) {
  var addresses = viewData[/* addresses */5];
  var amount = viewData[/* amount */4];
  var txId = viewData[/* txId */3];
  var date = viewData[/* date */2];
  var explorerLink = viewData[/* explorerLink */1];
  var status = viewData[/* status */0];
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
              var match = status ? /* tuple */[
                  "Confirmed",
                  /* Success */2
                ] : /* tuple */[
                  "Unconfirmed",
                  /* Pending */0
                ];
              var txStatus = ReasonReact.element(/* None */0, /* None */0, StatusChip.make(match[1], match[0], /* array */[]));
              var addresses$1 = Belt_SetString.reduce(addresses, "", (function (res, address) {
                      return res + (address + ", ");
                    }));
              var addresses$2 = addresses$1.slice(0, addresses$1.length - 2 | 0);
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Income Transaction Details")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[date ? ViewCommon.text("Transaction confirmed on " + (date[0].toDateString() + " ")) : null])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                            ViewCommon.text("Status: "),
                                            txStatus
                                          ])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* Some */[true], /* None */0, /* array */[ViewCommon.text("Income Amount")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Subheading */148169314, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(BTC.format(amount) + " BTC")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* Some */[true], /* None */0, /* array */[ViewCommon.text("Income Address")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(addresses$2)])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* Some */[true], /* None */0, /* array */[ViewCommon.text("Transaction ID")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("a", {
                                                  className: link,
                                                  href: explorerLink,
                                                  target: "_blank"
                                                }, ViewCommon.text(txId))])))], /* None */0, /* None */0, /* None */0, /* array */[]));
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
exports.Styles = Styles;
exports.component = component;
exports.make = make;
/* link Not a pure module */
