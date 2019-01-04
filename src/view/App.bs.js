// Generated by BUCKLESCRIPT VERSION 4.0.14, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Drawer = require("./Drawer.bs.js");
var Footer = require("./Footer.bs.js");
var Layout = require("./Layout.bs.js");
var Router = require("./Router.bs.js");
var Receive = require("./Receive.bs.js");
var LogOutput = require("./LogOutput.bs.js");
var ViewModel = require("./model/ViewModel.bs.js");
var PublicHome = require("./PublicHome.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var BlankScreen = require("./BlankScreen.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var JoinVenture = require("./JoinVenture.bs.js");
var LoadVenture = require("./LoadVenture.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var LoggedInHome = require("./LoggedInHome.bs.js");
var VentureStore = require("./VentureStore.bs.js");
var NamelessLogin = require("./NamelessLogin.bs.js");
var NotFoundModal = require("./NotFoundModal.bs.js");
var VentureCreate = require("./VentureCreate.bs.js");
var CommandExecutor = require("./components/CommandExecutor.bs.js");
var SelectedVenture = require("./SelectedVenture.bs.js");
var TypographyStack = require("./TypographyStack.bs.js");
var ViewIncomeModal = require("./ViewIncomeModal.bs.js");
var ViewPayoutModal = require("./ViewPayoutModal.bs.js");
var ViewPartnerModal = require("./ViewPartnerModal.bs.js");
var CreatePayoutModal = require("./CreatePayoutModal.bs.js");
var ViewAddressesModal = require("./ViewAddressesModal.bs.js");
var ManagePartnersModal = require("./ManagePartnersModal.bs.js");
var VentureSettingsModal = require("./VentureSettingsModal.bs.js");
var TermsAndConditionsModal = require("./TermsAndConditionsModal.bs.js");

var component = ReasonReact.statelessComponent("App");

function make(session, updateSession, signTAC, _children) {
  var onSignIn = function (_e) {
    return Curry._1(updateSession, /* SignIn */0);
  };
  var onSignOut = function (_e) {
    return Curry._1(updateSession, /* SignOut */1);
  };
  var modal = function (selectedVenture, currentRoute) {
    if (typeof session === "number") {
      return undefined;
    } else if (session.tag) {
      if (typeof currentRoute === "number" || currentRoute.tag) {
        return undefined;
      } else {
        var match = currentRoute[1];
        var selected = currentRoute[0];
        if (typeof match === "number") {
          switch (match) {
            case 1 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var venture = selectedVenture[1];
                  var match$1 = ViewModel.readOnly(venture);
                  if (match$1) {
                    return undefined;
                  } else {
                    return /* tuple */[
                            ReasonReact.element(undefined, undefined, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture), undefined, (function (commands, cmdStatus) {
                                        return ReasonReact.element(undefined, undefined, VentureSettingsModal.make(ViewModel.ventureSettingsView(venture), commands, cmdStatus, /* array */[]));
                                      }))),
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            case 2 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var commands = selectedVenture[2];
                  var venture$1 = selectedVenture[1];
                  var ventureId = selectedVenture[0];
                  var match$2 = ViewModel.readOnly(venture$1);
                  if (match$2) {
                    return undefined;
                  } else {
                    return /* tuple */[
                            ReasonReact.element(undefined, undefined, CommandExecutor.make(commands, ViewModel.lastResponse(venture$1), (function (processId) {
                                        return Router.goTo(/* Venture */Block.__(0, [
                                                      ventureId,
                                                      /* Partner */Block.__(0, [processId])
                                                    ]));
                                      }), (function (proposePartnerCmds, proposeCmdStatus) {
                                        return ReasonReact.element(undefined, undefined, CommandExecutor.make(commands, ViewModel.lastResponse(venture$1), (function (processId) {
                                                          return Router.goTo(/* Venture */Block.__(0, [
                                                                        ventureId,
                                                                        /* Partner */Block.__(0, [processId])
                                                                      ]));
                                                        }), (function (removePartnerCmds, removeCmdStatus) {
                                                          return ReasonReact.element(undefined, undefined, ManagePartnersModal.make(ViewModel.managePartnersModal(venture$1), proposePartnerCmds, proposeCmdStatus, removePartnerCmds, removeCmdStatus, /* array */[]));
                                                        })));
                                      }))),
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            case 3 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var venture$2 = selectedVenture[1];
                  var ventureId$1 = selectedVenture[0];
                  var match$3 = ViewModel.readOnly(venture$2);
                  if (match$3) {
                    return undefined;
                  } else {
                    return /* tuple */[
                            ReasonReact.element(undefined, undefined, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$2), (function (processId) {
                                        return Router.goTo(/* Venture */Block.__(0, [
                                                      ventureId$1,
                                                      /* Payout */Block.__(1, [processId])
                                                    ]));
                                      }), (function (commands, cmdStatus) {
                                        return ReasonReact.element(undefined, undefined, CreatePayoutModal.make(ViewModel.createPayoutModal(venture$2), commands, cmdStatus, /* array */[]));
                                      }))),
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            case 0 : 
            case 4 : 
                return undefined;
            case 5 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  return /* tuple */[
                          ReasonReact.element(undefined, undefined, ViewAddressesModal.make(ViewModel.viewAddressesModal(selectedVenture[1]), /* array */[])),
                          (function (param) {
                              return Router.goTo(/* Venture */Block.__(0, [
                                            selected,
                                            /* None */0
                                          ]));
                            })
                        ];
                }
            case 6 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var match$4 = ViewModel.readOnly(selectedVenture[1]);
                  if (match$4) {
                    return undefined;
                  } else {
                    return /* tuple */[
                            ReasonReact.element(undefined, undefined, Receive.make(selectedVenture[2], /* array */[])),
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            
          }
        } else {
          switch (match.tag | 0) {
            case 0 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var venture$3 = selectedVenture[1];
                  var match$5 = ViewModel.readOnly(venture$3);
                  if (match$5) {
                    return undefined;
                  } else {
                    var match$6 = ViewModel.viewPartnerModal(match[0], venture$3);
                    var tmp;
                    if (match$6 !== undefined) {
                      var viewData = match$6;
                      tmp = ReasonReact.element(undefined, undefined, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$3), undefined, (function (commands, cmdStatus) {
                                  return ReasonReact.element(undefined, undefined, ViewPartnerModal.make(viewData, commands, cmdStatus, /* array */[]));
                                })));
                    } else {
                      tmp = ReasonReact.element(undefined, undefined, NotFoundModal.make(/* Partner */2, /* array */[]));
                    }
                    return /* tuple */[
                            tmp,
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            case 1 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var venture$4 = selectedVenture[1];
                  var match$7 = ViewModel.readOnly(venture$4);
                  if (match$7) {
                    return undefined;
                  } else {
                    var match$8 = ViewModel.viewPayoutModal(match[0], venture$4);
                    var tmp$1;
                    if (match$8 !== undefined) {
                      var viewData$1 = match$8;
                      tmp$1 = ReasonReact.element(undefined, undefined, CommandExecutor.make(selectedVenture[2], ViewModel.lastResponse(venture$4), undefined, (function (commands, cmdStatus) {
                                  return ReasonReact.element(undefined, undefined, ViewPayoutModal.make(viewData$1, commands, cmdStatus, /* array */[]));
                                })));
                    } else {
                      tmp$1 = ReasonReact.element(undefined, undefined, NotFoundModal.make(/* Payout */0, /* array */[]));
                    }
                    return /* tuple */[
                            tmp$1,
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            case 2 : 
                if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
                  return undefined;
                } else {
                  var venture$5 = selectedVenture[1];
                  var match$9 = ViewModel.readOnly(venture$5);
                  if (match$9) {
                    return undefined;
                  } else {
                    var match$10 = ViewModel.viewIncomeModal(match[0], venture$5);
                    return /* tuple */[
                            match$10 !== undefined ? ReasonReact.element(undefined, undefined, ViewIncomeModal.make(match$10, /* array */[])) : ReasonReact.element(undefined, undefined, NotFoundModal.make(/* Income */1, /* array */[])),
                            (function (param) {
                                return Router.goTo(/* Venture */Block.__(0, [
                                              selected,
                                              /* None */0
                                            ]));
                              })
                          ];
                  }
                }
            
          }
        }
      }
    } else {
      return /* tuple */[
              ReasonReact.element(undefined, undefined, TermsAndConditionsModal.make(signTAC, /* array */[])),
              undefined
            ];
    }
  };
  var drawer = function (index, currentRoute) {
    var exit = 0;
    if (typeof currentRoute === "number" && currentRoute >= 2) {
      return undefined;
    } else {
      exit = 1;
    }
    if (exit === 1) {
      if (typeof session === "number" || session.tag !== 1) {
        return undefined;
      } else if (typeof currentRoute === "number") {
        return Caml_option.some(ReasonReact.element(undefined, undefined, Drawer.make(onSignOut, index, undefined, /* array */[])));
      } else {
        return Caml_option.some(ReasonReact.element(undefined, undefined, Drawer.make(onSignOut, index, Caml_option.some(currentRoute[0]), /* array */[])));
      }
    }
    
  };
  var body = function (index, selectedVenture, createVenture, currentRoute) {
    var exit = 0;
    var exit$1 = 0;
    var exit$2 = 0;
    if (typeof session === "number") {
      if (session === 2) {
        return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, PublicHome.make(onSignIn, /* array */[])), ReasonReact.element(undefined, undefined, Footer.make(/* array */[])));
      } else {
        exit$2 = 3;
      }
    } else if (session.tag === 1) {
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
        if (typeof match === "number" && !(match !== 4 || typeof selectedVenture === "number" || selectedVenture.tag !== 3)) {
          return ReasonReact.element(undefined, undefined, LogOutput.make(selectedVenture[0], /* array */[]));
        } else {
          exit$3 = 4;
        }
      }
      if (exit$3 === 4) {
        if (typeof selectedVenture === "number" || selectedVenture.tag !== 3) {
          exit$1 = 2;
        } else {
          return ReasonReact.element(undefined, undefined, SelectedVenture.make(ViewModel.selectedVenture(selectedVenture[1]), /* array */[]));
        }
      }
      
    } else {
      exit$2 = 3;
    }
    if (exit$2 === 3) {
      if (typeof currentRoute === "number" && currentRoute >= 2) {
        return ReasonReact.element(undefined, undefined, TypographyStack.make(/* array */[]));
      } else {
        exit$1 = 2;
      }
    }
    if (exit$1 === 2) {
      if (typeof session === "number") {
        switch (session) {
          case 0 : 
              return ReasonReact.element(undefined, undefined, BlankScreen.make("Loading", /* array */[]));
          case 1 : 
              return ReasonReact.element(undefined, undefined, BlankScreen.make("Waiting for Blockstack session", /* array */[]));
          case 3 : 
              return ReasonReact.element(undefined, undefined, NamelessLogin.make(/* array */[]));
          
        }
      } else if (session.tag) {
        if (typeof selectedVenture === "number") {
          return ReasonReact.element(undefined, undefined, LoggedInHome.make(index, /* array */[]));
        } else {
          switch (selectedVenture.tag | 0) {
            case 0 : 
                exit = 1;
                break;
            case 1 : 
                return ReasonReact.element(undefined, undefined, JoinVenture.make(selectedVenture[1], /* array */[]));
            case 2 : 
                return ReasonReact.element(undefined, undefined, LoadVenture.make(selectedVenture[1], /* array */[]));
            
          }
        }
      } else {
        return ReasonReact.element(undefined, undefined, BlankScreen.make("Terms and Conditions", /* array */[]));
      }
    }
    if (exit === 1) {
      var cmdStatus;
      cmdStatus = typeof selectedVenture === "number" || selectedVenture.tag ? /* Idle */0 : selectedVenture[0];
      return ReasonReact.element(undefined, undefined, VentureCreate.make(createVenture, cmdStatus, /* array */[]));
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
          /* render */(function (_self) {
              return ReasonReact.element(undefined, undefined, Curry._1(Router.Container[/* make */1], (function (currentRoute) {
                                return ReasonReact.element(undefined, undefined, VentureStore.make(currentRoute, session, (function (index, selectedVenture, createVenture) {
                                                  var drawer$1 = drawer(index, currentRoute);
                                                  var modal$1 = modal(selectedVenture, currentRoute);
                                                  return ReasonReact.element(undefined, undefined, Layout.make(undefined, drawer$1, modal$1, /* array */[body(index, selectedVenture, createVenture, currentRoute)]));
                                                })));
                              })));
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
