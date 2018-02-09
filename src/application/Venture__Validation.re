open PrimitiveTypes;

open Event;

type prospect = {
  userId,
  supporterIds: list(userId),
  pubKey: string,
  policy: Policy.t
};

type contribution = {
  supporterIds: list(userId),
  policy: Policy.t
};

type partnerLabelProcess = {
  partnerId: userId,
  supporterIds: list(userId),
  labelId,
  policy: Policy.t
};

type state = {
  ventureName: string,
  systemPubKey: string,
  metaPolicy: Policy.t,
  addPartnerPolicy: Policy.t,
  partnerIds: list(userId),
  partnerAddresses: list(string),
  partnerPubKeys: list((string, userId)),
  addPartnerLabelPolicy: Policy.t,
  partnerLabels: list((userId, list(labelId))),
  partnerLabelProcesses: list((processId, partnerLabelProcess)),
  prospects: list((processId, prospect)),
  acceptContributionPolicy: Policy.t,
  contributions: list((processId, contribution))
};

let makeState = () => {
  ventureName: "",
  systemPubKey: "",
  partnerIds: [],
  partnerAddresses: [],
  partnerPubKeys: [],
  partnerLabels: [],
  addPartnerLabelPolicy: Policy.absolute,
  metaPolicy: Policy.absolute,
  addPartnerPolicy: Policy.absolute,
  prospects: [],
  acceptContributionPolicy: Policy.absolute,
  contributions: [],
  partnerLabelProcesses: []
};

let apply = (event: Event.t, state) =>
  switch event {
  | VentureCreated({
      ventureName,
      creatorId,
      creatorPubKey,
      metaPolicy,
      systemIssuer
    }) => {
      ...state,
      ventureName,
      partnerIds: [creatorId, ...state.partnerIds],
      partnerAddresses: [
        Utils.addressFromPublicKey(creatorPubKey),
        ...state.partnerAddresses
      ],
      partnerPubKeys: [(creatorPubKey, creatorId), ...state.partnerPubKeys],
      systemPubKey: systemIssuer |> Utils.publicKeyFromKeyPair,
      metaPolicy,
      addPartnerPolicy: metaPolicy,
      acceptContributionPolicy: metaPolicy
    }
  | PartnerProposed({processId, supporterId, policy, data}) => {
      ...state,
      prospects: [
        (
          processId,
          {
            userId: data.id,
            pubKey: data.pubKey,
            supporterIds: [supporterId],
            policy
          }
        ),
        ...state.prospects
      ]
    }
  | PartnerEndorsed({processId, supporterId}) => {
      ...state,
      prospects:
        state.prospects
        |> List.map(((pId, p: prospect)) =>
             ProcessId.eq(pId, processId) ?
               (
                 processId,
                 {...p, supporterIds: [supporterId, ...p.supporterIds]}
               ) :
               (processId, p)
           )
    }
  | PartnerAccepted({processId, data}) => {
      ...state,
      partnerIds: [data.id, ...state.partnerIds],
      partnerAddresses: [
        Utils.addressFromPublicKey(data.pubKey),
        ...state.partnerAddresses
      ],
      partnerPubKeys: [(data.pubKey, data.id), ...state.partnerPubKeys],
      prospects:
        state.prospects
        |> List.filter(((pId, _)) => ProcessId.neq(pId, processId))
    }
  | PartnerLabelProposed({processId, supporterId, policy, data}) => {
      ...state,
      partnerLabelProcesses: [
        (
          processId,
          {
            partnerId: data.partnerId,
            labelId: data.labelId,
            policy,
            supporterIds: [supporterId]
          }
        ),
        ...state.partnerLabelProcesses
      ]
    }
  | PartnerLabelEndorsed({processId, supporterId}) => {
      ...state,
      partnerLabelProcesses:
        state.partnerLabelProcesses
        |> List.map(((pId, process)) =>
             ProcessId.eq(pId, processId) ?
               (
                 pId,
                 {
                   ...process,
                   supporterIds: [supporterId, ...process.supporterIds]
                 }
               ) :
               (pId, process)
           )
    }
  | PartnerLabelAccepted({data}) => {
      ...state,
      partnerLabels:
        state.partnerLabels
        |> List.map(((pId, labels)) =>
             UserId.eq(pId, data.partnerId) ?
               (data.partnerId, [data.labelId, ...labels]) : (pId, labels)
           )
    }
  | ContributionProposed({processId, supporterId, policy}) => {
      ...state,
      contributions: [
        (processId, {policy, supporterIds: [supporterId]}),
        ...state.contributions
      ]
    }
  | ContributionEndorsed({processId, supporterId}) => {
      ...state,
      contributions:
        state.contributions
        |> List.map(((cProcess, c: contribution)) =>
             ProcessId.eq(cProcess, processId) ?
               (
                 cProcess,
                 {...c, supporterIds: [supporterId, ...c.supporterIds]}
               ) :
               (cProcess, c)
           )
    }
  | ContributionAccepted(_) => state
  };

type result =
  | Ok
  | InvalidIssuer
  | UnknownProcessId
  | BadData
  | DuplicateEndorsement
  | PolicyMissmatch
  | PolicyNotFulfilled;

let validateProposal =
    (
      {policy, supporterId}: EventTypes.proposal('a),
      correctPolicy,
      {partnerPubKeys},
      issuerPubKey
    ) =>
  if (Policy.neq(policy, correctPolicy)) {
    PolicyMissmatch;
  } else if (UserId.neq(
               partnerPubKeys |> List.assoc(issuerPubKey),
               supporterId
             )) {
    InvalidIssuer;
  } else {
    Ok;
  };

let validateEndorsement =
    (
      {processId, supporterId}: EventTypes.endorsement,
      supporters: list((processId, list(userId))),
      {partnerPubKeys},
      issuerPubKey
    ) =>
  try {
    let supporterIds = supporters |> List.assoc(processId);
    if (UserId.neq(partnerPubKeys |> List.assoc(issuerPubKey), supporterId)) {
      InvalidIssuer;
    } else if (supporterIds |> List.mem(supporterId)) {
      DuplicateEndorsement;
    } else {
      Ok;
    };
  } {
  | Not_found => UnknownProcessId
  };

let validatePartnerAccepted =
    (
      {processId, data}: Partner.Acceptance.t,
      {prospects, partnerIds},
      _issuerPubKey
    ) =>
  try {
    let prospect = prospects |> List.assoc(processId);
    if (UserId.neq(prospect.userId, data.id)) {
      BadData;
    } else if (prospect.pubKey != data.pubKey) {
      BadData;
    } else if (Policy.fulfilled(
                 ~eligable=partnerIds,
                 ~endorsed=prospect.supporterIds,
                 prospect.policy
               )
               == false) {
      PolicyNotFulfilled;
    } else {
      Ok;
    };
  } {
  | Not_found => UnknownProcessId
  };

let validatePartnerLabelAccepted =
    (
      {processId, data}: PartnerLabel.Acceptance.t,
      {partnerLabelProcesses, partnerIds},
      _issuerPubKey
    ) =>
  try {
    let process = partnerLabelProcesses |> List.assoc(processId);
    if (UserId.neq(process.partnerId, data.partnerId)) {
      BadData;
    } else if (LabelId.neq(process.labelId, data.labelId)) {
      BadData;
    } else if (Policy.fulfilled(
                 ~eligable=partnerIds,
                 ~endorsed=process.supporterIds,
                 process.policy
               )
               == false) {
      PolicyNotFulfilled;
    } else {
      Ok;
    };
  } {
  | Not_found => UnknownProcessId
  };

let validateContributionAccepted =
    (
      {processId}: Contribution.Acceptance.t,
      {contributions, partnerIds},
      _issuerPubKey
    ) =>
  try {
    let contribution = contributions |> List.assoc(processId);
    if (Policy.fulfilled(
          ~eligable=partnerIds,
          ~endorsed=contribution.supporterIds,
          contribution.policy
        )
        == false) {
      PolicyNotFulfilled;
    } else {
      Ok;
    };
  } {
  | Not_found => UnknownProcessId
  };

let validateEvent =
  fun
  | VentureCreated(_) => ((_, _) => Ok)
  | PartnerProposed(proposal) => (
      state =>
        validateProposal(proposal, state.acceptContributionPolicy, state)
    )
  | PartnerEndorsed(event) => (
      state =>
        validateEndorsement(
          event,
          state.contributions
          |> List.map(((pId, p: contribution)) => (pId, p.supporterIds)),
          state
        )
    )
  | PartnerAccepted(event) => validatePartnerAccepted(event)
  | PartnerLabelProposed(proposal) => (
      state => validateProposal(proposal, state.addPartnerLabelPolicy, state)
    )
  | PartnerLabelEndorsed(event) => (
      state =>
        validateEndorsement(
          event,
          state.partnerLabelProcesses
          |> List.map(((pId, p: partnerLabelProcess)) => (pId, p.supporterIds)),
          state
        )
    )
  | PartnerLabelAccepted(event) => validatePartnerLabelAccepted(event)
  | ContributionProposed(proposal) => (
      state =>
        validateProposal(proposal, state.acceptContributionPolicy, state)
    )
  | ContributionEndorsed(event) => (
      state =>
        validateEndorsement(
          event,
          state.contributions
          |> List.map(((pId, c: contribution)) => (pId, c.supporterIds)),
          state
        )
    )
  | ContributionAccepted(event) => validateContributionAccepted(event);

let validate = (state, {event, issuerPubKey}: EventLog.item) =>
  switch (
    event,
    Event.isSystemEvent(event),
    state.partnerPubKeys |> List.mem_assoc(issuerPubKey)
  ) {
  | (VentureCreated(_), _, _) => Ok
  | (_, false, false) => InvalidIssuer
  | (_, true, _) when issuerPubKey != state.systemPubKey => InvalidIssuer
  | _ => validateEvent(event, state, issuerPubKey)
  };
