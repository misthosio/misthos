// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var Partner = require("./components/Partner.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_Collapse = require("@jsiebern/bs-material-ui/src/MaterialUi_Collapse.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");

function statusToString(param) {
  switch (param) {
    case 0 : 
        return "Accessible";
    case 1 : 
        return "AtRisk";
    case 2 : 
        return "OutdatedCustodians";
    case 3 : 
        return "TemporarilyInaccessible";
    case 4 : 
        return "Inaccessible";
    
  }
}

function addressTypeToString(param) {
  if (param) {
    return "Income (exposed by - " + (PrimitiveTypes.UserId[/* toString */0](param[0]) + ")");
  } else {
    return "Change";
  }
}

var component = ReasonReact.statelessComponent("AddressesModal");

var grid = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        Css.unsafe("gridTemplateColumns", "[begin] 5fr 1fr min-content [end]"),
        /* [] */0
      ]
    ]);

var header = Css.style(/* :: */[
      Css.borderBottom(Css.px(1), /* solid */12956715, Css.hex("979797")),
      /* :: */[
        Css.padding2(Css.px(Theme.space(2)), Css.px(Theme.space(3))),
        /* [] */0
      ]
    ]);

var summary = Css.style(/* :: */[
      Css.padding2(Css.px(Theme.space(2)), Css.px(Theme.space(3))),
      /* [] */0
    ]);

var details = Css.style(/* :: */[
      Css.unsafe("gridColumn", "begin / end"),
      /* :: */[
        Css.borderBottom(Css.px(1), /* solid */12956715, Css.hex("979797")),
        /* :: */[
          Css.paddingBottom(Css.px(Theme.space(5))),
          /* [] */0
        ]
      ]
    ]);

var detailsGrid = Css.style(/* :: */[
      Css.display(Css.grid),
      /* :: */[
        Css.gridGap(Css.px(Theme.space(3))),
        /* :: */[
          Css.unsafe("gridTemplateColumns", "[begin] 1fr 1fr [end]"),
          /* :: */[
            Css.padding2(Css.px(0), Css.px(Theme.space(3))),
            /* [] */0
          ]
        ]
      ]
    ]);

var Styles = /* module */[
  /* grid */grid,
  /* header */header,
  /* summary */summary,
  /* details */details,
  /* detailsGrid */detailsGrid
];

function make(viewData, _) {
  var renderExpandedInfo = function (info) {
    return ReasonReact.element(/* None */0, /* None */0, MaterialUi_Collapse.make(/* Some */[details], /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[React.createElement("div", {
                          className: detailsGrid
                        }, React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("Custodians")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("This is a " + (String(info[/* nCoSigners */1]) + ("-of-" + (String(info[/* nCustodians */2]) + " address with the following custodians:"))))])), ReasonReact.element(/* None */0, /* None */0, MaterialUi_List.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Belt_Array.map(Belt_Set.toArray(info[/* custodians */0]), (function (partnerId) {
                                              var match = Curry._1(info[/* isPartner */7], partnerId);
                                              var status = match ? /* None */0 : /* Some */[ViewCommon.text(" - Ex-Partner")];
                                              return ReasonReact.element(/* None */0, /* None */0, Partner.make(partnerId, /* None */0, /* None */0, status, /* None */0, /* array */[]));
                                            }))]))), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("OVERVIEW")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body1 */-904051921, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text("ADDRESS BALANCE: TODO")])), Belt_Array.map(Belt_List.toArray(Belt_List.concat(info[/* currentUtxos */5], info[/* spentInputs */6])), (function (input) {
                                    return ViewCommon.text(BTC.format(input[/* value */3]));
                                  }))))]));
  };
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
              var infos = Belt_List.toArray(Belt_List.keepMapU(viewData[/* infos */0], (function (info) {
                          if (info[/* addressType */0] !== /* Change */0 || info[/* balance */5].gt(BTC.zero)) {
                            var expandedInfo = Curry._1(viewData[/* addressDetails */1], info);
                            return /* Some */[/* array */[
                                      ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[summary], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(info[/* address */2])])),
                                      ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[summary], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(statusToString(info[/* addressStatus */4]))])),
                                      ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Icons.chevronDown])),
                                      renderExpandedInfo(expandedInfo)
                                    ]];
                          } else {
                            return /* None */0;
                          }
                        })));
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Wallet Address History")], /* None */0, /* None */0, /* None */0, /* Some */[React.createElement("div", {
                                    className: ScrollList.containerStyles
                                  }, ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[React.createElement("div", {
                                                  className: grid
                                                }, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[header], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("WALLET ADDRESS")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[header], /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("STATUS")])), React.createElement("span", {
                                                      className: header
                                                    }), infos)])))], /* None */0, /* None */0, /* None */0, /* array */[]));
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
exports.statusToString = statusToString;
exports.addressTypeToString = addressTypeToString;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
