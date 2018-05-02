// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Home = require("./Home.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Drawer = require("./Drawer.bs.js");
var Layout = require("./Layout.bs.js");
var Router = require("./Router.bs.js");
var Spinner = require("./components/Spinner.bs.js");
var PublicHome = require("./PublicHome.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var VentureStore = require("./VentureStore.bs.js");
var VentureCreate = require("./VentureCreate.bs.js");
var TypographyStack = require("./TypographyStack.bs.js");

var component = ReasonReact.statelessComponent("App");

function make(session, updateSession, _) {
  var onSignIn = function () {
    return Curry._1(updateSession, /* SignIn */0);
  };
  var onSignOut = function () {
    return Curry._1(updateSession, /* SignOut */1);
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
  var body = function (selectedVenture, updateVentureStore, currentRoute) {
    var exit = 0;
    var exit$1 = 0;
    if (typeof session === "number") {
      if (session !== 2) {
        exit$1 = 2;
      } else {
        return ReasonReact.element(/* None */0, /* None */0, PublicHome.make(onSignIn, /* array */[]));
      }
    } else if (typeof currentRoute === "number") {
      var session$1 = session[0];
      switch (currentRoute) {
        case 0 : 
            return ReasonReact.element(/* None */0, /* None */0, Home.make(session$1, selectedVenture, /* array */[]));
        case 1 : 
            return ReasonReact.element(/* None */0, /* None */0, VentureCreate.make((function (param) {
                              return Curry._1(updateVentureStore, /* CreateVenture */Block.__(1, [
                                            session$1,
                                            param
                                          ]));
                            }), /* array */[]));
        case 2 : 
            exit$1 = 2;
            break;
        
      }
    } else {
      exit = 1;
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
            return ReasonReact.element(/* None */0, /* None */0, Spinner.make("You have signed in with a blockstack user that doesn't have a registered blockstack.id, make sure to upgrade the BlockStack client, close all Misthos tabs and try again with a registered id.", /* array */[]));
          } else {
            return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Loading", /* array */[]));
          }
        } else {
          return ReasonReact.element(/* None */0, /* None */0, Spinner.make("Waiting for BlockStack session", /* array */[]));
        }
      } else {
        return ReasonReact.element(/* None */0, /* None */0, Home.make(session[0], selectedVenture, /* array */[]));
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
                                return ReasonReact.element(/* None */0, /* None */0, VentureStore.make(currentRoute, session, (function (index, selectedVenture, updateVentureStore) {
                                                  return ReasonReact.element(/* None */0, /* None */0, Layout.make(drawer(index, currentRoute), body(selectedVenture, updateVentureStore, currentRoute)));
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

exports.component = component;
exports.make = make;
/* component Not a pure module */
