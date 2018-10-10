// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Utils = require("../../utils/Utils.bs.js");
var Partner = require("./Partner.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var ScrollList = require("./ScrollList.bs.js");
var StatusChip = require("./StatusChip.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");
var MTypography = require("./MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");

var component = ReasonReact.statelessComponent("Voters");

function make(currentPartners, voters, processStatus, _) {
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
              var voters$1 = Belt_List.toArray(Belt_List.map(voters, (function (param) {
                          var status = param[/* voteStatus */1];
                          var userId = param[/* userId */0];
                          var match = Belt_Set.has(currentPartners, userId);
                          var match$1;
                          if (match) {
                            switch (status) {
                              case 0 : 
                                  match$1 = processStatus !== 0 ? /* tuple */[
                                      "Didn't Vote",
                                      /* Neutral */0,
                                      false
                                    ] : /* tuple */[
                                      "Pending",
                                      /* Pending */1,
                                      false
                                    ];
                                  break;
                              case 1 : 
                                  match$1 = /* tuple */[
                                    "Endorsed",
                                    /* Success */3,
                                    false
                                  ];
                                  break;
                              case 2 : 
                                  match$1 = /* tuple */[
                                    "Rejected",
                                    /* Failure */2,
                                    false
                                  ];
                                  break;
                              
                            }
                          } else {
                            match$1 = status !== 0 ? /* tuple */[
                                "Discounted",
                                /* Neutral */0,
                                true
                              ] : /* tuple */[
                                "Didn't Vote",
                                /* Neutral */0,
                                true
                              ];
                          }
                          var label = match$1[0];
                          return ReasonReact.element(undefined, undefined, Partner.make(userId, undefined, undefined, Js_primitive.some(Utils.mapOption((function (status) {
                                                    return ReasonReact.element(undefined, undefined, StatusChip.make(status, label, /* array */[]));
                                                  }), match$1[1])), undefined, match$1[2], /* array */[]));
                        })));
              return /* array */[
                      ReasonReact.element(undefined, undefined, MTypography.make(/* Title */594052472, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Endorsement Status")])),
                      ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[ReasonReact.element(undefined, undefined, MaterialUi_List.make(undefined, undefined, undefined, true, undefined, undefined, undefined, /* array */[voters$1]))]))
                    ];
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

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.component = component;
exports.make = make;
/* component Not a pure module */
