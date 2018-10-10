// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE
'use strict';

var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var AccountKeyChain = require("./AccountKeyChain.bs.js");

function make() {
  return /* record */[
          /* network : Regtest */0,
          /* keyChains */AccountKeyChain.Collection[/* empty */0],
          /* exposedAddresses */Belt_MapString.empty
        ];
}

function apply($$event, state) {
  switch ($$event.tag | 0) {
    case 0 : 
        return /* record */[
                /* network */$$event[0][/* network */8],
                /* keyChains */state[/* keyChains */1],
                /* exposedAddresses */state[/* exposedAddresses */2]
              ];
    case 38 : 
        return /* record */[
                /* network */state[/* network */0],
                /* keyChains */AccountKeyChain.Collection[/* add */1]($$event[0][/* keyChain */0], state[/* keyChains */1]),
                /* exposedAddresses */state[/* exposedAddresses */2]
              ];
    case 40 : 
        var address = $$event[0][/* address */1];
        return /* record */[
                /* network */state[/* network */0],
                /* keyChains */state[/* keyChains */1],
                /* exposedAddresses */Belt_MapString.set(state[/* exposedAddresses */2], address[/* displayAddress */5], address)
              ];
    default:
      return state;
  }
}

exports.make = make;
exports.apply = apply;
/* AccountKeyChain Not a pure module */
