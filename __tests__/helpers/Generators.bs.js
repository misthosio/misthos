// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Event = require("../../src/application/events/Event.bs.js");
var Utils = require("../../src/utils/Utils.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Policy = require("../../src/application/Policy.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Crypto = require("crypto");
var Network = require("../../src/application/wallet/Network.bs.js");
var EventLog = require("../../src/application/events/EventLog.bs.js");
var UserInfo = require("../../src/application/UserInfo.bs.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var WalletTypes = require("../../src/application/wallet/WalletTypes.bs.js");
var BitcoinjsLib = require("bitcoinjs-lib");
var PrimitiveTypes = require("../../src/application/PrimitiveTypes.bs.js");
var AccountKeyChain = require("../../src/application/wallet/AccountKeyChain.bs.js");
var CustodianKeyChain = require("../../src/application/wallet/CustodianKeyChain.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function userSession(id) {
  var appPrivateKey = Utils.bufToHex(Crypto.randomBytes(32));
  var issuerKeyPair = Utils.keyPairFromPrivateKey(Network.bitcoinNetwork(/* Regtest */0), appPrivateKey);
  var appPubKey = Utils.publicKeyFromKeyPair(issuerKeyPair);
  return /* record */[
          /* userId */id,
          /* appPrivateKey */appPrivateKey,
          /* issuerKeyPair */issuerKeyPair,
          /* storagePrefix */UserInfo.storagePrefix(Utils.publicKeyFromKeyPair(issuerKeyPair)),
          /* masterKeyChain */new BitcoinjsLib.HDNode(issuerKeyPair, Utils.bufFromHex($$String.sub(appPubKey, 0, 64))),
          /* network : Regtest */0
        ];
}

function twoUserSessions() {
  return /* tuple */[
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user1")),
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user2"))
        ];
}

function threeUserSessions() {
  return /* tuple */[
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user1")),
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user2")),
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user3"))
        ];
}

function fourUserSessions() {
  return /* tuple */[
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user1")),
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user2")),
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user3")),
          userSession(PrimitiveTypes.UserId[/* fromString */1]("user4"))
        ];
}

function custodianKeyChain(ventureId, keyChainIdx, param) {
  return CustodianKeyChain.toPublicKeyChain(CustodianKeyChain.make(ventureId, WalletTypes.AccountIndex[/* default */9], WalletTypes.CustodianKeyChainIndex[/* fromInt */1](keyChainIdx), param[/* masterKeyChain */4]));
}

function accountKeyChain($staropt$star, $staropt$star$1, users) {
  var ventureId = $staropt$star ? $staropt$star[0] : PrimitiveTypes.VentureId[/* fromString */1]("test");
  var keyChainIdx = $staropt$star$1 ? $staropt$star$1[0] : 0;
  return AccountKeyChain.make(WalletTypes.AccountIndex[/* default */9], WalletTypes.AccountKeyChainIndex[/* fromInt */1](keyChainIdx), List.map((function (user) {
                    return /* tuple */[
                            user[/* userId */0],
                            custodianKeyChain(ventureId, keyChainIdx, user)
                          ];
                  }), users));
}

function createVenture(session) {
  return Event.VentureCreated[/* make */0](PrimitiveTypes.UserId[/* toString */0](session[/* userId */0]) + "-testventure", session[/* userId */0], Utils.publicKeyFromKeyPair(session[/* issuerKeyPair */2]), Policy.unanimous, session[/* network */5]);
}

function partnerProposed($staropt$star, lastRemovalAccepted, supporterSession, prospectSession) {
  var policy = $staropt$star ? $staropt$star[0] : Policy.unanimous;
  return Event.getPartnerProposedExn(Event.makePartnerProposed(supporterSession[/* userId */0], prospectSession[/* userId */0], Utils.publicKeyFromKeyPair(prospectSession[/* issuerKeyPair */2]), lastRemovalAccepted, policy));
}

function partnerEndorsed(supporter, param) {
  return Event.getPartnerEndorsedExn(Event.makePartnerEndorsed(param[/* processId */0], supporter[/* userId */0]));
}

function partnerRejected(rejector, param) {
  return Event.getPartnerRejectedExn(Event.makePartnerRejected(param[/* processId */0], rejector[/* userId */0]));
}

var partnerAccepted = Event.Partner[/* Accepted */6][/* fromProposal */0];

function partnerRemovalProposed(lastPartnerAccepted, supporterSession, toBeRemoved) {
  return Event.getPartnerRemovalProposedExn(Event.makePartnerRemovalProposed(lastPartnerAccepted, supporterSession[/* userId */0], toBeRemoved[/* userId */0], Policy.unanimousMinusOne));
}

function partnerRemovalEndorsed(supporter, param) {
  return Event.getPartnerRemovalEndorsedExn(Event.makePartnerRemovalEndorsed(param[/* processId */0], supporter[/* userId */0]));
}

var partnerRemovalAccepted = Event.Partner[/* Removal */7][/* Accepted */6][/* fromProposal */0];

function accountCreationProposed(param) {
  return Event.getAccountCreationProposedExn(Event.makeAccountCreationProposed(param[/* userId */0], "test", WalletTypes.AccountIndex[/* default */9], Policy.unanimous));
}

var accountCreationAccepted = Event.AccountCreation[/* Accepted */6][/* fromProposal */0];

function custodianProposed(param, partnerProposal) {
  return Event.getCustodianProposedExn(Event.makeCustodianProposed(partnerProposal, param[/* userId */0], WalletTypes.AccountIndex[/* default */9], Policy.unanimous));
}

function custodianEndorsed(supporter, param) {
  return Event.getCustodianEndorsedExn(Event.makeCustodianEndorsed(param[/* processId */0], supporter[/* userId */0]));
}

var custodianAccepted = Event.Custodian[/* Accepted */6][/* fromProposal */0];

function custodianRemovalProposed(custodianAccepted, supporterSession, toBeRemoved) {
  return Event.getCustodianRemovalProposedExn(Event.makeCustodianRemovalProposed(custodianAccepted, supporterSession[/* userId */0], toBeRemoved[/* userId */0], WalletTypes.AccountIndex[/* default */9], Policy.unanimousMinusOne));
}

function custodianRemovalEndorsed(supporter, param) {
  return Event.getCustodianRemovalEndorsedExn(Event.makeCustodianRemovalEndorsed(param[/* processId */0], supporter[/* userId */0]));
}

var custodianRemovalAccepted = Event.Custodian[/* Removal */7][/* Accepted */6][/* fromProposal */0];

var custodianKeyChainUpdated = Event.CustodianKeyChainUpdated[/* make */0];

var accountKeyChainUpdated = Event.AccountKeyChainUpdated[/* make */0];

var Event$1 = /* module */[
  /* createVenture */createVenture,
  /* partnerProposed */partnerProposed,
  /* partnerEndorsed */partnerEndorsed,
  /* partnerRejected */partnerRejected,
  /* partnerAccepted */partnerAccepted,
  /* partnerRemovalProposed */partnerRemovalProposed,
  /* partnerRemovalEndorsed */partnerRemovalEndorsed,
  /* partnerRemovalAccepted */partnerRemovalAccepted,
  /* accountCreationProposed */accountCreationProposed,
  /* accountCreationAccepted */accountCreationAccepted,
  /* custodianProposed */custodianProposed,
  /* custodianEndorsed */custodianEndorsed,
  /* custodianAccepted */custodianAccepted,
  /* custodianRemovalProposed */custodianRemovalProposed,
  /* custodianRemovalEndorsed */custodianRemovalEndorsed,
  /* custodianRemovalAccepted */custodianRemovalAccepted,
  /* custodianKeyChainUpdated */custodianKeyChainUpdated,
  /* accountKeyChainUpdated */accountKeyChainUpdated
];

function reduce(f, s, param) {
  return Curry._3(EventLog.reduce, f, s, param[/* log */3]);
}

function ventureId(param) {
  return param[/* ventureId */0];
}

function systemIssuer(param) {
  return param[/* systemIssuer */1];
}

function lastItem(param) {
  return param[/* lastItem */2];
}

function lastEvent(param) {
  return param[/* lastItem */2][/* event */0];
}

function eventLog(param) {
  return param[/* log */3];
}

function appendEvent(issuer, $$event, l) {
  var match = Curry._3(EventLog.append, issuer, $$event, l[/* log */3]);
  return /* record */[
          /* ventureId */l[/* ventureId */0],
          /* systemIssuer */l[/* systemIssuer */1],
          /* lastItem */match[0],
          /* log */match[1]
        ];
}

function appendSystemEvent($$event, log) {
  return appendEvent(log[/* systemIssuer */1], $$event, log);
}

function make(session, ventureCreated) {
  var match = Curry._3(EventLog.append, session[/* issuerKeyPair */2], /* VentureCreated */Block.__(0, [ventureCreated]), Curry._1(EventLog.make, /* () */0));
  return /* record */[
          /* ventureId */ventureCreated[/* ventureId */0],
          /* systemIssuer */ventureCreated[/* systemIssuer */5],
          /* lastItem */match[0],
          /* log */match[1]
        ];
}

function createVenture$1(session) {
  return make(session, createVenture(session));
}

function withPartnerProposed($staropt$star, issuer, $staropt$star$1, supporter, prospect, l) {
  var withLastRemoval = $staropt$star ? $staropt$star[0] : true;
  var policy = $staropt$star$1 ? $staropt$star$1[0] : Policy.unanimous;
  var issuer$1 = issuer ? issuer[0] : supporter[/* issuerKeyPair */2];
  var lastRemovalAccepted = withLastRemoval ? Curry._3(EventLog.reduce, (function (res, param) {
            var $$event = param[/* event */0];
            if ($$event.tag === 8) {
              var $$event$1 = $$event[0];
              if (PrimitiveTypes.UserId[/* eq */5]($$event$1[/* data */2][/* id */0], prospect[/* userId */0])) {
                return /* Some */[$$event$1];
              } else {
                return res;
              }
            } else {
              return res;
            }
          }), /* None */0, l[/* log */3]) : /* None */0;
  return appendEvent(issuer$1, /* PartnerProposed */Block.__(1, [partnerProposed(/* Some */[policy], lastRemovalAccepted, supporter, prospect)]), l);
}

function withPartnerEndorsed(issuer, supporter, proposal) {
  var issuer$1 = issuer ? issuer[0] : supporter[/* issuerKeyPair */2];
  var partial_arg = /* PartnerEndorsed */Block.__(3, [partnerEndorsed(supporter, proposal)]);
  return (function (param) {
      return appendEvent(issuer$1, partial_arg, param);
    });
}

function withPartnerRejected(issuer, supporter, proposal) {
  var issuer$1 = issuer ? issuer[0] : supporter[/* issuerKeyPair */2];
  var partial_arg = /* PartnerRejected */Block.__(2, [partnerRejected(supporter, proposal)]);
  return (function (param) {
      return appendEvent(issuer$1, partial_arg, param);
    });
}

function withPartnerAccepted(proposal) {
  var partial_arg = /* PartnerAccepted */Block.__(4, [Curry._1(partnerAccepted, proposal)]);
  return (function (param) {
      return appendSystemEvent(partial_arg, param);
    });
}

function withPartner(user, supporters, log) {
  if (supporters) {
    var log$1 = withPartnerProposed(/* None */0, /* None */0, /* None */0, supporters[0], user, log);
    var proposal = Event.getPartnerProposedExn(lastEvent(log$1));
    return withPartnerAccepted(proposal)(List.fold_left((function (log, supporter) {
                      return withPartnerEndorsed(/* None */0, supporter, proposal)(log);
                    }), log$1, supporters[1]));
  } else {
    return Js_exn.raiseError("withPartner");
  }
}

function withFirstPartner(user) {
  var partial_arg = /* :: */[
    user,
    /* [] */0
  ];
  return (function (param) {
      return withPartner(user, partial_arg, param);
    });
}

function withPartnerRemovalProposed(supporter, toBeRemoved, l) {
  var lastPartnerAccepted = Js_option.getExn(Curry._3(EventLog.reduce, (function (res, param) {
              var $$event = param[/* event */0];
              if ($$event.tag === 4) {
                var $$event$1 = $$event[0];
                if (PrimitiveTypes.UserId[/* eq */5]($$event$1[/* data */2][/* id */1], toBeRemoved[/* userId */0])) {
                  return /* Some */[$$event$1];
                } else {
                  return res;
                }
              } else {
                return res;
              }
            }), /* None */0, l[/* log */3]));
  return appendEvent(supporter[/* issuerKeyPair */2], /* PartnerRemovalProposed */Block.__(5, [partnerRemovalProposed(lastPartnerAccepted, supporter, toBeRemoved)]), l);
}

function withPartnerRemovalEndorsed(supporter, proposal) {
  var partial_arg = /* PartnerRemovalEndorsed */Block.__(7, [partnerRemovalEndorsed(supporter, proposal)]);
  var partial_arg$1 = supporter[/* issuerKeyPair */2];
  return (function (param) {
      return appendEvent(partial_arg$1, partial_arg, param);
    });
}

function withPartnerRemovalAccepted(proposal) {
  var partial_arg = /* PartnerRemovalAccepted */Block.__(8, [Curry._1(partnerRemovalAccepted, proposal)]);
  return (function (param) {
      return appendSystemEvent(partial_arg, param);
    });
}

function withPartnerRemoved(user, supporters, log) {
  if (supporters) {
    var log$1 = withPartnerRemovalProposed(supporters[0], user, log);
    var proposal = Event.getPartnerRemovalProposedExn(lastEvent(log$1));
    return withPartnerRemovalAccepted(proposal)(List.fold_left((function (log, supporter) {
                      return withPartnerRemovalEndorsed(supporter, proposal)(log);
                    }), log$1, supporters[1]));
  } else {
    return Js_exn.raiseError("withPartner");
  }
}

function withAccountCreationProposed(supporter) {
  var partial_arg = /* AccountCreationProposed */Block.__(9, [accountCreationProposed(supporter)]);
  var partial_arg$1 = supporter[/* issuerKeyPair */2];
  return (function (param) {
      return appendEvent(partial_arg$1, partial_arg, param);
    });
}

function withAccountCreationAccepted(proposal) {
  var partial_arg = /* AccountCreationAccepted */Block.__(12, [Curry._1(accountCreationAccepted, proposal)]);
  return (function (param) {
      return appendSystemEvent(partial_arg, param);
    });
}

function withAccount(supporter, log) {
  var log$1 = withAccountCreationProposed(supporter)(log);
  var proposal = Event.getAccountCreationProposedExn(lastEvent(log$1));
  return withAccountCreationAccepted(proposal)(log$1);
}

function withCustodianProposed(supporter, custodian, l) {
  var partnerProposed = Curry._3(EventLog.reduce, (function (partnerProposal, param) {
          var $$event = param[/* event */0];
          if (partnerProposal) {
            return /* Some */[partnerProposal[0]];
          } else if ($$event.tag === 1) {
            var proposal = $$event[0];
            if (PrimitiveTypes.UserId[/* eq */5](proposal[/* data */5][/* id */1], custodian[/* userId */0])) {
              return /* Some */[proposal];
            } else {
              return partnerProposal;
            }
          } else {
            return partnerProposal;
          }
        }), /* None */0, l[/* log */3]);
  if (partnerProposed) {
    return appendEvent(supporter[/* issuerKeyPair */2], /* CustodianProposed */Block.__(13, [custodianProposed(supporter, partnerProposed[0])]), l);
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function withCustodianEndorsed(supporter, proposal) {
  var partial_arg = /* CustodianEndorsed */Block.__(15, [custodianEndorsed(supporter, proposal)]);
  var partial_arg$1 = supporter[/* issuerKeyPair */2];
  return (function (param) {
      return appendEvent(partial_arg$1, partial_arg, param);
    });
}

function withCustodianAccepted(proposal) {
  var partial_arg = /* CustodianAccepted */Block.__(16, [Curry._1(custodianAccepted, proposal)]);
  return (function (param) {
      return appendSystemEvent(partial_arg, param);
    });
}

function withCustodian(user, supporters, log) {
  if (supporters) {
    var log$1 = withCustodianProposed(supporters[0], user, log);
    var proposal = Event.getCustodianProposedExn(lastEvent(log$1));
    return withCustodianAccepted(proposal)(List.fold_left((function (log, supporter) {
                      return withCustodianEndorsed(supporter, proposal)(log);
                    }), log$1, supporters[1]));
  } else {
    return Js_exn.raiseError("withPartner");
  }
}

function withCustodianRemovalProposed(supporter, toBeRemoved, l) {
  var custodianAccepted = Js_option.getExn(Curry._3(EventLog.reduce, (function (res, param) {
              var $$event = param[/* event */0];
              if ($$event.tag === 16) {
                var $$event$1 = $$event[0];
                if (PrimitiveTypes.UserId[/* eq */5]($$event$1[/* data */2][/* partnerId */0], toBeRemoved[/* userId */0])) {
                  return /* Some */[$$event$1];
                } else {
                  return res;
                }
              } else {
                return res;
              }
            }), /* None */0, l[/* log */3]));
  return appendEvent(supporter[/* issuerKeyPair */2], /* CustodianRemovalProposed */Block.__(17, [custodianRemovalProposed(custodianAccepted, supporter, toBeRemoved)]), l);
}

function withCustodianRemovalEndorsed(supporter, proposal) {
  var partial_arg = /* CustodianRemovalEndorsed */Block.__(19, [custodianRemovalEndorsed(supporter, proposal)]);
  var partial_arg$1 = supporter[/* issuerKeyPair */2];
  return (function (param) {
      return appendEvent(partial_arg$1, partial_arg, param);
    });
}

function withCustodianRemovalAccepted(proposal) {
  var partial_arg = /* CustodianRemovalAccepted */Block.__(20, [Curry._1(custodianRemovalAccepted, proposal)]);
  return (function (param) {
      return appendSystemEvent(partial_arg, param);
    });
}

function withCustodianRemoved(user, supporters, log) {
  if (supporters) {
    var log$1 = withCustodianRemovalProposed(supporters[0], user, log);
    var proposal = Event.getCustodianRemovalProposedExn(lastEvent(log$1));
    return withCustodianRemovalAccepted(proposal)(List.fold_left((function (log, supporter) {
                      return withCustodianRemovalEndorsed(supporter, proposal)(log);
                    }), log$1, supporters[1]));
  } else {
    return Js_exn.raiseError("withCustodian");
  }
}

function withAccountKeyChain($staropt$star, custodians, l) {
  var keyChainIdx = $staropt$star ? $staropt$star[0] : 0;
  var custodianProcesses = Curry._3(EventLog.reduce, (function (res, param) {
          var $$event = param[/* event */0];
          if ($$event.tag === 16) {
            var match = $$event[0];
            return /* :: */[
                    /* tuple */[
                      match[/* data */2][/* partnerId */0],
                      match[/* processId */0]
                    ],
                    res
                  ];
          } else {
            return res;
          }
        }), /* [] */0, l[/* log */3]);
  var accountKeyChain$1 = accountKeyChain(/* Some */[l[/* ventureId */0]], /* Some */[keyChainIdx], custodians);
  return appendSystemEvent(/* AccountKeyChainUpdated */Block.__(30, [Curry._1(accountKeyChainUpdated, accountKeyChain$1)]), List.fold_left((function (l, $$event) {
                    return appendEvent(List.find((function (param) {
                                        return PrimitiveTypes.UserId[/* eq */5](param[/* userId */0], $$event[/* custodianId */1]);
                                      }), custodians)[/* issuerKeyPair */2], /* CustodianKeyChainUpdated */Block.__(29, [$$event]), l);
                  }), l, List.map((function (param) {
                        var custodianId = param[0];
                        return Curry._3(custodianKeyChainUpdated, List.assoc(custodianId, custodianProcesses), custodianId, param[1]);
                      }), accountKeyChain$1[/* custodianKeyChains */3])));
}

var Log = /* module */[
  /* reduce */reduce,
  /* ventureId */ventureId,
  /* systemIssuer */systemIssuer,
  /* lastItem */lastItem,
  /* lastEvent */lastEvent,
  /* eventLog */eventLog,
  /* appendEvent */appendEvent,
  /* appendSystemEvent */appendSystemEvent,
  /* make */make,
  /* createVenture */createVenture$1,
  /* withPartnerProposed */withPartnerProposed,
  /* withPartnerEndorsed */withPartnerEndorsed,
  /* withPartnerRejected */withPartnerRejected,
  /* withPartnerAccepted */withPartnerAccepted,
  /* withPartner */withPartner,
  /* withFirstPartner */withFirstPartner,
  /* withPartnerRemovalProposed */withPartnerRemovalProposed,
  /* withPartnerRemovalEndorsed */withPartnerRemovalEndorsed,
  /* withPartnerRemovalAccepted */withPartnerRemovalAccepted,
  /* withPartnerRemoved */withPartnerRemoved,
  /* withAccountCreationProposed */withAccountCreationProposed,
  /* withAccountCreationAccepted */withAccountCreationAccepted,
  /* withAccount */withAccount,
  /* withCustodianProposed */withCustodianProposed,
  /* withCustodianEndorsed */withCustodianEndorsed,
  /* withCustodianAccepted */withCustodianAccepted,
  /* withCustodian */withCustodian,
  /* withCustodianRemovalProposed */withCustodianRemovalProposed,
  /* withCustodianRemovalEndorsed */withCustodianRemovalEndorsed,
  /* withCustodianRemovalAccepted */withCustodianRemovalAccepted,
  /* withCustodianRemoved */withCustodianRemoved,
  /* withAccountKeyChain */withAccountKeyChain
];

var AppEvent = 0;

exports.AppEvent = AppEvent;
exports.userSession = userSession;
exports.twoUserSessions = twoUserSessions;
exports.threeUserSessions = threeUserSessions;
exports.fourUserSessions = fourUserSessions;
exports.custodianKeyChain = custodianKeyChain;
exports.accountKeyChain = accountKeyChain;
exports.Event = Event$1;
exports.Log = Log;
/* Event Not a pure module */
