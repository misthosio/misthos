// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var BTC = require("../application/wallet/BTC.bs.js");
var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Icons = require("./Icons.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var MInput = require("./components/MInput.bs.js");
var Balance = require("./components/Balance.bs.js");
var MButton = require("./components/MButton.bs.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WalletTypes = require("../application/wallet/WalletTypes.bs.js");
var ProposeButton = require("./components/ProposeButton.bs.js");
var MaterialUi_Table = require("@jsiebern/bs-material-ui/src/MaterialUi_Table.bs.js");
var BitcoinFeesClient = require("../application/wallet/BitcoinFeesClient.bs.js");
var MaterialUi_TableRow = require("@jsiebern/bs-material-ui/src/MaterialUi_TableRow.bs.js");
var MaterialUi_TableBody = require("@jsiebern/bs-material-ui/src/MaterialUi_TableBody.bs.js");
var MaterialUi_TableCell = require("@jsiebern/bs-material-ui/src/MaterialUi_TableCell.bs.js");
var MaterialUi_IconButton = require("@jsiebern/bs-material-ui/src/MaterialUi_IconButton.bs.js");
var MaterialUi_Typography = require("@jsiebern/bs-material-ui/src/MaterialUi_Typography.bs.js");
var MaterialUi_InputAdornment = require("@jsiebern/bs-material-ui/src/MaterialUi_InputAdornment.bs.js");

var component = ReasonReact.reducerComponent("CreatePayout");

var maxButton = Css.style(/* :: */[
      Css.color(Css.rgba(0, 0, 0, 0.54)),
      /* [] */0
    ]);

var maxWidth = Css.style(/* :: */[
      Css.width(/* `percent */[
            -119887163,
            99.0
          ]),
      /* [] */0
    ]);

var cellHeight = Css.style(/* :: */[
      Css.height(Css.px(49)),
      /* [] */0
    ]);

var buttonPadding = Css.style(/* :: */[
      Css.paddingLeft(Css.px(4)),
      /* [] */0
    ]);

var noBorder = Css.style(/* :: */[
      Css.borderColor(/* transparent */582626130),
      /* :: */[
        Css.whiteSpace(/* nowrap */867913355),
        /* [] */0
      ]
    ]);

function spaceBetween(align) {
  return Css.style(/* :: */[
              Css.display(/* flex */-1010954439),
              /* :: */[
                Css.justifyContent(/* spaceBetween */516682146),
                /* :: */[
                  Css.alignItems(align),
                  /* [] */0
                ]
              ]
            ]);
}

var total = Css.style(/* :: */[
      Css.backgroundColor(Colors.white),
      /* :: */[
        Css.position(Css.sticky),
        /* :: */[
          Css.bottom(Css.px(0)),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[
  /* maxButton */maxButton,
  /* maxWidth */maxWidth,
  /* cellHeight */cellHeight,
  /* buttonPadding */buttonPadding,
  /* noBorder */noBorder,
  /* spaceBetween */spaceBetween,
  /* total */total
];

function updateState(state) {
  var match = state[/* inputs */9];
  var btcAmount = match[/* btcAmount */1];
  var recipientAddress = match[/* recipientAddress */0];
  var fee = state[/* fee */7];
  var inputAmount = state[/* inputAmount */3];
  var destinations = state[/* destinations */1];
  var viewData = state[/* viewData */0];
  var match$1 = Curry._1(viewData[/* isAddressValid */5], recipientAddress) ? /* tuple */[
      recipientAddress,
      recipientAddress,
      true
    ] : /* tuple */[
      recipientAddress,
      "",
      false
    ];
  var addressValid = match$1[2];
  var inputDestination = match$1[1];
  var recipientAddress$1 = match$1[0];
  var newInputAmount = BTC.fromString(btcAmount);
  var match$2 = btcAmount === "" ? /* tuple */[
      "",
      BTC.zero
    ] : (
      newInputAmount.isNaN() ? /* tuple */[
          BTC.format(inputAmount),
          inputAmount
        ] : /* tuple */[
          btcAmount,
          newInputAmount
        ]
    );
  var inputAmount$1 = match$2[1];
  var btcAmount$1 = match$2[0];
  if (inputAmount$1.gt(BTC.zero) && inputDestination !== "") {
    var max = Curry._3(viewData[/* max */6], inputDestination, destinations, fee);
    var match$3 = inputAmount$1.gt(max);
    var match$4 = match$3 ? /* tuple */[
        max,
        BTC.format(max)
      ] : /* tuple */[
        inputAmount$1,
        btcAmount$1
      ];
    var inputAmount$2 = match$4[0];
    var summary = Curry._2(viewData[/* summary */7], /* :: */[
          /* tuple */[
            inputDestination,
            inputAmount$2
          ],
          destinations
        ], fee);
    return /* record */[
            /* viewData */viewData,
            /* destinations */state[/* destinations */1],
            /* inputDestination */inputDestination,
            /* inputAmount */inputAmount$2,
            /* addressValid */addressValid,
            /* canSubmitProposal */summary[/* spentWithFees */2].gt(summary[/* networkFee */4]),
            /* frozen */state[/* frozen */6],
            /* fee */state[/* fee */7],
            /* summary */summary,
            /* inputs : record */[
              /* recipientAddress */recipientAddress$1,
              /* btcAmount */match$4[1]
            ]
          ];
  } else {
    var summary$1 = Curry._2(viewData[/* summary */7], destinations, fee);
    return /* record */[
            /* viewData */viewData,
            /* destinations */state[/* destinations */1],
            /* inputDestination */inputDestination,
            /* inputAmount */inputAmount$1,
            /* addressValid */addressValid,
            /* canSubmitProposal */summary$1[/* spentWithFees */2].gt(summary$1[/* networkFee */4]),
            /* frozen */state[/* frozen */6],
            /* fee */state[/* fee */7],
            /* summary */summary$1,
            /* inputs : record */[
              /* recipientAddress */recipientAddress$1,
              /* btcAmount */btcAmount$1
            ]
          ];
  }
}

function make(viewData, commands, cmdStatus, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              var state = param[/* state */1];
              return /* record */[
                      /* viewData */viewData,
                      /* destinations */state[/* destinations */1],
                      /* inputDestination */state[/* inputDestination */2],
                      /* inputAmount */state[/* inputAmount */3],
                      /* addressValid */state[/* addressValid */4],
                      /* canSubmitProposal */state[/* canSubmitProposal */5],
                      /* frozen */state[/* frozen */6],
                      /* fee */state[/* fee */7],
                      /* summary */state[/* summary */8],
                      /* inputs */state[/* inputs */9]
                    ];
            }),
          /* didMount */(function (param) {
              var send = param[/* send */3];
              BitcoinFeesClient.fetchFees(/* () */0).then((function (fees) {
                      return Promise.resolve(Curry._1(send, /* SetFee */Block.__(3, [fees[/* hourFee */2]])));
                    }));
              return /* () */0;
            }),
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var match = param[/* state */1];
              var inputs = match[/* inputs */9];
              var summary = match[/* summary */8];
              var viewData = match[/* viewData */0];
              var destinationRow = function ($staropt$star, idx, address, amount) {
                var withRemoveBtn = $staropt$star ? $staropt$star[0] : true;
                var match = address !== "" && amount.gt(BTC.zero);
                if (match) {
                  return ReasonReact.element(/* Some */[String(idx)], /* None */0, MaterialUi_TableRow.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                  ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableCell.make(/* Some */[spaceBetween(/* center */98248149) + (" " + (noBorder + (" " + cellHeight)))], /* None */0, /* None */0, /* Some */[/* None */870530776], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                            ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(address)])),
                                            withRemoveBtn ? ReasonReact.element(/* None */0, /* None */0, MaterialUi_IconButton.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[(function () {
                                                            return Curry._1(send, /* RemoveDestination */Block.__(2, [idx - 1 | 0]));
                                                          })], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[Icons.remove])) : null
                                          ])),
                                  ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableCell.make(/* Some */[noBorder], /* None */0, /* Some */[true], /* Some */[/* None */870530776], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(BTC.format(amount) + " BTC")]))]))
                                ]));
                } else {
                  return null;
                }
              };
              var destinationList = $$Array.of_list(/* :: */[
                    destinationRow(/* Some */[false], 0, match[/* inputDestination */2], match[/* inputAmount */3]),
                    List.mapi((function (idx, param) {
                            return destinationRow(/* None */0, idx + 1 | 0, param[0], param[1]);
                          }), match[/* destinations */1])
                  ]);
              var tmp;
              if (viewData[/* allowCreation */0] === false) {
                tmp = React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(viewData[/* ventureName */3])])), ReasonReact.element(/* None */0, /* None */0, Balance.make(viewData[/* balance */1][/* currentSpendable */0], /* Some */[viewData[/* balance */1][/* reserved */1]], /* array */[])));
              } else {
                var error = match[/* addressValid */4] ? /* None */0 : /* Some */["Address is BAD"];
                tmp = React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(viewData[/* ventureName */3])])), ReasonReact.element(/* None */0, /* None */0, Balance.make(viewData[/* balance */1][/* currentSpendable */0], /* Some */[viewData[/* balance */1][/* reserved */1]], /* array */[])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Enter Recipient Details")])), ReasonReact.element(/* None */0, /* None */0, MInput.make(/* Some */["Recipient Address"], /* Some */[/* `String */[
                                -976970511,
                                inputs[/* recipientAddress */0]
                              ]], /* Some */[(function (e) {
                                  return Curry._1(send, /* ChangeRecipientAddress */Block.__(0, [ViewCommon.extractString(e)]));
                                })], /* Some */[false], /* Some */[true], /* None */0, error, /* None */0, /* None */0, /* None */0, /* array */[])), ReasonReact.element(/* None */0, /* None */0, MInput.make(/* Some */["BTC amount"], /* Some */[/* `String */[
                                -976970511,
                                inputs[/* btcAmount */1]
                              ]], /* Some */[(function (e) {
                                  return Curry._1(send, /* ChangeBTCAmount */Block.__(1, [ViewCommon.extractString(e)]));
                                })], /* Some */[false], /* Some */[true], /* Some */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_InputAdornment.make(/* None */0, /* None */0, /* None */0, /* Some */[/* End */3455931], /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                                      return Curry._1(send, /* EnterMax */0);
                                                    })], /* Some */[/* Small */311976103], /* None */0, /* Some */[/* Flat */0], /* Some */[maxButton], /* Some */[false], /* None */0, /* None */0, /* array */[ViewCommon.text("Max")]))]))], /* None */0, /* None */0, /* None */0, /* Some */[true], /* array */[])), ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                  return Curry._1(send, /* AddToSummary */1);
                                })], /* Some */[/* Small */311976103], /* Some */[true], /* Some */[/* Flat */0], /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Add Another Recipient")])));
              }
              return ReasonReact.element(/* None */0, /* None */0, Grid.make(/* Some */[ViewCommon.text("Propose A Payout")], /* None */0, /* None */0, /* None */0, /* Some */[tmp], /* Some */[viewData[/* allowCreation */0] === false ? React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("You cannot create a Payout without an unreserved balance.")]))) : React.createElement("div", {
                                      className: ScrollList.containerStyles
                                    }, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("Summary")])), ReasonReact.element(/* None */0, /* None */0, ScrollList.make(/* array */[
                                              ReasonReact.element(/* None */0, /* None */0, MaterialUi_Table.make(/* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableBody.make(/* None */0, /* None */0, /* array */[
                                                                  destinationList,
                                                                  ReasonReact.element(/* Some */["networkFee"], /* None */0, MaterialUi_TableRow.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableCell.make(/* Some */[noBorder], /* None */0, /* None */0, /* Some */[/* None */870530776], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("NETWORK FEE")]))])),
                                                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableCell.make(/* Some */[maxWidth + (" " + noBorder)], /* None */0, /* Some */[true], /* Some */[/* None */870530776], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(BTC.format(summary[/* networkFee */4]) + " BTC")]))]))
                                                                          ])),
                                                                  ReasonReact.element(/* Some */["misthosFee"], /* None */0, MaterialUi_TableRow.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[
                                                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableCell.make(/* Some */[noBorder], /* None */0, /* None */0, /* Some */[/* None */870530776], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text("MISTHOS FEE")]))])),
                                                                            ReasonReact.element(/* None */0, /* None */0, MaterialUi_TableCell.make(/* Some */[noBorder], /* None */0, /* Some */[true], /* Some */[/* None */870530776], /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(BTC.format(summary[/* misthosFee */3]) + " BTC")]))]))
                                                                          ]))
                                                                ]))])),
                                              React.createElement("div", {
                                                    className: spaceBetween(/* baseline */287825029) + (" " + total)
                                                  }, ReasonReact.element(/* None */0, /* None */0, MaterialUi_Typography.make(/* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* None */0, /* Some */[/* Body2 */-904051920], /* None */0, /* None */0, /* array */[ViewCommon.text("TOTAL PAYOUT")])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Subheading */148169314, /* None */0, /* None */0, /* None */0, /* None */0, /* array */[ViewCommon.text(BTC.format(summary[/* spentWithFees */2]) + " BTC")])))
                                            ])), ReasonReact.element(/* None */0, /* None */0, ProposeButton.make("Propose Payout", (function () {
                                                return Curry._1(send, /* ProposePayout */2);
                                              }), /* Some */[(function () {
                                                  return Curry._1(send, /* Freeze */3);
                                                })], /* Some */[(function () {
                                                  return Curry._1(send, /* Reset */4);
                                                })], match[/* canSubmitProposal */5], /* None */0, cmdStatus, /* array */[])))], /* array */[]));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* viewData */viewData,
                      /* destinations : [] */0,
                      /* inputDestination */"",
                      /* inputAmount */BTC.zero,
                      /* addressValid */true,
                      /* canSubmitProposal */false,
                      /* frozen */false,
                      /* fee */BTC.zero,
                      /* summary */viewData[/* initialSummary */4],
                      /* inputs : record */[
                        /* recipientAddress */"",
                        /* btcAmount */""
                      ]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              var viewData = state[/* viewData */0];
              var match = state[/* frozen */6];
              var match$1 = viewData[/* balance */1][/* currentSpendable */0].gt(state[/* summary */8][/* spentWithFees */2]) || state[/* inputAmount */3].gt(BTC.zero);
              var exit = 0;
              var canInput;
              if (typeof cmdStatus === "number") {
                if (match) {
                  exit = 1;
                } else {
                  canInput = match$1;
                  exit = 2;
                }
              } else {
                switch (cmdStatus.tag | 0) {
                  case 0 : 
                      exit = 1;
                      break;
                  case 1 : 
                  case 2 : 
                      canInput = match$1;
                      exit = 2;
                      break;
                  
                }
              }
              switch (exit) {
                case 1 : 
                    if (typeof action === "number") {
                      switch (action) {
                        case 0 : 
                        case 1 : 
                            return /* NoUpdate */0;
                        case 2 : 
                            var destinations = state[/* inputDestination */2] !== "" && state[/* inputAmount */3].gt(BTC.zero) ? /* :: */[
                                /* tuple */[
                                  state[/* inputDestination */2],
                                  state[/* inputAmount */3]
                                ],
                                state[/* destinations */1]
                              ] : state[/* destinations */1];
                            Curry._3(commands[/* proposePayout */7], WalletTypes.AccountIndex[/* default */9], destinations, state[/* fee */7]);
                            return /* NoUpdate */0;
                        case 3 : 
                            return /* Update */Block.__(0, [/* record */[
                                        /* viewData */state[/* viewData */0],
                                        /* destinations */state[/* destinations */1],
                                        /* inputDestination */state[/* inputDestination */2],
                                        /* inputAmount */state[/* inputAmount */3],
                                        /* addressValid */state[/* addressValid */4],
                                        /* canSubmitProposal */state[/* canSubmitProposal */5],
                                        /* frozen */true,
                                        /* fee */state[/* fee */7],
                                        /* summary */state[/* summary */8],
                                        /* inputs */state[/* inputs */9]
                                      ]]);
                        case 4 : 
                            return /* UpdateWithSideEffects */Block.__(2, [
                                      /* record */[
                                        /* viewData */state[/* viewData */0],
                                        /* destinations */state[/* destinations */1],
                                        /* inputDestination */state[/* inputDestination */2],
                                        /* inputAmount */state[/* inputAmount */3],
                                        /* addressValid */state[/* addressValid */4],
                                        /* canSubmitProposal */state[/* canSubmitProposal */5],
                                        /* frozen */false,
                                        /* fee */state[/* fee */7],
                                        /* summary */state[/* summary */8],
                                        /* inputs */state[/* inputs */9]
                                      ],
                                      (function () {
                                          return Curry._1(commands[/* reset */0], /* () */0);
                                        })
                                    ]);
                        
                      }
                    } else {
                      return /* NoUpdate */0;
                    }
                case 2 : 
                    if (typeof action === "number") {
                      switch (action) {
                        case 0 : 
                            if (canInput === true) {
                              var max = Curry._3(viewData[/* max */6], state[/* inputDestination */2], state[/* destinations */1], state[/* fee */7]);
                              return /* SideEffects */Block.__(1, [(function (param) {
                                            return Curry._1(param[/* send */3], /* ChangeBTCAmount */Block.__(1, [BTC.format(max)]));
                                          })]);
                            } else {
                              return /* NoUpdate */0;
                            }
                        case 1 : 
                            if (canInput === true && state[/* inputDestination */2] !== "" && state[/* inputAmount */3].gt(BTC.zero)) {
                              return /* Update */Block.__(0, [/* record */[
                                          /* viewData */state[/* viewData */0],
                                          /* destinations : :: */[
                                            /* tuple */[
                                              state[/* inputDestination */2],
                                              state[/* inputAmount */3]
                                            ],
                                            state[/* destinations */1]
                                          ],
                                          /* inputDestination */"",
                                          /* inputAmount */BTC.zero,
                                          /* addressValid */state[/* addressValid */4],
                                          /* canSubmitProposal */state[/* canSubmitProposal */5],
                                          /* frozen */state[/* frozen */6],
                                          /* fee */state[/* fee */7],
                                          /* summary */state[/* summary */8],
                                          /* inputs : record */[
                                            /* recipientAddress */"",
                                            /* btcAmount */""
                                          ]
                                        ]]);
                            } else {
                              return /* NoUpdate */0;
                            }
                        case 2 : 
                            return /* NoUpdate */0;
                        case 3 : 
                            return /* Update */Block.__(0, [/* record */[
                                        /* viewData */state[/* viewData */0],
                                        /* destinations */state[/* destinations */1],
                                        /* inputDestination */state[/* inputDestination */2],
                                        /* inputAmount */state[/* inputAmount */3],
                                        /* addressValid */state[/* addressValid */4],
                                        /* canSubmitProposal */state[/* canSubmitProposal */5],
                                        /* frozen */true,
                                        /* fee */state[/* fee */7],
                                        /* summary */state[/* summary */8],
                                        /* inputs */state[/* inputs */9]
                                      ]]);
                        case 4 : 
                            return /* UpdateWithSideEffects */Block.__(2, [
                                      /* record */[
                                        /* viewData */state[/* viewData */0],
                                        /* destinations */state[/* destinations */1],
                                        /* inputDestination */state[/* inputDestination */2],
                                        /* inputAmount */state[/* inputAmount */3],
                                        /* addressValid */state[/* addressValid */4],
                                        /* canSubmitProposal */state[/* canSubmitProposal */5],
                                        /* frozen */false,
                                        /* fee */state[/* fee */7],
                                        /* summary */state[/* summary */8],
                                        /* inputs */state[/* inputs */9]
                                      ],
                                      (function () {
                                          return Curry._1(commands[/* reset */0], /* () */0);
                                        })
                                    ]);
                        
                      }
                    } else {
                      switch (action.tag | 0) {
                        case 0 : 
                            if (canInput === true) {
                              var init = state[/* inputs */9];
                              return /* Update */Block.__(0, [updateState(/* record */[
                                              /* viewData */state[/* viewData */0],
                                              /* destinations */state[/* destinations */1],
                                              /* inputDestination */state[/* inputDestination */2],
                                              /* inputAmount */state[/* inputAmount */3],
                                              /* addressValid */state[/* addressValid */4],
                                              /* canSubmitProposal */state[/* canSubmitProposal */5],
                                              /* frozen */state[/* frozen */6],
                                              /* fee */state[/* fee */7],
                                              /* summary */state[/* summary */8],
                                              /* inputs : record */[
                                                /* recipientAddress */action[0],
                                                /* btcAmount */init[/* btcAmount */1]
                                              ]
                                            ])]);
                            } else {
                              return /* NoUpdate */0;
                            }
                        case 1 : 
                            if (canInput === true) {
                              var init$1 = state[/* inputs */9];
                              return /* Update */Block.__(0, [updateState(/* record */[
                                              /* viewData */state[/* viewData */0],
                                              /* destinations */state[/* destinations */1],
                                              /* inputDestination */state[/* inputDestination */2],
                                              /* inputAmount */state[/* inputAmount */3],
                                              /* addressValid */state[/* addressValid */4],
                                              /* canSubmitProposal */state[/* canSubmitProposal */5],
                                              /* frozen */state[/* frozen */6],
                                              /* fee */state[/* fee */7],
                                              /* summary */state[/* summary */8],
                                              /* inputs : record */[
                                                /* recipientAddress */init$1[/* recipientAddress */0],
                                                /* btcAmount */action[0]
                                              ]
                                            ])]);
                            } else {
                              return /* NoUpdate */0;
                            }
                        case 2 : 
                            var removeIdx = action[0];
                            return /* Update */Block.__(0, [updateState(/* record */[
                                            /* viewData */state[/* viewData */0],
                                            /* destinations */Belt_List.keepMapU(Belt_List.mapWithIndexU(state[/* destinations */1], (function (idx, destination) {
                                                        var match = idx === removeIdx;
                                                        if (match) {
                                                          return /* None */0;
                                                        } else {
                                                          return /* Some */[destination];
                                                        }
                                                      })), (function (d) {
                                                    return d;
                                                  })),
                                            /* inputDestination */state[/* inputDestination */2],
                                            /* inputAmount */state[/* inputAmount */3],
                                            /* addressValid */state[/* addressValid */4],
                                            /* canSubmitProposal */state[/* canSubmitProposal */5],
                                            /* frozen */state[/* frozen */6],
                                            /* fee */state[/* fee */7],
                                            /* summary */state[/* summary */8],
                                            /* inputs */state[/* inputs */9]
                                          ])]);
                        case 3 : 
                            return /* Update */Block.__(0, [/* record */[
                                        /* viewData */state[/* viewData */0],
                                        /* destinations */state[/* destinations */1],
                                        /* inputDestination */state[/* inputDestination */2],
                                        /* inputAmount */state[/* inputAmount */3],
                                        /* addressValid */state[/* addressValid */4],
                                        /* canSubmitProposal */state[/* canSubmitProposal */5],
                                        /* frozen */state[/* frozen */6],
                                        /* fee */action[0],
                                        /* summary */state[/* summary */8],
                                        /* inputs */state[/* inputs */9]
                                      ]]);
                        
                      }
                    }
                
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var View = 0;

exports.text = text;
exports.extractString = extractString;
exports.View = View;
exports.component = component;
exports.Styles = Styles;
exports.updateState = updateState;
exports.make = make;
/* component Not a pure module */
