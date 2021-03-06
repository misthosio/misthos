// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE
'use strict';

var Css = require("bs-css/src/Css.js");
var Grid = require("./components/Grid.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Theme = require("./Theme.bs.js");
var Utils = require("../utils/Utils.bs.js");
var React = require("react");
var Colors = require("./Colors.bs.js");
var MInput = require("./components/MInput.bs.js");
var $$String = require("bs-platform/lib/js/string.js");
var Partner = require("./components/Partner.bs.js");
var Belt_Set = require("bs-platform/lib/js/belt_Set.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_List = require("bs-platform/lib/js/belt_List.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var WithWidth = require("./components/WithWidth.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Blockstack = require("../ffi/Blockstack.bs.js");
var ScrollList = require("./components/ScrollList.bs.js");
var ViewCommon = require("./ViewCommon.bs.js");
var Autosuggest = require("../ffi/Autosuggest.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var MTypography = require("./components/MTypography.bs.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var WarningsText = require("./text/WarningsText.bs.js");
var Belt_MapString = require("bs-platform/lib/js/belt_MapString.js");
var PrimitiveTypes = require("../application/PrimitiveTypes.bs.js");
var MaterialUi_List = require("@jsiebern/bs-material-ui/src/MaterialUi_List.bs.js");
var MaterialUi_Paper = require("@jsiebern/bs-material-ui/src/MaterialUi_Paper.bs.js");
var MaterialUi_Radio = require("@jsiebern/bs-material-ui/src/MaterialUi_Radio.bs.js");
var SingleActionButton = require("./components/SingleActionButton.bs.js");
var MaterialUi_MenuItem = require("@jsiebern/bs-material-ui/src/MaterialUi_MenuItem.bs.js");
var Match = require("autosuggest-highlight/match");
var Parse = require("autosuggest-highlight/parse");

var component = ReasonReact.reducerComponent("ManagePartners");

var icon = Css.style(/* :: */[
      Css.marginLeft(Css.px(Theme.space(-1))),
      /* :: */[
        Css.height(Css.px(44)),
        /* [] */0
      ]
    ]);

var stepper = Css.style(/* :: */[
      Css.padding2(Css.px(0), Css.px(Theme.space(1))),
      /* [] */0
    ]);

var autoCompleteContianerOverflow = Css.style(/* :: */[
      Css.children(/* :: */[
            Css.important(Css.overflow(Css.visible)),
            /* [] */0
          ]),
      /* [] */0
    ]);

var stepIconText = Css.style(/* :: */[
      Css.fontFamily(Theme.sourceSansPro),
      /* :: */[
        Css.fontWeight(/* `num */[
              5496390,
              600
            ]),
        /* :: */[
          Css.fontSize(Css.px(18)),
          /* :: */[
            Css.fontStyle(Css.normal),
            /* :: */[
              Css.lineHeight(/* `abs */[
                    4845682,
                    1.0
                  ]),
              /* :: */[
                Css.letterSpacing(Css.px(1)),
                /* :: */[
                  Css.unsafe("fill", "#" + Colors.uBlack),
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

var autoCompleteContainer = Css.style(/* :: */[
      Css.position(Css.relative),
      /* [] */0
    ]);

var suggestionsContainerOpen = Css.style(/* :: */[
      Css.position(Css.absolute),
      /* :: */[
        Css.zIndex(2000),
        /* :: */[
          Css.marginTop(Css.px(Theme.space(1))),
          /* :: */[
            Css.left(Css.px(0)),
            /* :: */[
              Css.right(Css.px(0)),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var suggestion = Css.style(/* :: */[
      Css.display(Css.block),
      /* [] */0
    ]);

var suggestionItem = Css.style(/* :: */[
      Css.fontSize(Css.px(14)),
      /* [] */0
    ]);

var suggestionsList = Css.style(/* :: */[
      Css.margin(Css.px(0)),
      /* :: */[
        Css.padding(Css.px(0)),
        /* :: */[
          Css.listStyleType(Css.none),
          /* [] */0
        ]
      ]
    ]);

var ventureLink = Css.style(/* :: */[
      Css.textDecoration(Css.underline),
      /* :: */[
        Css.color(/* currentColor */292050538),
        /* :: */[
          Css.hover(/* :: */[
                Css.color(Colors.misthosTeal),
                /* [] */0
              ]),
          /* [] */0
        ]
      ]
    ]);

var Styles = /* module */[
  /* icon */icon,
  /* stepper */stepper,
  /* autoCompleteContianerOverflow */autoCompleteContianerOverflow,
  /* stepIconText */stepIconText,
  /* autoCompleteContainer */autoCompleteContainer,
  /* suggestionsContainerOpen */suggestionsContainerOpen,
  /* suggestion */suggestion,
  /* suggestionItem */suggestionItem,
  /* suggestionsList */suggestionsList,
  /* ventureLink */ventureLink
];

function renderInputComponent(props) {
  return ReasonReact.element(undefined, undefined, MInput.make("Enter a Blockstack ID", /* `String */[
                  -976970511,
                  props.value
                ], props.onChange, true, true, undefined, undefined, undefined, Caml_option.some(props), undefined, undefined, /* array */[]));
}

function renderSuggestionsContainer(options) {
  return React.cloneElement(ReasonReact.element(undefined, undefined, MaterialUi_Paper.make(undefined, undefined, undefined, true, undefined, undefined, /* array */[])), options.containerProps, options.children);
}

function renderSuggestion(suggestion, vals) {
  var query = vals.query;
  var isHighlighted = vals.isHighlighted;
  var parts = Parse(suggestion, Match(suggestion, query));
  return ReasonReact.element(undefined, undefined, MaterialUi_MenuItem.make(suggestionItem, /* `String */[
                  -976970511,
                  "div"
                ], undefined, undefined, isHighlighted, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, /* array */[React.createElement("div", undefined, Belt_Array.mapWithIndexU(parts, (function (index, part) {
                              var match = part.highlight;
                              if (match) {
                                return React.createElement("span", {
                                            key: String(index),
                                            className: Css.style(/* :: */[
                                                  Css.fontWeight(/* `num */[
                                                        5496390,
                                                        600
                                                      ]),
                                                  /* [] */0
                                                ])
                                          }, ViewCommon.text(part.text));
                              } else {
                                return React.createElement("strong", {
                                            key: String(index),
                                            className: Css.style(/* :: */[
                                                  Css.fontWeight(/* `num */[
                                                        5496390,
                                                        300
                                                      ]),
                                                  /* [] */0
                                                ])
                                          }, ViewCommon.text(part.text));
                              }
                            })))]));
}

function filterSuggestions(prospectId, suggestions) {
  var inputLength = prospectId.length;
  var match = inputLength < 3;
  if (match) {
    return /* array */[];
  } else {
    return Belt_Array.keepU(suggestions, (function (s) {
                  return s.slice(0, inputLength) === prospectId;
                }));
  }
}

function addSuggestions(suggestionsMap, query, suggestions) {
  if (suggestions.length !== 0) {
    return Belt_MapString.set(suggestionsMap, query, suggestions);
  } else {
    return suggestionsMap;
  }
}

function getSuggestions(suggestions, _query) {
  while(true) {
    var query = _query;
    var match = Belt_MapString.get(suggestions, query);
    if (query.length < 3) {
      return /* array */[];
    } else if (match !== undefined) {
      return match;
    } else {
      _query = query.substring(0, query.length - 1 | 0);
      continue ;
    }
  };
}

function onSuggestionsFetchRequested(send, suggestions, arg) {
  var query = arg.value;
  if (arg.reason === "input-changed") {
    Curry._1(send, /* UpdateDisplayedSuggestions */Block.__(1, [query]));
  }
  Blockstack.fetchIds(getSuggestions(suggestions, query), arg.value).then((function (param) {
          return Promise.resolve(Curry._1(send, /* UpdateSuggestions */Block.__(0, [
                            param[0],
                            param[1]
                          ])));
        }));
  return /* () */0;
}

function make(viewData, proposePartnerCmds, proposeCmdStatus, removePartnerCmds, removeCmdStatus, _children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */(function (param) {
              var state = param[/* state */1];
              return /* record */[
                      /* viewData */viewData,
                      /* alertText */state[/* alertText */1],
                      /* canSubmitProposal */state[/* canSubmitProposal */2],
                      /* removeInputFrozen */state[/* removeInputFrozen */3],
                      /* inputs */state[/* inputs */4],
                      /* suggestions */state[/* suggestions */5],
                      /* displayedSuggestions */state[/* displayedSuggestions */6]
                    ];
            }),
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var inputs = state[/* inputs */4];
              var onSubmit = function (param) {
                return Curry._1(send, /* ProposePartner */1);
              };
              var partners = $$Array.of_list(Belt_List.keepMapU(state[/* viewData */0][/* partners */1], (function (partner) {
                          var match = partner[/* canProposeRemoval */3];
                          if (match) {
                            return Caml_option.some(ReasonReact.element(PrimitiveTypes.UserId[/* toString */0](partner[/* userId */0]), undefined, Partner.make(partner[/* userId */0], partner[/* name */2], Caml_option.some(ReasonReact.element(undefined, undefined, MaterialUi_Radio.make(/* `Bool */[
                                                            737456202,
                                                            Caml_obj.caml_equal(inputs[/* removePartnerId */1], Caml_option.some(partner[/* userId */0]))
                                                          ], undefined, /* Primary */-791844958, undefined, undefined, undefined, undefined, undefined, undefined, (function (_e, _b) {
                                                              return Curry._1(send, /* SelectRemovePartner */Block.__(3, [partner[/* userId */0]]));
                                                            }), undefined, undefined, undefined, undefined, /* array */[]))), undefined, (function (_e) {
                                                  return Curry._1(send, /* SelectRemovePartner */Block.__(3, [partner[/* userId */0]]));
                                                }), undefined, /* array */[])));
                          }
                          
                        })));
              var partial_arg = state[/* suggestions */5];
              return ReasonReact.element(undefined, undefined, Grid.make(Caml_option.some(ReasonReact.element(undefined, undefined, WithWidth.make(/* SM */18586, ViewCommon.text("Addition Proposal"), ViewCommon.text("Add"), /* array */[]))), Caml_option.some(ReasonReact.element(undefined, undefined, WithWidth.make(/* SM */18586, ViewCommon.text("Removal Proposal"), ViewCommon.text("Remove"), /* array */[]))), undefined, undefined, Caml_option.some(React.createElement("form", {
                                      onSubmit: (function (param) {
                                          return ViewCommon.ignoreEvent(onSubmit, param);
                                        })
                                    }, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("Add a Blockstack ID")])), ReasonReact.element(undefined, undefined, Autosuggest.make({
                                              container: autoCompleteContainer,
                                              suggestionsContainerOpen: suggestionsContainerOpen,
                                              suggestion: suggestion,
                                              suggestionsList: suggestionsList
                                            }, state[/* displayedSuggestions */6], (function (param) {
                                                return onSuggestionsFetchRequested(send, partial_arg, param);
                                              }), (function (param) {
                                                return Curry._1(send, /* ClearSuggestions */0);
                                              }), (function (s) {
                                                return s;
                                              }), (function (value) {
                                                return value.trim().length > 2;
                                              }), renderSuggestion, renderSuggestionsContainer, renderInputComponent, {
                                              value: inputs[/* prospectId */0],
                                              onChange: (function (_e, change) {
                                                  return Curry._1(send, /* ChangeNewPartnerId */Block.__(2, [change.newValue]));
                                                })
                                            }, /* array */[])), ReasonReact.element(undefined, undefined, SingleActionButton.make("Propose partner addition", undefined, onSubmit, undefined, undefined, state[/* canSubmitProposal */2], false, undefined, proposeCmdStatus, /* array */[])))), Caml_option.some(React.createElement("div", {
                                      className: ScrollList.containerStyles
                                    }, ReasonReact.element(undefined, undefined, MTypography.make(/* Body2 */-904051920, undefined, undefined, undefined, undefined, undefined, /* array */[ViewCommon.text("\n               To propose the removal of a Partner from this Venture,\n               select his or her name below and submit your proposal.\n               When enough Partners endorse this proposal, the Partner will be removed.\n               ")])), ReasonReact.element(undefined, undefined, ScrollList.make(/* array */[ReasonReact.element(undefined, undefined, MaterialUi_List.make(undefined, undefined, undefined, true, undefined, undefined, undefined, /* array */[partners]))])), ReasonReact.element(undefined, undefined, SingleActionButton.make("Propose Partner Removal", state[/* alertText */1], (function (param) {
                                                return Curry._1(send, /* RemovePartner */2);
                                              }), (function (param) {
                                                return Curry._1(send, /* FreezeRemoval */4);
                                              }), (function (param) {
                                                return Curry._1(send, /* ResetRemoval */5);
                                              }), Js_option.isSome(inputs[/* removePartnerId */1]), undefined, undefined, removeCmdStatus, /* array */[])))), undefined, undefined, /* array */[]));
            }),
          /* initialState */(function (param) {
              return /* record */[
                      /* viewData */viewData,
                      /* alertText */undefined,
                      /* canSubmitProposal */false,
                      /* removeInputFrozen */false,
                      /* inputs : record */[
                        /* prospectId */"",
                        /* removePartnerId */undefined
                      ],
                      /* suggestions */Belt_MapString.empty,
                      /* displayedSuggestions : array */[]
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (typeof action === "number") {
                switch (action) {
                  case 0 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */state[/* removeInputFrozen */3],
                                  /* inputs */state[/* inputs */4],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions : array */[]
                                ]]);
                  case 1 : 
                      var prospectId = $$String.trim(state[/* inputs */4][/* prospectId */0]);
                      if (prospectId === "") {
                        return /* NoUpdate */0;
                      } else {
                        Curry._1(proposePartnerCmds[/* proposePartner */1], PrimitiveTypes.UserId[/* fromString */1](prospectId));
                        return /* NoUpdate */0;
                      }
                  case 2 : 
                      Utils.mapOption((function (partnerId) {
                              return Curry._1(removePartnerCmds[/* proposePartnerRemoval */4], partnerId);
                            }), state[/* inputs */4][/* removePartnerId */1]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */undefined,
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */state[/* removeInputFrozen */3],
                                  /* inputs */state[/* inputs */4],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions */state[/* displayedSuggestions */6]
                                ]]);
                  case 3 : 
                      var init = state[/* inputs */4];
                      return /* UpdateWithSideEffects */Block.__(2, [
                                /* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */state[/* removeInputFrozen */3],
                                  /* inputs : record */[
                                    /* prospectId */"",
                                    /* removePartnerId */init[/* removePartnerId */1]
                                  ],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions */state[/* displayedSuggestions */6]
                                ],
                                (function (param) {
                                    return Curry._1(proposePartnerCmds[/* reset */0], /* () */0);
                                  })
                              ]);
                  case 4 : 
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */true,
                                  /* inputs */state[/* inputs */4],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions */state[/* displayedSuggestions */6]
                                ]]);
                  case 5 : 
                      return /* UpdateWithSideEffects */Block.__(2, [
                                /* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */false,
                                  /* inputs */state[/* inputs */4],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions */state[/* displayedSuggestions */6]
                                ],
                                (function (param) {
                                    return Curry._1(removePartnerCmds[/* reset */0], /* () */0);
                                  })
                              ]);
                  
                }
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      var suggestions = addSuggestions(state[/* suggestions */5], action[0], action[1]);
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */state[/* removeInputFrozen */3],
                                  /* inputs */state[/* inputs */4],
                                  /* suggestions */suggestions,
                                  /* displayedSuggestions */filterSuggestions(state[/* inputs */4][/* prospectId */0], getSuggestions(suggestions, state[/* inputs */4][/* prospectId */0]))
                                ]]);
                  case 1 : 
                      var value = action[0];
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */state[/* canSubmitProposal */2],
                                  /* removeInputFrozen */state[/* removeInputFrozen */3],
                                  /* inputs */state[/* inputs */4],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions */filterSuggestions(value, getSuggestions(state[/* suggestions */5], value))
                                ]]);
                  case 2 : 
                      var text = action[0];
                      var init$1 = state[/* inputs */4];
                      return /* Update */Block.__(0, [/* record */[
                                  /* viewData */state[/* viewData */0],
                                  /* alertText */state[/* alertText */1],
                                  /* canSubmitProposal */text !== "",
                                  /* removeInputFrozen */state[/* removeInputFrozen */3],
                                  /* inputs : record */[
                                    /* prospectId */$$String.lowercase(text),
                                    /* removePartnerId */init$1[/* removePartnerId */1]
                                  ],
                                  /* suggestions */state[/* suggestions */5],
                                  /* displayedSuggestions */state[/* displayedSuggestions */6]
                                ]]);
                  case 3 : 
                      var partner = action[0];
                      var match = state[/* removeInputFrozen */3];
                      var exit = 0;
                      if (typeof removeCmdStatus === "number") {
                        if (match) {
                          return /* NoUpdate */0;
                        } else {
                          exit = 1;
                        }
                      } else {
                        switch (removeCmdStatus.tag | 0) {
                          case 3 : 
                          case 4 : 
                              exit = 1;
                              break;
                          default:
                            return /* NoUpdate */0;
                        }
                      }
                      if (exit === 1) {
                        var match$1 = Belt_Set.has(state[/* viewData */0][/* alertPartners */2], partner);
                        var init$2 = state[/* inputs */4];
                        return /* UpdateWithSideEffects */Block.__(2, [
                                  /* record */[
                                    /* viewData */state[/* viewData */0],
                                    /* alertText */match$1 ? WarningsText.partnerRemovalRisk : undefined,
                                    /* canSubmitProposal */state[/* canSubmitProposal */2],
                                    /* removeInputFrozen */false,
                                    /* inputs : record */[
                                      /* prospectId */init$2[/* prospectId */0],
                                      /* removePartnerId */Caml_option.some(partner)
                                    ],
                                    /* suggestions */state[/* suggestions */5],
                                    /* displayedSuggestions */state[/* displayedSuggestions */6]
                                  ],
                                  (function (param) {
                                      return Curry._1(removePartnerCmds[/* reset */0], /* () */0);
                                    })
                                ]);
                      }
                      break;
                  
                }
              }
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var text = ViewCommon.text;

var extractString = ViewCommon.extractString;

var ignoreEvent = ViewCommon.ignoreEvent;

var ViewData = 0;

exports.text = text;
exports.extractString = extractString;
exports.ignoreEvent = ignoreEvent;
exports.ViewData = ViewData;
exports.component = component;
exports.Styles = Styles;
exports.renderInputComponent = renderInputComponent;
exports.renderSuggestionsContainer = renderSuggestionsContainer;
exports.renderSuggestion = renderSuggestion;
exports.filterSuggestions = filterSuggestions;
exports.addSuggestions = addSuggestions;
exports.getSuggestions = getSuggestions;
exports.onSuggestionsFetchRequested = onSuggestionsFetchRequested;
exports.make = make;
/* component Not a pure module */
