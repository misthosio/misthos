// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var Colors = require("../Colors.bs.js");
var ViewCommon = require("../ViewCommon.bs.js");

var faq = /* array */[
  /* record */[
    /* q */"What is Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["Misthos is a decentralised app for collaborative management of finances.\n         Individuals collaborating on a project can use Misthos to manage and\n         distribute their bitcoin income as a team."]),
      /* S */Block.__(0, ["Users can create Ventures and dynamically add and remove Partners that\n         share and control a multisig Bitcoin wallet. Ventures can receive Bitcoin,\n         and payouts can be proposed that require endorsement from the other\n         Partners before they are submitted to the Bitcoin network."]),
      /* S */Block.__(0, ["In the future Misthos will evolve beyond being a shared wallet to a\n         complete solution for collaboratively managing your cash flow with bitcoin!"])
    ]
  ],
  /* record */[
    /* q */"Who is Misthos for?",
    /* a : array */[/* S */Block.__(0, ["Misthos is for any team that need a simple way to transact from a shared\n       multisig Bitcoin wallet."])]
  ],
  /* record */[
    /* q */"How can a team use Misthos today?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("Using Misthos, a team can:"),
            React.createElement("ul", undefined, React.createElement("li", undefined, ViewCommon.text("Aggregate income in a multisig Bitcoin wallet")), React.createElement("li", undefined, ViewCommon.text("Dynamically add / remove Partners as they participate in the venture")), React.createElement("li", undefined, ViewCommon.text("Collectively approve payouts")), React.createElement("li", undefined, ViewCommon.text("Have full visibility of the transaction and approval history")))
          ]])]
  ],
  /* record */[
    /* q */"What is unique about Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["The Misthos multisig wallet is optimised for collaborating individuals who need a simple way to collectively share and distribute Bitcoin."]),
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("Misthos is unique for its:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Quick wallet set-up")), React.createElement("li", undefined, ViewCommon.text("Scalability: dynamically adding / removing wallet custodians (Partners)")), React.createElement("li", undefined, ViewCommon.text("Streamlined user-experience for collaborative approval processes")))
          ]])
    ]
  ],
  /* record */[
    /* q */"What are the principles behind Misthos?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("Misthos is built on the principles of data sovereignty, identity and collaborative governance models. This "),
            React.createElement("a", {
                  href: "https://medium.com/@misthosio/ushering-in-the-decentralization-of-work-c32c14e7625c",
                  target: "_blank"
                }, ViewCommon.text("blog post")),
            ViewCommon.text(" dives into the guiding principles behind Misthos.")
          ]])]
  ],
  /* record */[
    /* q */"Misthos is built on Blockstack. What is Blockstack?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("Blockstack is a platform for developing decentralised applications.\n          It provides solution to the decentralization of authentication,\n          authorization and data storage secured by the bitcoin blockchain. With\n          Blockstack, users control their data and apps run on their devices.\n          There are no middlemen, no passwords, no massive data silos to breach,\n          and no services tracking users around the internet. You can learn more\n          about Blockstack"),
            React.createElement("a", {
                  href: "https://blockstack.org/",
                  target: "_blank"
                }, ViewCommon.text("here")),
            ViewCommon.text(".")
          ]])]
  ],
  /* record */[
    /* q */"Do I need to register with Blockstack?",
    /* a : array */[/* S */Block.__(0, ["Yes, you need to have a Blockstack ID to sign in to Misthos and create\n         or join a Venture. If you don't have one you will be redirected to the\n         blockstack setup page when signing in."])]
  ],
  /* record */[
    /* q */"How can I get started with Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["The first step is to set up a Blockstack ID. The Blockstack ID is\n         unique to an individual or a Partner. If you already have a Blockstack\n         ID, then you can directly go to step # 4\n         "]),
      /* E */Block.__(1, [/* array */[
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Go to "), React.createElement("a", {
                          href: "https://www.misthos.io/",
                          target: "_blank"
                        }, ViewCommon.text("https://www.misthos.io/")), ViewCommon.text(".")), React.createElement("li", undefined, ViewCommon.text("Click on the \"Sign in with Blockstack\" button. ")), React.createElement("li", undefined, ViewCommon.text("At this point you will be redirected and prompted to install the "), React.createElement("a", {
                          href: "https://blockstack.org/install",
                          target: "_blank"
                        }, ViewCommon.text("Blockstack browser")), ViewCommon.text(" and asked to set up a Blockstack ID. You are now ready to sign-in to Misthos.")), React.createElement("li", undefined, ViewCommon.text("Start the Blockstack browser on your PC or Laptop. This step is important as the Misthos app calls the Blockstack browser.")), React.createElement("li", undefined, ViewCommon.text("Re-open the "), React.createElement("a", {
                          href: "https://www.misthos.io/",
                          target: "_blank"
                        }, ViewCommon.text("https://www.misthos.io/")), ViewCommon.text(" page and click on the \"Sign-in with Blockstack\" button. You will see a \"Sign-In Request\" pop up. ")), React.createElement("li", undefined, ViewCommon.text("Choose the Blockstack ID you want to sign in with and click on \"Approve\" to give Misthos the required permissions."))),
            ViewCommon.text("Once you are successfully signed in, you can either create a new Venture or join an existing one (by invitation).")
          ]])
    ]
  ],
  /* record */[
    /* q */"What is a Venture within Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["Any project is designated as a Venture within Misthos."]),
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("Every Venture within Misthos has:"),
            React.createElement("ul", undefined, React.createElement("li", undefined, ViewCommon.text("One or more Partners")), React.createElement("li", undefined, ViewCommon.text("A multisig BTC wallet at its core")))
          ]])
    ]
  ],
  /* record */[
    /* q */"How can I create a Venture within Misthos?",
    /* a : array */[
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("To create a Venture, you need to be signed in to Misthos. If you are not yet signed in:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Go to "), React.createElement("a", {
                          href: "https://www.misthos.io/",
                          target: "_blank"
                        }, ViewCommon.text("https://www.misthos.io/"))), React.createElement("li", undefined, ViewCommon.text("Click on the \"Sign in with Blockstack\" button. ")), React.createElement("li", undefined, ViewCommon.text("You will see a \"Sign-In Request\" pop up. Choose the blockstack Id you want to sign in with and click on \"Approve\" to give Misthos the required permissions. ")))
          ]]),
      /* S */Block.__(0, ["Once you are signed in to Misthos, you will see the main screen with\n         all the Ventures that you are a part of. To create a new Venture, click\n         on \\\"Create a Venture\\\" button."]),
      /* S */Block.__(0, ["You only need to enter a name to create a new Venture. Once created,\n         you will be taken to the main Venture view?. In this view you can see\n         the BTC amount that is held by the wallet of the Venture, the list of\n         Partners, the transaction history and the buttons to receive BTC and\n         create payouts."])
    ]
  ],
  /* record */[
    /* q */"How can I join an existing Venture?",
    /* a : array */[
      /* S */Block.__(0, ["In order to join an existing Venture, a partner within the Venture needs to propose that you be added and share an invitation link. Once all the existing partners within the Venture have endorsed the proposal you will gain access via the link that was shared with you."]),
      /* S */Block.__(0, ["If the endorsement process is not yet complete i.e if all existing partners have not yet endorsed a proposed partner, then you will see the following error:"]),
      /* E */Block.__(1, [React.createElement("span", {
                className: Css.style(/* :: */[
                      Css.color(Colors.error),
                      /* [] */0
                    ])
              }, ViewCommon.text("Error joining Venture. Perhaps you have not been accepted yet, or if this was your first time logging in to Misthos, the Venture will become available after the inviting partner has logged in again."))])
    ]
  ],
  /* record */[
    /* q */"What is a proposal and an endorsement within Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["Misthos works on a set of proposals and endorsements."]),
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("Here are the three types of proposals currently available:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Propose a Payout")), React.createElement("li", undefined, ViewCommon.text("Propose adding a Partner")), React.createElement("li", undefined, ViewCommon.text("Propose removing a Partner")))
          ]]),
      /* S */Block.__(0, ["Each of these proposals require endorsements from the remaining\n         partners to become accepted."])
    ]
  ],
  /* record */[
    /* q */"Who is a Partner?",
    /* a : array */[/* S */Block.__(0, ["A Partner is an individual collaborator within a Venture and is a\n         unique co-signer of the multisig wallet."])]
  ],
  /* record */[
    /* q */"How do I add or remove Partners within Misthos?",
    /* a : array */[
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("In order to add a Partner to a Venture:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Go to the main Venture view and click on \"Add or Remove Partners\".")), React.createElement("li", undefined, ViewCommon.text("A pop-up will appear. Here enter the Blockstack ID of the new Partner and click on \"Propose Partner\".\n            ")), React.createElement("li", undefined, ViewCommon.text("Share the Venture URL with the added Partner.")), React.createElement("li", undefined, ViewCommon.text("Access will be granted once all other Partners have endorsed the proposal.")))
          ]]),
      /* S */Block.__(0, ["In order to remove a Partner a remove Partner proposal needs to be\n         submitted. This step requires enough existing Partners to endorse the\n         proposal. See also the question on removing a Partner below."])
    ]
  ],
  /* record */[
    /* q */"How can I receive funds within Misthos?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("In order to receive funds:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Click on the \"Receive\" button on the main home screen.")), React.createElement("li", undefined, ViewCommon.text("A pop-up will appear and create your with your \"Income Address\".")), React.createElement("li", undefined, ViewCommon.text("Use this address (either by copying the address or scanning\n                 the QR code) to receive funds.")))
          ]])]
  ],
  /* record */[
    /* q */"How do payouts work within Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["Any Partner can propose a payout within a Venture. As soon as there is\n         more than one Partner, the funds are collectively controlled and all\n         Partners need to unanimously agree to the payout."]),
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("The payout process goes through the following steps within Misthos:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Payout Proposal")), React.createElement("li", undefined, ViewCommon.text("Payout Endorsement or Rejection")), React.createElement("li", undefined, ViewCommon.text("Payout transaction is submitted to the Bitcoin network")))
          ]]),
      /* S */Block.__(0, ["The first two steps involving the proposal and endorsement are\n         intrinsic to Misthos. The third step is extrinsic to Misthos and\n         behaves the same as any transaction submitted to the Bitcoin network."])
    ]
  ],
  /* record */[
    /* q */"How can I Propose a Payout?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("In order to propose a payout:"),
            React.createElement("ol", undefined, React.createElement("li", undefined, ViewCommon.text("Click on the \"Payout\" button within the main Venture view.\n                   This will open up a \"Create a Payout\" page.")), React.createElement("li", undefined, ViewCommon.text("Enter the receiving address and the BTC amount.")), React.createElement("li", undefined, ViewCommon.text("On the right side of this page, you can see the summary of\n                   the payout which includes a breakdown of the BTC amount, the\n                   Network fee and Misthos fee.")), React.createElement("li", undefined, ViewCommon.text("You can now either proceed with this payout by clicking on\n                   \"Propose Payout\" or choose to add another recipient.")))
          ]])]
  ],
  /* record */[
    /* q */"How can I Endorse or Reject a Payout?",
    /* a : array */[
      /* S */Block.__(0, ["Any proposed payout is added to list of payouts in the main Venture\n         view and is visible to all Partners. When a Partner clicks on a\n         proposed payout, they can see the overall endorsement status and an\n         option to endorse or reject an outstanding payout.\n         "]),
      /* S */Block.__(0, ["Current policy requires unanimous or N-of-N endorsements. E.g if a\n         Venture has three Partners then all three partners need to endorse a\n         payout for it to go to the submission stage.\n         "]),
      /* S */Block.__(0, ["If any partner chooses to reject a payout, then the payout is\n         cancelled and will not be submitted.\n         "]),
      /* S */Block.__(0, ["Once all existing partners endorse the payout, it will be\n         automatically submitted to the Bitcoin network. "])
    ]
  ],
  /* record */[
    /* q */"What happens on Payout Submission?",
    /* a : array */[
      /* S */Block.__(0, ["Once all endorsements are received then the payout will be submitted\n         to the Bitcoin network and will be shown as an \xe2\x80\x9cunconfirmed payout\xe2\x80\x9d in\n         the transactions history on the main Venture page.\n         "]),
      /* S */Block.__(0, ["Once submitted, a payout behaves the same way as any other transaction\n         that is submitted to the Bitcoin network. For a payout to move from\n         unconfirmed status to a confirmed status, the transaction needs to be\n         added to the Bitcoin blockchain by a miner. Once a payout is confirmed\n         on the Bitcoin network, the status will be updated and the funds will\n         be transferred.\n         "])
    ]
  ],
  /* record */[
    /* q */"What is a Multisig wallet?",
    /* a : array */[
      /* S */Block.__(0, ["Multisig, short for Multisignature is a form of technology used to add\n         additional security for cryptocurrency transactions. Multisig refers to\n         requiring more than one key to authorize a Bitcoin transaction. You can\n         read more about Multisig here.\n         "]),
      /* S */Block.__(0, ["Within Misthos, each Venture has a multisig wallet at its core and\n         each Partner has custody of their unique private key. An endorsement\n         by a Partner is equivalent to signing with their private key. A\n         proposal is successful when enough Partners endorse it i.e sign with\n         their private key.\n         "])
    ]
  ],
  /* record */[
    /* q */"Who is a custodian of the multisig wallet?",
    /* a : array */[/* S */Block.__(0, ["A custodian of the multisig wallet is a Partner within a Venture.\n         Every Partner has custody of their unique private key.\n         "])]
  ],
  /* record */[
    /* q */"Who can see the transactions within a Venture?",
    /* a : array */[/* S */Block.__(0, ["All existing Partners within a Venture can see the transactions and\n         make proposals. Any Partner who has left the Venture has read-only\n         access and can see the state at time of leaving."])]
  ],
  /* record */[
    /* q */"What is the Network fee?",
    /* a : array */[/* S */Block.__(0, ["The Network fee is the transaction fee that is collected by the miners\n         on the Bitcoin network for processing and confirming transactions.\n         "])]
  ],
  /* record */[
    /* q */"What is a policy in Misthos?",
    /* a : array */[/* S */Block.__(0, ["A policy specifies the governance rules for how decisions are made\n         within Misthos.\n         "])]
  ],
  /* record */[
    /* q */"What policies are there within Misthos?\n        Can I change or modify these policies?",
    /* a : array */[/* S */Block.__(0, ["There are three default policies specified within Misthos. These are\n         hard-coded in the software and users do not have the option to change\n         them."])]
  ],
  /* record */[
    /* q */"What is the Policy for Payout Endorsements",
    /* a : array */[/* S */Block.__(0, ["Any Partner within a Venture can propose a payout. For a payout to be\n         successfully submitted, it requires N-of-N endorsements i.e all\n         Partners within a Venture need to unanimously endorse every payout."])]
  ],
  /* record */[
    /* q */"What is the Policy for Adding Partners",
    /* a : array */[/* S */Block.__(0, ["Any Partner within a Venture can propose the addition of a new Partner.\n         For the proposal to be successful, it requires N-of-N endorsements i.e\n         all Partners within a Venture need to unanimously endorse the proposal."])]
  ],
  /* record */[
    /* q */"What is the Policy for Removing Partners",
    /* a : array */[/* S */Block.__(0, ["Any Partner within a Venture can propose the removal of another\n         Partner. For the removal to be successful, this proposal requires\n         N-1-of-N endorsements. E.g If a Venture has four Partners, then three\n         Partners have to endorse the proposed removal."])]
  ],
  /* record */[
    /* q */"Where can I see the status of a payout?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("All payouts are shown in the transactions history and clicking on\n          the payout shows its status. A payout goes through the following\n          states:"),
            React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("b", undefined, ViewCommon.text("Pending: ")), ViewCommon.text("These are payouts that are proposed but are still pending some\n                 endorsements.")), React.createElement("li", undefined, React.createElement("b", undefined, ViewCommon.text("Submitted(Unconfirmed): ")), ViewCommon.text("These are payouts that have received all endorsements and\n                 submitted to the Bitcoin network.")), React.createElement("li", undefined, React.createElement("b", undefined, ViewCommon.text("Confirmed:")), ViewCommon.text("These payouts are confirmed on the Bitcoin network.")))
          ]])]
  ],
  /* record */[
    /* q */"How long does it take for a payout to be confirmed?",
    /* a : array */[
      /* S */Block.__(0, ["Within Misthos, the payout process only takes the time for all\n         Partners to endorse the payout. Once all endorsements are received,\n         then the payout is submitted as a transaction to the Bitcoin network.\n         This is shown as an unconfirmed payout in the transactions history."]),
      /* S */Block.__(0, ["Under normal network conditions, transactions submitted to the Bitcoin\n         network by Misthos should be confirmed within the next 60 minutes.\n         Due to variance in the time it takes for a block to be mined on the\n         Bitcoin blockchain can vary. "]),
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("Click "),
            React.createElement("a", {
                  href: "https://bitcoin.org/en/faq#why-do-i-have-to-wait-10-minutes"
                }, ViewCommon.text("here")),
            ViewCommon.text(" for more information")
          ]])
    ]
  ],
  /* record */[
    /* q */"What happens if a Partner rejects a payout?",
    /* a : array */[/* S */Block.__(0, ["The current endorsement policy requires all Partners to unanimously\n         endorse every payout for it to be submitted. If any Partner rejects a\n         payout, then the payout is cancelled and will not be submitted."])]
  ],
  /* record */[
    /* q */"What happens if a Partner leaves without endorsing a payout?",
    /* a : array */[/* S */Block.__(0, ["If an existing Partner leaves and there are pending payouts within the\n         system, then the remaining Partners have to remove the leaving partner.\n         Otherwise the pending payouts will be stuck and will never be submitted."])]
  ],
  /* record */[
    /* q */"Can a payout be cancelled or reversed within Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["Yes. Once a payout is proposed by a Partner, any of the remaining\n         Partners can chose to reject the payout to cancel it."]),
      /* S */Block.__(0, ["Once all the Partners are received, then the payout is automatically\n         submitted to the Bitcoin network and cannot be cancelled or reversed."])
    ]
  ],
  /* record */[
    /* q */"How can I remove a Partner within Misthos?",
    /* a : array */[
      /* S */Block.__(0, ["In order to remove a Partner, then one of the remaining Partners have\n         to submit a Partner removal proposal and this proposal needs to be\n         endorsed by enough Partners."]),
      /* S */Block.__(0, ["The Partner removal policy requires N-1 of N endorsements. E.g if a\n         Venture has four Partners, then in order to remove a Partner, then one\n         of remaining three Partners have to propose the removal of the fourth\n         Partner and this proposal needs to be endorsed by the other three\n         Partners."])
    ]
  ],
  /* record */[
    /* q */"How can I leave a Venture within Misthos?\n          Can I still have access to a Venture once I leave it?",
    /* a : array */[
      /* S */Block.__(0, ["To leave a Venture, either you or another Partner needs to propose\n         your removal. This proposal then needs to be endorsed by the remaining\n         Partners for the removal to be successful."]),
      /* S */Block.__(0, ["Once a Partner leaves a Venture, they will only have read-only access\n         to the state it was when the Partner left. The read-only access will be\n         available via the Venture link."])
    ]
  ],
  /* record */[
    /* q */"Can I come back to a Venture?",
    /* a : array */[/* S */Block.__(0, ["Yes, Any of the active Partners can propose and invite you back into\n         the Venture."])]
  ],
  /* record */[
    /* q */"Does Misthos have visibility/ access to my Ventures and my wallet account?",
    /* a : array */[
      /* S */Block.__(0, ["No. When you create a Venture within Misthos you connect it to your\n         Blockstack ID. By using a Blockstack ID you own the private key and\n         control all the data within your Venture. This private key never leaves\n         your device and is meant to stay on your laptop/phone. As long as no\n         one gets access to your private key, no one has access to your Ventures\n         and your wallet account. When you use Blockstack, by design, your\n         private keys are never sent to any remote servers."]),
      /* E */Block.__(1, [React.createElement("ul", undefined, React.createElement("li", undefined, ViewCommon.text("Misthos is an interface and you are using this interface to\n               interact/collaborate with other people on the Blockchain.")), React.createElement("li", undefined, ViewCommon.text("Misthos does not have access to your private keys and has no\n               visibility/access to your Venture and the financial transactions.")))])
    ]
  ],
  /* record */[
    /* q */"Where is my Venture data stored and how do I control who accesses it?",
    /* a : array */[
      /* S */Block.__(0, ["Using the Blockstack ID, you control where your data is stored (you\n         could run your own server or use your own cloud storage (Dropbox,\n         Amazon S3) and keep backups across all). You then use those places as\n         locations pointed to by the URLs in your Blockstack ID's zone file."]),
      /* E */Block.__(1, [/* array */[
            ViewCommon.text("You can find out more details on the Blockstack "),
            React.createElement("a", {
                  href: "https://blockstack.org/faq"
                }, ViewCommon.text("FAQ"))
          ]])
    ]
  ],
  /* record */[
    /* q */"Can Misthos recover my private key or reverse/ refund my transactions?",
    /* a : array */[/* E */Block.__(1, [/* array */[
            ViewCommon.text("No. Misthos cannot:"),
            React.createElement("ul", undefined, React.createElement("li", undefined, ViewCommon.text("Recover or change your private key.")), React.createElement("li", undefined, ViewCommon.text("Recover or reset your Blockstack password.")), React.createElement("li", undefined, ViewCommon.text("Access your Venture or your funds.")), React.createElement("li", undefined, ViewCommon.text("Reverse, cancel, or refund transactions.")), React.createElement("li", undefined, ViewCommon.text("Freeze accounts.")))
          ]])]
  ]
];

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.faq = faq;
/* faq Not a pure module */
