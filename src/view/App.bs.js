// Generated by BUCKLESCRIPT VERSION 3.1.4, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Drawer = require("./Drawer.bs.js");
var Layout = require("./Layout.bs.js");
var Router = require("./Router.bs.js");
var Receive = require("./Receive.bs.js");
var Spinner = require("./components/Spinner.bs.js");
var ViewModel = require("./model/ViewModel.bs.js");
var PublicHome = require("./PublicHome.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var BlankScreen = require("./BlankScreen.bs.js");
var JoinVenture = require("./JoinVenture.bs.js");
var LoadVenture = require("./LoadVenture.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var LoggedInHome = require("./LoggedInHome.bs.js");
var VentureStore = require("./VentureStore.bs.js");
var NotFoundModal = require("./NotFoundModal.bs.js");
var VentureCreate = require("./VentureCreate.bs.js");
var CommandExecutor = require("./components/CommandExecutor.bs.js");
var SelectedVenture = require("./SelectedVenture.bs.js");
var TypographyStack = require("./TypographyStack.bs.js");
var ViewPayoutModal = require("./ViewPayoutModal.bs.js");
var ViewPartnerModal = require("./ViewPartnerModal.bs.js");
var CreatePayoutModal = require("./CreatePayoutModal.bs.js");
var ManagePartnersModal = require("./ManagePartnersModal.bs.js");

var component = ReasonReact.statelessComponent("App");

function make(session, updateSession, _) {
  var onSignIn = function () {
    return Curry._1(updateSession, /* SignIn */0);
  };
  var onSignOut = function () {
    return Curry._1(updateSession, /* SignOut */1);
  };
  var onCloseModal = function (ventureId, _) {
    return ReasonReact.Router[/* push */0](Router.Config[/* routeToUrl */1](/* Venture */Block.__(0, [
                      ventureId,
                      /* None */0
                    ])));
  };
  var modal = function (selectedVenture, currentRoute) {
    if (typeof session === "number" || typeof currentRoute === "number" || currentRoute.tag) {
      return /* None */0;
    } else {
      var match = currentRoute[1];
      var selected = currentRoute[0];
      if (typeof match === "number") {
        switch (match) {
          case 0 : 
              return /* None */0;
          case 1 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                var venture = selectedVenture[1];
                var match$1 = ViewModel.readOnly(venture);
                if (match$1) {
                  return /* None */0;
                } else {
                  return /* Some */[/* tuple */[
<<<<<<< HEAD
                            ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture), /* None */0, (function (commands, cmdStatus) {
                                        return ReasonReact.element(/* None */0, /* None */0, ManagePartnersModal.make(ViewModel.managePartnersModal(venture), commands, cmdStatus, /* array */[]));
=======
                            ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(commands, ViewModel.lastResponse(venture), /* None */0, (function (proposePartnerCmds, proposeCmdStatus) {
                                        return ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(commands, ViewModel.lastResponse(venture), /* None */0, (function (removePartnerCmds, removeCmdStatus) {
                                                          return ReasonReact.element(/* None */0, /* None */0, ManagePartnersModal.make(ViewModel.managePartnersModal(venture), proposePartnerCmds, proposeCmdStatus, removePartnerCmds, removeCmdStatus, /* array */[]));
                                                        })));
>>>>>>> Add reset to CommandExecutor
                                      }))),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                }
              }
          case 2 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                var venture$1 = selectedVenture[1];
                var ventureId = selectedVenture[0];
                var match$2 = ViewModel.readOnly(venture$1);
                if (match$2) {
                  return /* None */0;
                } else {
                  return /* Some */[/* tuple */[
                            ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$1), /* Some */[(function (processId) {
                                          return Router.goTo(/* Venture */Block.__(0, [
                                                        ventureId,
                                                        /* Payout */Block.__(1, [processId])
                                                      ]));
                                        })], (function (commands, cmdStatus) {
                                        return ReasonReact.element(/* None */0, /* None */0, CreatePayoutModal.make(ViewModel.createPayoutModal(venture$1), commands, cmdStatus, /* array */[]));
                                      }))),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                }
              }
          case 3 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                var match$3 = ViewModel.readOnly(selectedVenture[1]);
                if (match$3) {
                  return /* None */0;
                } else {
                  return /* Some */[/* tuple */[
                            ReasonReact.element(/* None */0, /* None */0, Receive.make(selectedVenture[2], /* array */[])),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                }
              }
          
        }
      } else if (match.tag) {
        if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
          return /* None */0;
        } else {
          var venture$2 = selectedVenture[1];
          var match$4 = ViewModel.readOnly(venture$2);
          if (match$4) {
            return /* None */0;
          } else {
            var match$5 = ViewModel.viewPayoutModal(match[0], venture$2);
            var tmp;
            if (match$5) {
              var viewData = match$5[0];
              tmp = ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$2), /* None */0, (function (commands, cmdStatus) {
                          return ReasonReact.element(/* None */0, /* None */0, ViewPayoutModal.make(viewData, commands, cmdStatus, /* array */[]));
                        })));
            } else {
              tmp = ReasonReact.element(/* None */0, /* None */0, NotFoundModal.make(/* Payout */0, /* array */[]));
            }
            return /* Some */[/* tuple */[
                      tmp,
                      (function (param) {
                          return onCloseModal(selected, param);
                        })
                    ]];
          }
        }
      } else if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
        return /* None */0;
      } else {
        var venture$3 = selectedVenture[1];
        var match$6 = ViewModel.readOnly(venture$3);
        if (match$6) {
          return /* None */0;
        } else {
          var match$7 = ViewModel.viewPartnerModal(match[0], venture$3);
          var tmp$1;
          if (match$7) {
            var viewData$1 = match$7[0];
            tmp$1 = ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$3), /* None */0, (function (commands, cmdStatus) {
                        return ReasonReact.element(/* None */0, /* None */0, ViewPartnerModal.make(viewData$1, commands, cmdStatus, /* array */[]));
                      })));
          } else {
            tmp$1 = ReasonReact.element(/* None */0, /* None */0, NotFoundModal.make(/* Partner */1, /* array */[]));
          }
          return /* Some */[/* tuple */[
                    tmp$1,
                    (function (param) {
                        return onCloseModal(selected, param);
                      })
                  ]];
        }
      }
    }
  };
  var drawer = function (index, currentRoute) {
    var exit = 0;
    if (typeof currentRoute === "number" && currentRoute >= 2) {
      return /* None */0;
    } else {
      exit = 1;
    }
    if (exit === 1) {
      if (typeof session === "number") {
        return /* None */0;
      } else if (typeof currentRoute === "number") {
        return /* Some */[ReasonReact.element(/* None */0, /* None */0, Drawer.make(onSignOut, index, /* None */0, /* array */[]))];
      } else {
        return /* Some */[ReasonReact.element(/* None */0, /* None */0, Drawer.make(onSignOut, index, /* Some */[currentRoute[0]], /* array */[]))];
      }
    }
    
  };
  var body = function (index, selectedVenture, createVenture, currentRoute) {
    var exit = 0;
    var exit$1 = 0;
    var exit$2 = 0;
    if (typeof session === "number") {
      if (session !== 2) {
        exit$2 = 3;
      } else {
        return ReasonReact.element(/* None */0, /* None */0, PublicHome.make(onSignIn, /* array */[]));
      }
    } else {
      var exit$3 = 0;
      if (typeof currentRoute === "number") {
        switch (currentRoute) {
          case 0 : 
              exit$3 = 4;
              break;
          case 1 : 
              exit = 1;
              break;
          case 2 : 
              exit$2 = 3;
              break;
          
        }
      } else {
        exit$3 = 4;
      }
      if (exit$3 === 4) {
        if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
          exit$1 = 2;
        } else {
          return ReasonReact.element(/* None */0, /* None */0, SelectedVenture.make(ViewModel.selectedVenture(selectedVenture[1]), /* array */[]));
        }
      }
      
    }
    if (exit$2 === 3) {
      if (typeof currentRoute === "number" && currentRoute >= 2) {
        return ReasonReact.element(/* None */0, /* None */0, TypographyStack.make(/* array */[]));
      } else {
        exit$1 = 2;
      }
    }
    if (exit$1 === 2) {
      if (typeof session === "number") {
        if (session !== 1) {
          if (session >= 3) {
            return ReasonReact.element(/* None */0, /* None */0, Spinner.make("\n             You have signed in with a blockstack user that doesn\'t have a registered blockstack.id,\n             make sure to upgrade the BlockStack client, close all Misthos tabs and try again with a registered id.\n             ", /* None */0, /* array */[]));
          } else {
            return ReasonReact.element(/* None */0, /* None */0, BlankScreen.make("Loading", /* array */[]));
          }
        } else {
          return ReasonReact.element(/* None */0, /* None */0, BlankScreen.make("Waiting for BlockStack session", /* array */[]));
        }
      } else if (typeof selectedVenture === "number") {
        return ReasonReact.element(/* None */0, /* None */0, LoggedInHome.make(index, /* array */[]));
      } else {
        switch (selectedVenture.tag | 0) {
          case 0 : 
              exit = 1;
              break;
          case 1 : 
              return ReasonReact.element(/* None */0, /* None */0, JoinVenture.make(selectedVenture[1], /* array */[]));
          case 2 : 
              return ReasonReact.element(/* None */0, /* None */0, LoadVenture.make(selectedVenture[1], /* array */[]));
          
        }
      }
    }
    if (exit === 1) {
      var cmdStatus;
      cmdStatus = typeof selectedVenture === "number" || selectedVenture.tag ? /* Idle */0 : selectedVenture[0];
      return ReasonReact.element(/* None */0, /* None */0, VentureCreate.make(createVenture, cmdStatus, /* array */[]));
    }
    
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
              return ReasonReact.element(/* None */0, /* None */0, Curry._1(Router.Container[/* make */1], (function (currentRoute) {
                                return ReasonReact.element(/* None */0, /* None */0, VentureStore.make(currentRoute, session, (function (index, selectedVenture, createVenture) {
                                                  return ReasonReact.element(/* None */0, /* None */0, Layout.make(drawer(index, currentRoute), modal(selectedVenture, currentRoute), body(index, selectedVenture, createVenture, currentRoute)));
                                                })));
                              })));
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

exports.text = text;
exports.extractString = extractString;
exports.component = component;
exports.make = make;
/* component Not a pure module */
