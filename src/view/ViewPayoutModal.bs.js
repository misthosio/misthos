// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var Voters = require("./components/Voters.bs.js");
var Partner = require("./components/Partner.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ScrollList = require("./components/ScrollList.bs.js");
var StatusChip = require("./components/StatusChip.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_Table = require("@jsiebern/bs-material-ui/src/MaterialUi_Table.bs.js");
var LedgerConfirmation = require("./components/LedgerConfirmation.bs.js");
var SingleActionButton = require("./components/SingleActionButton.bs.js");
var MaterialUi_TableRow = require("@jsiebern/bs-material-ui/src/MaterialUi_TableRow.bs.js");
var MaterialUi_TableBody = require("@jsiebern/bs-material-ui/src/MaterialUi_TableBody.bs.js");
var MaterialUi_TableCell = require("@jsiebern/bs-material-ui/src/MaterialUi_TableCell.bs.js");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");
var ProcessApprovalButtons = require("./components/ProcessApprovalButtons.bs.js");
var MaterialUi_SnackbarContent = require("@jsiebern/bs-material-ui/src/MaterialUi_SnackbarContent.bs.js");

var component = ReasonReact.statelessComponent("ViewPayoutModal");

var total = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.justifyContent(Css.spaceBetween),
        /* :: */[
          Css.alignItems(/* baseline */287825029),
          /* :: */[
            Css.backgroundColor(Colors.white),
            /* :: */[
              Css.position(Css.sticky),
              /* :: */[
                Css.bottom(Css.px(0)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var noBorder = Css.style(/* :: */[
      Css.borderColor(/* transparent */582626130),
      /* [] */0
    ]);

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

var Styles = /* module */[
  /* total */total,
  /* noBorder */noBorder,
  /* link */link
];

function make(viewData, commands, cmdStatus, _) {
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
              var match = viewData[/* payout */3];
              var match$1 = match[/* data */5];
              var date = match$1[/* date */6];
              var txId = match$1[/* txId */5];
              var explorerLink = match$1[/* explorerLink */4];
              var summary = match$1[/* summary */3];
              var payoutTx = match$1[/* payoutTx */2];
              var status = match$1[/* payoutStatus */0];
              var processId = match[/* processId */0];
              var executeCommand = function ($staropt$star, _) {
                var justSign = $staropt$star !== undefined ? $staropt$star : false;
                var signatures = viewData[/* requiresLedgerSig */1] ? (Curry._1(commands[/* preSubmit */12], "Please confirm this endorsement on your ledger device (BTC app)"), Curry._1(viewData[/* signPayout */5], /* () */0)) : Promise.resolve(/* Signatures */Block.__(0, [/* array */[]]));
                signatures.then((function (param) {
                        if (typeof param === "number") {
                          return Promise.resolve(Curry._1(commands[/* preSubmitError */13], "The device does not have the correct seed for signing"));
                        } else if (param.tag) {
                          var match = param[0];
                          if (match) {
                            return Promise.resolve(Curry._1(commands[/* preSubmitError */13], match[0]));
                          } else {
                            return Promise.resolve(Curry._1(commands[/* preSubmitError */13], "An unknown error has occured"));
                          }
                        } else {
                          var signatures = param[0];
                          return Promise.resolve(justSign ? Curry._2(commands[/* signPayout */10], signatures, processId) : Curry._2(commands[/* endorsePayout */9], signatures, processId));
                        }
                      }));
                return /* () */0;
              };
              var destinationList = Belt_List.toArray(Belt_List.mapWithIndexU(summary[/* destinations */1], (function (idx, param) {
                          return ReasonReact.element(String(idx), undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(noBorder, undefined, undefined, /* None */870530776, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(param[0])]))])),
                                          ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(noBorder, undefined, true, /* None */870530776, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(param[1]) + " BTC")]))]))
                                        ]));
                        })));
              var match$2;
              if (typeof status === "number") {
                switch (status) {
                  case 0 : 
                      match$2 = /* tuple */[
                        "Pending Approval",
                        /* Pending */1
                      ];
                      break;
                  case 1 : 
                      match$2 = /* tuple */[
                        "Accepted",
                        /* Success */3
                      ];
                      break;
                  case 2 : 
                      match$2 = /* tuple */[
                        "Denied",
                        /* Failure */2
                      ];
                      break;
                  case 3 : 
                      match$2 = /* tuple */[
                        "Aborted",
                        /* Failure */2
                      ];
                      break;
                  case 4 : 
                      match$2 = /* tuple */[
                        "Unconfirmed",
                        /* Pending */1
                      ];
                      break;
                  case 5 : 
                      match$2 = /* tuple */[
                        "Confirmed",
                        /* Success */3
                      ];
                      break;
                  
                }
              } else {
                match$2 = /* tuple */[
                  "Failed",
                  /* Failure */2
                ];
              }
              var payoutStatus = ReasonReact.element(undefined, undefined, StatusChip.make(match$2[1], match$2[0], /* array */[]));
              var pendingSignatures = status === /* Accepted */1 && Belt_Set.size(viewData[/* missingSignatures */6]) > 0;
              var exit = 0;
              if (typeof cmdStatus === "number" || cmdStatus.tag) {
                exit = 1;
              } else {
                return ReasonReact.element(undefined, undefined, LedgerConfirmation.make(/* Endorsement */6, (function () {
                                  return Curry._1(commands[/* reset */0], /* () */0);
                                }), summary, payoutTx[/* misthosFeeAddress */2], payoutTx[/* changeAddress */3], cmdStatus, /* array */[]));
              }
              if (exit === 1) {
                var tmp;
                if (pendingSignatures) {
                  var match$3 = Belt_Set.has(viewData[/* missingSignatures */6], viewData[/* localUser */0]);
                  var tmp$1;
                  if (match$3) {
                    var partial_arg = true;
                    tmp$1 = ReasonReact.element(undefined, undefined, SingleActionButton.make("Sign Transaction", undefined, (function (param) {
                                return executeCommand(partial_arg, param);
                              }), undefined, undefined, true, false, /* SignTransaction */4, cmdStatus, /* array */[]));
                  } else {
                    tmp$1 = null;
                  }
                  tmp = React.createElement("div", {
                        className: ScrollList.containerStyles
                      }, ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Pending Signatures")])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Additional signatures are required by the bitcoin network in order for this transaction to proceed. The following custodians have yet to sign this transaction:")])), ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[ReasonReact.element(undefined, undefined, MaterialUi_List.make(undefined, undefined, undefined, true, undefined, undefined, undefined, /* array */[Belt_Array.mapU(Belt_Set.toArray(viewData[/* missingSignatures */6]), (function (userId) {
                                                  return ReasonReact.element(undefined, undefined, Partner.make(userId, undefined, undefined, Js_primitive.some(ReasonReact.element(undefined, undefined, StatusChip.make(/* Pending */1, "Pending", /* array */[]))), undefined, undefined, /* array */[]));
                                                }))]))])), tmp$1, Belt_Set.size(viewData[/* collidesWith */4]) > 0 ? ReasonReact.element(undefined, undefined, MaterialUi_SnackbarContent.make(undefined, undefined, Js_primitive.some(ViewCommon.text("\n                   This Proposal is reusing inputs reserved by another payout.\n                   We recommend that you coordinate with your Partners\n                   to only sign one Proposal.\n                   ")), undefined, undefined, undefined, undefined, undefined, /* array */[])) : null);
                } else {
                  tmp = React.createElement("div", {
                        className: ScrollList.containerStyles
                      }, ReasonReact.element(undefined, undefined, Voters.make(viewData[/* currentPartners */2], match[/* voters */4], match[/* status */1], /* array */[])), ReasonReact.element(undefined, undefined, ProcessApprovalButtons.make("Endorse Payout", undefined, "Reject Payout", match[/* canVote */3], (function (eta) {
                                  return executeCommand(undefined, eta);
                                }), (function () {
                                  return Curry._1(commands[/* rejectPayout */11], processId);
                                }), (function () {
                                  return Curry._1(commands[/* reset */0], /* () */0);
                                }), cmdStatus, /* array */[])), Belt_Set.size(viewData[/* collidesWith */4]) > 0 ? ReasonReact.element(undefined, undefined, MaterialUi_SnackbarContent.make(undefined, undefined, Js_primitive.some(ViewCommon.text("\n                   This Proposal is reusing inputs reserved by another payout.\n                   We recommend that you coordinate with your Partners\n                   to only endorse one Proposal and reject the other one.\n                   ")), undefined, undefined, undefined, undefined, undefined, /* array */[])) : null);
                }
                return ReasonReact.element(undefined, undefined, Grid.make(Js_primitive.some(ViewCommon.text("Payout Details")), undefined, undefined, undefined, Js_primitive.some(React.createElement("div", {
                                        className: ScrollList.containerStyles
                                      }, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, true, undefined, undefined, undefined, /* array */[date !== undefined ? ViewCommon.text("Payout completed on " + Js_primitive.valFromOption(date).toDateString()) : ViewCommon.text("Proposed by " + PrimitiveTypes.UserId[/* toString */0](match[/* proposedBy */2]))])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                ViewCommon.text("Status: "),
                                                payoutStatus
                                              ])), pendingSignatures ? ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                  ViewCommon.text("Transaction Status: "),
                                                  ReasonReact.element(undefined, undefined, StatusChip.make(/* Pending */1, "Pending", /* array */[]))
                                                ])) : null, ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, true, undefined, undefined, /* array */[ViewCommon.text("Payout")])), ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[
                                                ReasonReact.element(undefined, undefined, MaterialUi_Table.make(undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MaterialUi_TableBody.make(undefined, undefined, /* array */[
                                                                    destinationList,
                                                                    ReasonReact.element("networkFee", undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(noBorder, undefined, undefined, /* None */870530776, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("NETWORK FEE")]))])),
                                                                              ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(noBorder, undefined, true, /* None */870530776, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(summary[/* networkFee */4]) + " BTC")]))]))
                                                                            ])),
                                                                    BTC.zero.gt(summary[/* misthosFee */3]) ? ReasonReact.element("misthosFee", undefined, MaterialUi_TableRow.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[
                                                                                ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(noBorder, undefined, undefined, /* None */870530776, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("MISTHOS FEE")]))])),
                                                                                ReasonReact.element(undefined, undefined, MaterialUi_TableCell.make(noBorder, undefined, true, /* None */870530776, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(summary[/* misthosFee */3]) + " BTC")]))]))
                                                                              ])) : null
                                                                  ]))])),
                                                React.createElement("div", {
                                                      className: total
                                                    }, ReasonReact.element(undefined, undefined, MaterialUi_Typography.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* Body2 */-904051920, undefined, undefined, /* array */[ViewCommon.text("TOTAL PAYOUT")])), ReasonReact.element(undefined, undefined, MTypography.make(/* Subheading */148169314, total, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(BTC.format(summary[/* spentWithFees */2]) + " BTC")])))
                                              ])))), Js_primitive.some(tmp), Js_primitive.some(txId !== undefined && explorerLink !== undefined ? React.createElement("div", undefined, ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Transaction ID")])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[React.createElement("a", {
                                                        className: link,
                                                        href: explorerLink,
                                                        target: "_blank"
                                                      }, ViewCommon.text(txId))]))) : null), undefined, /* array */[]));
              }
              
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

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
