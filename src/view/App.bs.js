// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
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
var PayoutModal = require("./PayoutModal.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var VentureStore = require("./VentureStore.bs.js");
var VentureCreate = require("./VentureCreate.bs.js");
var SelectedVenture = require("./SelectedVenture.bs.js");
var TypographyStack = require("./TypographyStack.bs.js");
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
    if (typeof session === "number") {
      return /* None */0;
    } else {
      var session$1 = session[0];
      if (typeof currentRoute === "number" || currentRoute.tag) {
        return /* None */0;
      } else {
        var selected = currentRoute[0];
        switch (currentRoute[1]) {
          case 0 : 
              return /* None */0;
          case 1 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 2) {
                return /* None */0;
              } else {
                var venture = selectedVenture[1];
                var match = ViewModel.isPartner(session$1[/* userId */0], venture);
                if (match) {
                  return /* Some */[/* tuple */[
                            ReasonReact.element(/* None */0, /* None */0, ManagePartnersModal.make(ViewModel.managePartnersModal(venture), selectedVenture[2], /* array */[])),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                } else {
                  return /* None */0;
                }
              }
          case 2 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 2) {
                return /* None */0;
              } else {
                var venture$1 = selectedVenture[1];
                var match$1 = ViewModel.isPartner(session$1[/* userId */0], venture$1);
                if (match$1) {
                  return /* Some */[/* tuple */[
                            ReasonReact.element(/* None */0, /* None */0, PayoutModal.make(ViewModel.payoutModal(venture$1), selectedVenture[2], /* array */[])),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                } else {
                  return /* None */0;
                }
              }
          case 3 : 
              if (typeof selectedVenture === "number" || selectedVenture.tag !== 2) {
                return /* None */0;
              } else {
                var match$2 = ViewModel.isPartner(session$1[/* userId */0], selectedVenture[1]);
                if (match$2) {
                  return /* Some */[/* tuple */[
                            ReasonReact.element(/* None */0, /* None */0, Receive.make(selectedVenture[2], /* array */[])),
                            (function (param) {
                                return onCloseModal(selected, param);
                              })
                          ]];
                } else {
                  return /* None */0;
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
  var body = function (selectedVenture, createVenture, currentRoute) {
    var exit = 0;
    var exit$1 = 0;
    if (typeof session === "number") {
      if (session !== 2) {
        exit$1 = 2;
      } else {
        return ReasonReact.element(/* None */0, /* None */0, PublicHome.make(onSignIn, /* array */[]));
      }
    } else {
      var exit$2 = 0;
      if (typeof currentRoute === "number") {
        switch (currentRoute) {
          case 0 : 
              exit$2 = 3;
              break;
          case 1 : 
              return ReasonReact.element(/* None */0, /* None */0, VentureCreate.make(selectedVenture, createVenture, /* array */[]));
          case 2 : 
              exit$1 = 2;
              break;
          
        }
      } else {
        exit$2 = 3;
      }
      if (exit$2 === 3) {
        if (typeof selectedVenture === "number" || selectedVenture.tag !== 2) {
          exit = 1;
        } else {
          var venture = selectedVenture[1];
          return ReasonReact.element(/* None */0, /* None */0, SelectedVenture.make(venture, ViewModel.selectedVenture(venture), session[0], selectedVenture[2], /* array */[]));
        }
      }
      
    }
    if (exit$1 === 2) {
      if (typeof currentRoute === "number" && currentRoute >= 2) {
        return ReasonReact.element(/* None */0, /* None */0, TypographyStack.make(/* array */[]));
      } else {
        exit = 1;
      }
    }
    if (exit === 1) {
      if (typeof session === "number") {
        if (session !== 1) {
          if (session >= 3) {
            return ReasonReact.element(/* None */0, /* None */0, Spinner.make("\n             You have signed in with a blockstack user that doesn\'t have a registered blockstack.id,\n             make sure to upgrade the BlockStack client, close all Misthos tabs and try again with a registered id.\n             ", /* array */[]));
          } else {
            return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Loading", /* array */[]));
          }
        } else {
          return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Waiting for BlockStack session", /* array */[]));
        }
      } else if (typeof selectedVenture === "number") {
        if (selectedVenture === 0) {
          return ViewCommon.text("Not selected");
        } else {
          return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Creating venture", /* array */[]));
        }
      } else if (selectedVenture.tag) {
        return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Loading venture", /* array */[]));
      } else {
        return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Joining venture", /* array */[]));
      }
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
                                                  return ReasonReact.element(/* None */0, /* None */0, Layout.make(drawer(index, currentRoute), modal(selectedVenture, currentRoute), body(selectedVenture, createVenture, currentRoute)));
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
