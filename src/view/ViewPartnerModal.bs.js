// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Body2 = require("./components/Body2.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Partner = require("./components/Partner.bs.js");
var MaterialUi = require("@jsiebern/bs-material-ui/src/MaterialUi.bs.js");
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
              var match = viewData[/* data */4];
              var processType = match[/* processType */1];
              var userId = match[/* userId */0];
              var processId = viewData[/* processId */0];
              var match$1 = processType ? /* tuple */[
                  (function () {
                      return Curry._1(commands[/* endorsePartner */1], processId);
                    }),
                  (function () {
                      return Curry._1(commands[/* rejectPartner */2], processId);
                    })
                ] : /* tuple */[
                  (function () {
                      return Curry._1(commands[/* endorsePartnerRemoval */4], processId);
                    }),
                  (function () {
                      return Curry._1(commands[/* rejectPartnerRemoval */5], processId);
                    })
                ];
              var processTypeString = processType ? "Addition" : "Removal";
              var voteStatus = function (status) {
                var tmp;
                switch (status) {
                  case 0 : 
                      tmp = "Pending";
                      break;
                  case 1 : 
                      tmp = "Endorsed";
                      break;
                  case 2 : 
                      tmp = "Rejected";
                      break;
                  
                }
                return ViewCommon.text(tmp);
              };
              var voters = $$Array.of_list(List.map((function (param) {
                          return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, Partner.make(param[/* userId */0], /* None */0, /* None */0, /* array */[])), voteStatus(param[/* voteStatus */1]));
                        }), viewData[/* voters */3]));
              var tmp;
              switch (viewData[/* status */1]) {
                case 0 : 
                    tmp = "PendingApproval";
                    break;
                case 1 : 
                    tmp = "Accepted";
                    break;
                case 2 : 
                    tmp = "Rejected";
                    break;
                case 3 : 
                    tmp = "Aborted";
                    break;
                
              }
              return ReasonReact.element(/* None */0, /* None */0, Body2.make(/* Some */[/* :: */[
                                "Proposed Partner " + processTypeString,
                                /* [] */0
                              ]], React.createElement("div", undefined, ViewCommon.text("Status: " + tmp), ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* array */[ViewCommon.text("Proposed Partner " + processTypeString)])), ReasonReact.element(/* Some */[PrimitiveTypes.UserId[/* toString */0](userId)], /* None */0, Partner.make(userId, /* None */0, /* None */0, /* array */[]))), React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, MTypography.make(/* Title */594052472, /* None */0, /* array */[ViewCommon.text("Endorsement Status")])), ReasonReact.element(/* None */0, /* None */0, MaterialUi.List[/* make */1](/* None */0, /* None */0, /* None */0, /* Some */[true], /* None */0, /* None */0, /* array */[voters])), ReasonReact.element(/* None */0, /* None */0, ProcessApprovalButtons.make("Endorse Partner " + processTypeString, "Reject Partner " + processTypeString, viewData[/* canVote */2], match$1[0], match$1[1], cmdStatus, /* array */[]))), /* array */[]));
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
