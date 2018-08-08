// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var Theme = require("./Theme.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var Voters = require("./components/Voters.bs.js");
var MButton = require("./components/MButton.bs.js");
var Partner = require("./components/Partner.bs.js");
var AlertBox = require("./components/AlertBox.bs.js");
var Clipboard = require("../ffi/Clipboard.bs.js");
var StatusChip = require("./components/StatusChip.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var WarningsText = require("./text/WarningsText.bs.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_Tooltip = require("@jsiebern/bs-material-ui/src/MaterialUi_Tooltip.bs.js");
var ViewPartnerModalText = require("./text/ViewPartnerModalText.bs.js");
var ProcessApprovalButtons = require("./components/ProcessApprovalButtons.bs.js");

var component = ReasonReact.reducerComponent("ViewPartner");

var sendIcon = Css.style(/* :: */[
      Css.marginLeft(Css.px(4)),
      /* :: */[
        Css.width(Css.px(Theme.space(2))),
        /* [] */0
      ]
    ]);

var sendButton = Css.style(/* :: */[
      Css.unsafe("alignSelf", "flex-end"),
      /* [] */0
    ]);

var ventureLink = Css.style(/* :: */[
      Css.textDecoration(Css.underline),
      /* :: */[
        Css.color(/* currentColor */292050538),
        /* :: */[
          Css.hover(/* :: */[
                Css.color(Colors.misthosTeal),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[
  /* sendIcon */sendIcon,
  /* sendButton */sendButton,
  /* ventureLink */ventureLink
];

function updateLoggedInStatus(partnerProcess, send) {
  partnerProcess[/* data */5][/* hasLoggedIn */2].then((function (known) {
          return Promise.resolve(Curry._1(send, /* SetHasLoggedIn */[known]));
        }));
  return /* () */0;
}

function make(viewData, commands, cmdStatus, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              updateLoggedInStatus(viewData[/* partnerProcess */2], param[/* send */3]);
              return /* record */[
                      /* viewData */viewData,
                      /* loggedInStatus */param[/* state */1][/* loggedInStatus */1]
                    ];
            }),
          /* didMount */(function (param) {
              return updateLoggedInStatus(viewData[/* partnerProcess */2], param[/* send */3]);
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var match = param[/* state */1];
              var loggedInStatus = match[/* loggedInStatus */1];
              var viewData = match[/* viewData */0];
              var copyButton = function (element, $staropt$star, _) {
                var className = $staropt$star !== undefined ? $staropt$star : "";
                return React.cloneElement(element, {
                            "data-clipboard-text": viewData[/* joinVentureUrl */5],
                            className: "copy-btn " + className
                          });
              };
              var match$1 = viewData[/* partnerProcess */2];
              var match$2 = match$1[/* data */5];
              var processType = match$2[/* processType */1];
              var userId = match$2[/* userId */0];
              var status = match$1[/* status */1];
              var processId = match$1[/* processId */0];
              var match$3 = processType ? /* tuple */[
                  (function () {
                      return Curry._1(commands[/* endorsePartner */2], processId);
                    }),
                  (function () {
                      return Curry._1(commands[/* rejectPartner */3], processId);
                    })
                ] : /* tuple */[
                  (function () {
                      return Curry._1(commands[/* endorsePartnerRemoval */5], processId);
                    }),
                  (function () {
                      return Curry._1(commands[/* rejectPartnerRemoval */6], processId);
                    })
                ];
              var onboardingState;
              if (processType) {
                var match$4 = viewData[/* partnerProcess */2][/* data */5][/* joinedWallet */3];
                var exit = 0;
                if (status !== 1) {
                  if (status !== 0) {
                    onboardingState = /* None */4;
                  } else {
                    exit = 1;
                  }
                } else if (match$4) {
                  onboardingState = /* FullyOnboarded */3;
                } else if (loggedInStatus !== undefined && !loggedInStatus) {
                  exit = 1;
                } else {
                  onboardingState = /* SyncRequired */2;
                }
                if (exit === 1) {
                  onboardingState = match$4 || !(loggedInStatus !== undefined && !loggedInStatus) ? /* PendingApproval */1 : /* SignInRequired */0;
                }
                
              } else {
                onboardingState = /* None */4;
              }
              var onboardingStatusChip;
              switch (onboardingState) {
                case 0 : 
                    onboardingStatusChip = ReasonReact.element(undefined, undefined, StatusChip.make(/* Pending */1, "SIGN IN REQUIRED", /* array */[]));
                    break;
                case 1 : 
                    onboardingStatusChip = ReasonReact.element(undefined, undefined, StatusChip.make(/* Pending */1, "PENDING APPROVAL", /* array */[]));
                    break;
                case 2 : 
                    onboardingStatusChip = ReasonReact.element(undefined, undefined, StatusChip.make(/* Pending */1, "SYNC REQUIRED", /* array */[]));
                    break;
                case 3 : 
                    onboardingStatusChip = ReasonReact.element(undefined, undefined, StatusChip.make(/* Success */3, "ONBOARDED", /* array */[]));
                    break;
                case 4 : 
                    onboardingStatusChip = null;
                    break;
                
              }
              var sendIcon$1 = React.createElement("span", {
                    className: sendIcon
                  }, Icons.send);
              var onboardingBody;
              switch (onboardingState) {
                case 0 : 
                    onboardingBody = ReasonReact.element(undefined, undefined, AlertBox.make(/* array */[
                              ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(PrimitiveTypes.UserId[/* toString */0](userId) + ViewPartnerModalText.AlertBox[/* signInRequired */0])])),
                              ReasonReact.element(undefined, undefined, MButton.make(undefined, undefined, undefined, undefined, /* Flat */0, sendButton, false, undefined, ViewPartnerModalText.Email[/* signInRequired */0](userId, viewData[/* localUser */0], viewData[/* ventureName */1], viewData[/* webDomain */6]), undefined, undefined, /* array */[
                                        ViewCommon.text("SEND A SIGN IN REMINDER"),
                                        sendIcon$1
                                      ]))
                            ]));
                    break;
                case 1 : 
                    onboardingBody = ReasonReact.element(undefined, undefined, AlertBox.make(/* array */[ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(ViewPartnerModalText.AlertBox[/* pendingApproval */4](PrimitiveTypes.UserId[/* toString */0](viewData[/* partnerProcess */2][/* data */5][/* userId */0])))]))]));
                    break;
                case 2 : 
                    var element = React.createElement("a", {
                          href: viewData[/* joinVentureUrl */5],
                          onClick: (function (prim) {
                              prim.preventDefault();
                              return /* () */0;
                            })
                        }, ViewCommon.text(ViewPartnerModalText.AlertBox[/* syncRequiredVentureUrl */2]));
                    onboardingBody = ReasonReact.element(undefined, undefined, AlertBox.make(/* array */[
                              ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, undefined, undefined, undefined, undefined, /* array */[
                                        ViewCommon.text(PrimitiveTypes.UserId[/* toString */0](viewData[/* partnerProcess */2][/* data */5][/* userId */0]) + ViewPartnerModalText.AlertBox[/* syncRequiredPart1 */1]),
                                        ReasonReact.element(undefined, undefined, MaterialUi_Tooltip.make(undefined, undefined, undefined, undefined, undefined, undefined, "venter-url-label", undefined, undefined, undefined, undefined, undefined, /* Bottom */437082891, undefined, undefined, ViewCommon.text("Copy to Clipboard"), undefined, undefined, /* array */[copyButton(element, ventureLink, /* () */0)])),
                                        ViewCommon.text(ViewPartnerModalText.AlertBox[/* syncRequiredPart2 */3])
                                      ])),
                              ReasonReact.element(undefined, undefined, MButton.make(undefined, undefined, undefined, undefined, /* Flat */0, sendButton, false, undefined, ViewPartnerModalText.Email[/* syncRequired */1](userId, viewData[/* localUser */0], viewData[/* ventureName */1], viewData[/* joinVentureUrl */5]), undefined, undefined, /* array */[
                                        ViewCommon.text("SHARE THE SYNC URL"),
                                        sendIcon$1
                                      ]))
                            ]));
                    break;
                case 3 : 
                    onboardingBody = ReasonReact.element(undefined, undefined, MTypography.make(/* Body1 */-904051921, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text(PrimitiveTypes.UserId[/* toString */0](viewData[/* partnerProcess */2][/* data */5][/* userId */0]) + ViewPartnerModalText.AlertBox[/* fullyOnboarded */5])]));
                    break;
                case 4 : 
                    onboardingBody = null;
                    break;
                
              }
              var onboarding = onboardingState >= 4 ? null : /* array */[
                  ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, true, true, undefined, undefined, /* array */[ViewCommon.text("Partner Onboarding")])),
                  ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, true, undefined, undefined, undefined, /* array */[
                            ViewCommon.text("Status: "),
                            onboardingStatusChip
                          ])),
                  onboardingBody
                ];
              var processTypeString = processType ? "Addition" : "Removal";
              var match$5;
              switch (status) {
                case 0 : 
                    match$5 = /* tuple */[
                      "Pending Approval",
                      /* Pending */1
                    ];
                    break;
                case 1 : 
                    match$5 = /* tuple */[
                      "Accepted",
                      /* Success */3
                    ];
                    break;
                case 2 : 
                    match$5 = /* tuple */[
                      "Denied",
                      /* Failure */2
                    ];
                    break;
                case 3 : 
                    match$5 = /* tuple */[
                      "Aborted",
                      /* Failure */2
                    ];
                    break;
                
              }
              var statusChip = ReasonReact.element(undefined, undefined, StatusChip.make(match$5[1], match$5[0], /* array */[]));
              var match$6 = viewData[/* atRiskWarning */4];
              var alertText = match$6 ? WarningsText.partnerRemovalRisk : undefined;
              return ReasonReact.element(undefined, undefined, Grid.make(Js_primitive.some(ViewCommon.text("Proposed Partner " + processTypeString)), undefined, undefined, undefined, Js_primitive.some(React.createElement("div", undefined, ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Proposed Partner " + processTypeString)])), ReasonReact.element(PrimitiveTypes.UserId[/* toString */0](userId), undefined, Partner.make(userId, undefined, undefined, undefined, undefined, undefined, /* array */[])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, true, undefined, undefined, undefined, /* array */[ViewCommon.text("Proposed by " + PrimitiveTypes.UserId[/* toString */0](match$1[/* proposedBy */2]))])), ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[
                                              ViewCommon.text("Status: "),
                                              statusChip
                                            ])), onboarding)), Js_primitive.some(React.createElement("div", undefined, ReasonReact.element(undefined, undefined, Voters.make(viewData[/* currentPartners */3], match$1[/* voters */4], status, /* array */[])), ReasonReact.element(undefined, undefined, ProcessApprovalButtons.make("Endorse Partner " + processTypeString, alertText, "Reject Partner " + processTypeString, match$1[/* canVote */3], match$3[0], match$3[1], (function () {
                                                return Curry._1(commands[/* reset */0], /* () */0);
                                              }), cmdStatus, /* array */[])))), undefined, undefined, /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewData */viewData,
                      /* loggedInStatus */undefined
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              return /* Update */Block.__(0, [/* record */[
                          /* viewData */state[/* viewData */0],
                          /* loggedInStatus */action[0]
                        ]]);
            }),
          /* subscriptions */(function () {
              return /* :: */[
                      /* Sub */[
                        (function () {
                            return Clipboard.make(".copy-btn", "modal");
                          }),
                        (function (prim) {
                            prim.destroy();
                            return /* () */0;
                          })
                      ],
                      /* [] */0
                    ];
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

var ViewData = 0;

var Text = 0;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.ViewData = ViewData;
exports.Text = Text;
exports.component = component;
exports.Styles = Styles;
exports.updateLoggedInStatus = updateLoggedInStatus;
exports.make = make;
/* component Not a pure module */
