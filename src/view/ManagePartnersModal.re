include ViewCommon;

open PrimitiveTypes;

[@bs.module] external remove : string = "../assets/img/remove-partner.svg";

module ViewData = ViewModel.ManagePartnersView;

type inputs = {prospectId: string};

type state = {
  viewData: ViewData.t,
  canSubmitProposal: bool,
  inputs,
};

type action =
  | ChangeNewPartnerId(string)
  | ProposePartner
  | RemovePartner(UserId.t)
  | AddAnother;

let component = ReasonReact.reducerComponent("ManagePartners");

module Styles = {
  open Css;
  let lenght = px(Theme.space(3));
};

let make =
    (
      ~viewData: ViewData.t,
      ~proposePartnerCmds: CommandExecutor.commands,
      ~proposeCmdStatus: CommandExecutor.cmdStatus,
      ~removePartnerCmds: CommandExecutor.commands,
      ~removeCmdStatus: CommandExecutor.cmdStatus,
      _children,
    ) => {
  ...component,
  initialState: () => {
    inputs: {
      prospectId: "",
    },
    canSubmitProposal: false,
    viewData,
  },
  willReceiveProps: ({state}) => {...state, viewData},
  reducer: (action, state) =>
    switch (action) {
    | ChangeNewPartnerId(text) =>
      ReasonReact.Update({
        ...state,
        canSubmitProposal: text != "",
        inputs: {
          prospectId: text,
        },
      })
    | ProposePartner =>
      switch (String.trim(state.inputs.prospectId)) {
      | "" => ReasonReact.NoUpdate
      | prospectId =>
        proposePartnerCmds.proposePartner(
          ~prospectId=prospectId |> UserId.fromString,
        );
        ReasonReact.NoUpdate;
      }
    | RemovePartner(partnerId) =>
      removePartnerCmds.proposePartnerRemoval(~partnerId);
      ReasonReact.NoUpdate;
    | AddAnother =>
      ReasonReact.UpdateWithSideEffects(
        {
          ...state,
          inputs: {
            prospectId: "",
          },
        },
        ((_) => proposePartnerCmds.reset()),
      )
    },
  render: ({send, state: {canSubmitProposal, viewData, inputs}}) => {
    let activeStep =
      switch (proposeCmdStatus) {
      | Success(_) => 1
      | _ => 0
      };
    let partners =
      ReasonReact.array(
        Array.of_list(
          viewData.partners
          |. Belt.List.keepMapU((. partner: ViewData.partner) =>
               partner.canProposeRemoval ?
                 Some(
                   <Partner
                     key=(partner.userId |> UserId.toString)
                     partnerId=partner.userId
                     name=?partner.name
                     button=MaterialUi.(
                              <IconButton
                                onClick=(
                                  _e => send(RemovePartner(partner.userId))
                                )>
                                <img src=remove alt="Remove" />
                              </IconButton>
                            )
                   />,
                 ) :
                 None
             ),
        ),
      );
    let icon = index =>
      <svg width="44" height="44" viewBox="0 0 44 44">
        <defs>
          <linearGradient
            id="a" x1="162.467%" x2="-41.102%" y1="29.557%" y2="66.287%">
            <stop offset="0%" stopColor="#05CFDB" />
            <stop offset="100%" stopColor="#02A2B4" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <circle cx="21" cy="21" r="21" stroke="#000" />
          <circle cx="21" cy="21" r="18" fill="url(#a)" />
        </g>
        <text x="22" y="27" textAnchor="middle">
          (index + 1 |> string_of_int |> text)
        </text>
      </svg>;
    <Body2
      titles=["Add a partner", "Remove a partner"]
      body1=
        <div>
          MaterialUi.(
            <Stepper orientation=`Vertical activeStep=(`Int(activeStep))>
              <Step key="enter-id">
                <StepLabel icon=(icon(0))>
                  ("ADD A BLOCKSTACK ID" |> text)
                </StepLabel>
                <StepContent>
                  <MInput
                    placeholder="Enter a Blockstack ID"
                    value=(`String(inputs.prospectId))
                    onChange=(
                      e => send(ChangeNewPartnerId(extractString(e)))
                    )
                    autoFocus=false
                    fullWidth=true
                  />
                  <ProposeButton
                    onPropose=(() => send(ProposePartner))
                    canSubmitProposal
                    withConfirmation=false
                    proposeText="Propose partner"
                    cmdStatus=proposeCmdStatus
                  />
                </StepContent>
              </Step>
              <Step>
                <StepLabel icon=(icon(1))>
                  ("SHARE THE VENTURE URL" |> text)
                </StepLabel>
                <StepContent>
                  <MTypography variant=`Body2>
                    (
                      {js|
               Please send the following URL to the proposed Partner so they can access the Venture:
               |js}
                      |> text
                    )
                  </MTypography>
                  <MTypography variant=`Body2>
                    (viewData.joinVentureUrl |> text)
                  </MTypography>
                  <MButton variant=Flat onClick=(_e => send(AddAnother))>
                    (text("Add Another"))
                  </MButton>
                </StepContent>
              </Step>
            </Stepper>
          )
        </div>
      body2=
        <div>
          <MTypography variant=`Body2>
            (
              {js|
               To propose the removal of a partner from this venture,
               select his or her name below and submit your proposal.
               When enough partners endorse this proposal, the partner will be removed.
               |js}
              |> text
            )
          </MTypography>
          <MaterialUi.List disablePadding=true> partners </MaterialUi.List>
          <CommandExecutor.Status cmdStatus=removeCmdStatus action=Proposal />
        </div>
    />;
  },
};
