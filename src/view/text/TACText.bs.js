// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Utils = require("../../utils/Utils.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ViewCommon = require("../ViewCommon.bs.js");

var terms = /* array */[
  /* record */[
    /* heading */"Why do I need to understand and acknowledge the terms of use?",
    /* body : P */Block.__(0, [/* array */["We know that you are eager to start using Misthos. It is however\n          important that you understand and acknowledge the terms of use. This\n          is for the safety of your own funds."]])
  ],
  /* record */[
    /* heading */"Because you and only you are responsible for your security.",
    /* body : L */Block.__(1, [/* array */[
          "Be diligent and keep your Blockstack recovery phrase and password\n          safe.",
          "If you lose your Blockstack recovery phrase or password, no one can\n          recover it."
        ]])
  ],
  /* record */[
    /* heading */"Because we at Misthos cannot",
    /* body : L */Block.__(1, [/* array */[
          "Access your wallet or send your funds for you.",
          "Recover or change your Blockstack recovery phrase.",
          "Recover or reset your password.",
          "Reverse, cancel or refund transactions.",
          "Freeze accounts.",
          "Recover your data history."
        ]])
  ],
  /* record */[
    /* heading */"What is Misthos?",
    /* body : L */Block.__(1, [/* array */[
          "Misthos is a decentralised app for collaborative management of\n          finances.",
          "Using Misthos a team of collaborating individuals can collectively\n          manage and distribute their Bitcoin.",
          "Within Misthos, users create Ventures and dynamically add and remove\n          Partners who are the custodians of a multisig Bitcoin wallet."
        ]])
  ],
  /* record */[
    /* heading */"Misthos is not a custodial service",
    /* body : L */Block.__(1, [/* array */[
          "When you open an account with a custodial service such as an exchange\n          or a bank, the service creates an account for you in their system.",
          "A custodial service keeps track of your personal information, account\n          passwords, balances, transactions and ultimately your funds.",
          "A custodial service charges fees to manage your account and provide\n          services, like refunding transactions when your funds gets stolen."
        ]])
  ],
  /* record */[
    /* heading */"Misthos is an Interface",
    /* body : L */Block.__(1, [/* array */[
          "When you login to Misthos via your Blockstack ID, you are granting the\n          Misthos app permission to write data to the storage location specified\n          in your Blockstack profile.",
          "We at Misthos have no ability to change, decrypt or intercept any of\n          the data written by the Misthos app to your storage location.",
          "All data that is shared amongst Partners of a venture is encrypted and\n         can only be decrypted by the Venture Partners.",
          "If the data is lost or corrupted, we at Misthos have no ability to\n          recover it for you.",
          "When you login to Misthos via your Blockstack ID, the Misthos app is\n         provided with a cryptographic key pair derived from the recovery\n         phrase securing your Blockstack ID.",
          "This app specific key pair is used in the derivation process when\n          generating and signing Bitcoin addresses",
          "Your private keys or any account information are never transmitted or\n          stored by Misthos.",
          "If you lose the recovery phrase of your Blockstack ID, you will lose\n          the ability to sign transactions generated by Misthos."
        ]])
  ],
  /* record */[
    /* heading */"Multisig Wallet and the Distinction between Outdated and Fresh\n              Addresses",
    /* body : L */Block.__(1, [/* array */[
          "Any Venture created in Misthos contains a Bitcoin wallet where the\n          current Partners of the Venture are the custodians of the wallet",
          "Whenever a Partner is added or removed from a Venture, the\n          configuration of the underlying Bitcoin multisig wallet is updated to\n          reflect the current group of Partners.",
          "If a Venture adds a new Partner, then any addresses generated before\n          the current configuration of Partners is activated are outdated. E.g\n          If a Venture has two Partners and a third Partner is added, then all\n          address generated with the two initial Partners are outdated\n          addresses.",
          "As long as the Partners of the outdated addresses are still present,\n          all income received on outdated addresses are automatically\n          transferred to a fresh address the next time a payout is executed. E.g\n          If a Venture has two Partners and a third Partner is added, then all\n          income received on outdated addresses is automatically transferred to\n          a fresh address the next time a payout is generated. This fresh\n          address is then controlled by all the three Partners.",
          "If however there are not enough Partners present from an outdated\n          address, the income will be temporarily locked up. E.g  If a Venture\n          has three Partners and two of them leave, then any income that is\n          received on an outdated address (i.e with three Partners) becomes\n          temporarily locked up.",
          "As long as atleast one of the original Partners is still present,\n          income will be spendable after the temporary lock up period of 12,672\n          blocks. This approximately corresponds to three months. E.g  If a\n          Venture has three Partners and two of them leave, then any income that\n          is received on an outdated address (i.e with three Partners) becomes\n          temporarily locked up and will become spendable after the three month\n          period expires.",
          "If no Partners are left, then the Bitcoin will become permanently\n          inaccessible.",
          "In order to mitigate the risk of funds getting temporarily locked up,\n          use a fresh address (i.e generate a new income address) every time you\n          want to receive Bitcoin. If Bitcoin is received on an outdated address\n          then the Misthos interface will warn you to make a payout to ensure\n          the income gets transferred to a fresh address."
        ]])
  ],
  /* record */[
    /* heading */"Adding and Removing Partners within the Multisig Wallet",
    /* body : L */Block.__(1, [/* array */[
          "Any Partner within a Venture can propose the addition of a new\n          Partner. For the proposal to be successful, it requires N-of-N\n          endorsements i.e all Partner within a Venture need to unanimously\n          endorse the proposal.",
          "Any Partner within a Venture can propose the removal of another\n          Partner. For the removal to be successful, this proposal requires\n          N-1-of-N endorsements. E.g If a Venture has four Partners, then three\n          Partners have to endorse the proposed removal.."
        ]])
  ],
  /* record */[
    /* heading */"Misthos Fee",
    /* body : L */Block.__(1, [/* array */["We do charge a transaction and handling fee for the use of our\n         interface whenever you make a payout. Receiving income is not\n         charged."]])
  ]
];

var hash = Utils.hash(Belt_Array.concatMany(Belt_Array.mapU(terms, (function (section) {
                  return Belt_Array.concat(/* array */[section[/* heading */0]], section[/* body */1][0]);
                }))).join(" "));

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.terms = terms;
exports.hash = hash;
/* hash Not a pure module */