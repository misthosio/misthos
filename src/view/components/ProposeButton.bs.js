// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var MButton = require("./MButton.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ViewCommon = require("../ViewCommon.bs.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var CommandExecutor = require("./CommandExecutor.bs.js");

var component = ReasonReact.reducerComponent("ProcessApprovalButtons");

var gray = Css.style(/* :: */[
      Css.color(Css.rgba(0, 0, 0, 0.38)),
      /* [] */0
    ]);

var inlineConfirm = Css.style(/* :: */[
      Css.display(/* flex */-1010954439),
      /* :: */[
        Css.alignItems(/* baseline */287825029),
        /* [] */0
      ]
    ]);

var Styles = /* module */[
  /* gray */gray,
  /* inlineConfirm */inlineConfirm
];

function make(proposeText, onPropose, canSubmitProposal, $staropt$star, cmdStatus, _) {
  var withConfirmation = $staropt$star ? $staropt$star[0] : true;
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              return /* record */[
                      /* buttonState */param[/* state */1][/* buttonState */0],
                      /* cmdStatus */cmdStatus
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var match = param[/* state */1];
              var cmdStatus = match[/* cmdStatus */1];
              var tmp;
              var exit = 0;
              var exit$1 = 0;
              if (typeof cmdStatus === "number" || cmdStatus.tag !== 1) {
                exit$1 = 2;
              } else {
                exit = 1;
              }
              if (exit$1 === 2) {
                switch (match[/* buttonState */0]) {
                  case 0 : 
                      exit = 1;
                      break;
                  case 1 : 
                      tmp = /* array */[ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* Some */[inlineConfirm], /* array */[
                                  ViewCommon.text(proposeText),
                                  ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                                return Curry._1(send, /* ConfirmProposal */2);
                                              })], /* None */0, /* None */0, /* Some */[/* Flat */0], /* None */0, /* array */[ViewCommon.text("yes")])),
                                  ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                                return Curry._1(send, /* Cancel */0);
                                              })], /* None */0, /* None */0, /* Some */[/* Flat */0], /* None */0, /* array */[ViewCommon.text("No")]))
                                ]))];
                      break;
                  case 2 : 
                      tmp = /* array */[ReasonReact.element(/* None */0, /* None */0, CommandExecutor.Status[/* make */2](cmdStatus, /* Proposal */3, /* array */[]))];
                      break;
                  
                }
              }
              if (exit === 1) {
                tmp = /* array */[
                  ReasonReact.element(/* None */0, /* None */0, MButton.make(/* None */0, /* Some */[(function () {
                                return Curry._1(send, /* Propose */1);
                              })], /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[ViewCommon.text(proposeText)])),
                  ReasonReact.element(/* None */0, /* None */0, CommandExecutor.Status[/* make */2](cmdStatus, /* Proposal */3, /* array */[]))
                ];
              }
              return Belt_Array.concatMany(/* array */[tmp]);
            }),
          /* initialState */(function () {
              return /* record */[
                      /* buttonState : NoDecision */0,
                      /* cmdStatus : Idle */0
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (canSubmitProposal) {
                switch (action) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* buttonState : NoDecision */0,
                                  /* cmdStatus : Idle */0
                                ]]);
                  case 1 : 
                      if (withConfirmation) {
                        return /* Update */Block.__(0, [/* record */[
                                    /* buttonState : ConfirmProposal */1,
                                    /* cmdStatus */state[/* cmdStatus */1]
                                  ]]);
                      } else {
                        return /* SideEffects */Block.__(1, [(function (param) {
                                      return Curry._1(param[/* send */3], /* ConfirmProposal */2);
                                    })]);
                      }
                  case 2 : 
                      return /* UpdateWithSideEffects */Block.__(2, [
                                /* record */[
                                  /* buttonState : ProposalSubmited */2,
                                  /* cmdStatus */state[/* cmdStatus */1]
                                ],
                                (function () {
                                    return Curry._1(onPropose, /* () */0);
                                  })
                              ]);
                  
                }
              } else {
                return /* NoUpdate */0;
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.Styles = Styles;
exports.make = make;
/* component Not a pure module */
