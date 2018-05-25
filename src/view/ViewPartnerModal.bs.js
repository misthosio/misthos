// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Body2 = require("./components/Body2.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Voters = require("./components/Voters.bs.js");
var Partner = require("./components/Partner.bs.js");
var StatusChip = require("./components/StatusChip.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var ProcessApprovalButtons = require("./components/ProcessApprovalButtons.bs.js");

var component = ReasonReact.statelessComponent("ViewPartner");

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
              var match = viewData[/* data */5];
              var processType = match[/* processType */1];
              var userId = match[/* userId */0];
              var processId = viewData[/* processId */0];
              var match$1 = processType ? /* tuple */[
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
              var processTypeString = processType ? "Addition" : "Removal";
              var match$2;
              switch (viewData[/* status */1]) {
                case 0 : 
                    match$2 = /* tuple */[
                      "Pending Approval",
                      /* Pending */0
                    ];
                    break;
                case 1 : 
                    match$2 = /* tuple */[
                      "Accepted",
                      /* Success */2
                    ];
                    break;
                case 2 : 
                    match$2 = /* tuple */[
                      "Denied",
                      /* Failure */1
                    ];
                    break;
                case 3 : 
                    match$2 = /* tuple */[
                      "Aborted",
                      /* Failure */1
                    ];
                    break;
                
              }
              var statusChip = ReasonReact.element(/* None */0, /* None */0, StatusChip.make(match$2[1], match$2[0], /* array */[]));
              return ReasonReact.element(/* None */0, /* None */0, Body2.make(/* Some */[/* :: */[
                                "Proposed Partner " + processTypeString,
                                /* [] */0
                              ]], React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* array */[ViewCommon.text("Proposed partner addition")])), ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](userId)], /* None */0, Partner.make(userId, /* None */0, /* None */0, /* array */[])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[ViewCommon.text("Proposed by " + PrimitiveTypes.UserId[/* toString */0](viewData[/* proposedBy */2]))])), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Body2 */-904051920, /* None */0, /* array */[
                                          ViewCommon.text("Status: "),
                                          statusChip
                                        ]))), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Voters.make(viewData[/* voters */4], /* array */[])), ReasonReact.element(/* None */0, /* None */0, ProcessApprovalButtons.make("Endorse Partner " + processTypeString, "Reject Partner " + processTypeString, viewData[/* canVote */3], match$1[0], match$1[1], cmdStatus, /* array */[]))), /* array */[]));
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
exports.make = make;
/* component Not a pure module */
