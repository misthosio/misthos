// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Drawer = require("./Drawer.bs.js");
var Footer = require("./Footer.bs.js");
var Layout = require("./Layout.bs.js");
var Router = require("./Router.bs.js");
var Receive = require("./Receive.bs.js");
var TACText = require("./text/TACText.bs.js");
var LogOutput = require("./LogOutput.bs.js");
var ViewModel = require("./model/ViewModel.bs.js");
var PublicHome = require("./PublicHome.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var BlankScreen = require("./BlankScreen.bs.js");
var JoinVenture = require("./JoinVenture.bs.js");
var LoadVenture = require("./LoadVenture.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var LoggedInHome = require("./LoggedInHome.bs.js");
var VentureStore = require("./VentureStore.bs.js");
var NamelessLogin = require("./NamelessLogin.bs.js");
var NotFoundModal = require("./NotFoundModal.bs.js");
var VentureCreate = require("./VentureCreate.bs.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var CommandExecutor = require("./components/CommandExecutor.bs.js");
var SelectedVenture = require("./SelectedVenture.bs.js");
var TypographyStack = require("./TypographyStack.bs.js");
var ViewIncomeModal = require("./ViewIncomeModal.bs.js");
var ViewPayoutModal = require("./ViewPayoutModal.bs.js");
var ViewPartnerModal = require("./ViewPartnerModal.bs.js");
var CreatePayoutModal = require("./CreatePayoutModal.bs.js");
var ViewAddressesModal = require("./ViewAddressesModal.bs.js");
var ManagePartnersModal = require("./ManagePartnersModal.bs.js");
var TermsAndConditionsModal = require("./TermsAndConditionsModal.bs.js");

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
  var mobileEnabled = typeof session === "number" ? session === 2 : false;
  var modal = function (selectedVenture, currentRoute) {
    if (typeof session === "number") {
      return /* None */0;
    } else if (Belt_MapString.has(session[1][/* termsAndConditions */1], TACText.hash) === false) {
      return /* Some */[/* tuple */[
                ReasonReact.element(/* None */0, /* None */0, TermsAndConditionsModal.make(/* array */[])),
                (function () {
                    return /* () */0;
                  })
              ]];
    } else if (typeof currentRoute === "number" || currentRoute.tag) {
      return /* None */0;
    } else {
      var match = currentRoute[1];
      var selected = currentRoute[0];
      if (typeof match === "number") {
        switch (match) {
          case 1 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                var commands = selectedVenture[2];
                var venture = selectedVenture[1];
                var match$1 = ViewModel.readOnly(venture);
                if (match$1) {
                  return /* None */0;
                } else {
                  return /* Some */[/* tuple */[
                            ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(commands, ViewModel.lastResponse(venture), /* None */0, (function (proposePartnerCmds, proposeCmdStatus) {
                                        return ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(commands, ViewModel.lastResponse(venture), /* None */0, (function (removePartnerCmds, removeCmdStatus) {
                                                          return ReasonReact.element(/* None */0, /* None */0, ManagePartnersModal.make(ViewModel.managePartnersModal(venture), proposePartnerCmds, proposeCmdStatus, removePartnerCmds, removeCmdStatus, /* array */[]));
                                                        })));
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
          case 0 : 
          case 3 : 
              return /* None */0;
          case 4 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                return /* Some */[/* tuple */[
                          ReasonReact.element(/* None */0, /* None */0, ViewAddressesModal.make(ViewModel.viewAddressesModal(selectedVenture[1]), /* array */[])),
                          (function (param) {
                              return onCloseModal(selected, param);
                            })
                        ]];
              }
          case 5 : 
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
      } else {
        switch (match.tag | 0) {
          case 0 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                var venture$2 = selectedVenture[1];
                var match$4 = ViewModel.readOnly(venture$2);
                if (match$4) {
                  return /* None */0;
                } else {
                  var match$5 = ViewModel.viewPartnerModal(match[0], venture$2);
                  var tmp;
                  if (match$5) {
                    var viewData = match$5[0];
                    tmp = ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$2), /* None */0, (function (commands, cmdStatus) {
                                return ReasonReact.element(/* None */0, /* None */0, ViewPartnerModal.make(viewData, commands, cmdStatus, /* array */[]));
                              })));
                  } else {
                    tmp = ReasonReact.element(/* None */0, /* None */0, NotFoundModal.make(/* Partner */2, /* array */[]));
                  }
                  return /* Some */[/* tuple */[
                            tmp,
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                }
              }
          case 1 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                return /* None */0;
              } else {
                var venture$3 = selectedVenture[1];
                var match$6 = ViewModel.readOnly(venture$3);
                if (match$6) {
                  return /* None */0;
                } else {
                  var match$7 = ViewModel.viewPayoutModal(match[0], venture$3);
                  var tmp$1;
                  if (match$7) {
                    var viewData$1 = match$7[0];
                    tmp$1 = ReasonReact.element(/* None */0, /* None */0, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$3), /* None */0, (function (commands, cmdStatus) {
                                return ReasonReact.element(/* None */0, /* None */0, ViewPayoutModal.make(viewData$1, commands, cmdStatus, /* array */[]));
                              })));
                  } else {
                    tmp$1 = ReasonReact.element(/* None */0, /* None */0, NotFoundModal.make(/* Payout */0, /* array */[]));
                  }
                  return /* Some */[/* tuple */[
                            tmp$1,
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
                var venture$4 = selectedVenture[1];
                var match$8 = ViewModel.readOnly(venture$4);
                if (match$8) {
                  return /* None */0;
                } else {
                  var match$9 = ViewModel.viewIncomeModal(match[0], venture$4);
                  return /* Some */[/* tuple */[
                            match$9 ? ReasonReact.element(/* None */0, /* None */0, ViewIncomeModal.make(match$9[0], /* array */[])) : ReasonReact.element(/* None */0, /* None */0, NotFoundModal.make(/* Income */1, /* array */[])),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                }
              }
          
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
        return React.createElement("div", undefined, ReasonReact.element(/* None */0, /* None */0, PublicHome.make(onSignIn, /* array */[])), ReasonReact.element(/* None */0, /* None */0, Footer.make(/* array */[])));
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
      } else if (currentRoute.tag) {
        exit$3 = 4;
      } else {
        var match = currentRoute[1];
        if (typeof match === "number" && !(match !== 3 || typeof selectedVenture === "number" || selectedVenture.tag !== 3)) {
          return ReasonReact.element(/* None */0, /* None */0, LogOutput.make(selectedVenture[0], /* array */[]));
        } else {
          exit$3 = 4;
        }
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
            return ReasonReact.element(/* None */0, /* None */0, NamelessLogin.make(/* array */[]));
          } else {
            return ReasonReact.element(/* None */0, /* None */0, BlankScreen.make("Loading", /* array */[]));
          }
        } else {
          return ReasonReact.element(/* None */0, /* None */0, BlankScreen.make("Waiting for Blockstack session", /* array */[]));
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
                                                  var drawer$1 = drawer(index, currentRoute);
                                                  var modal$1 = modal(selectedVenture, currentRoute);
                                                  return ReasonReact.element(/* None */0, /* None */0, Layout.make(/* None */0, drawer$1, modal$1, /* Some */[mobileEnabled], /* array */[body(index, selectedVenture, createVenture, currentRoute)]));
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
