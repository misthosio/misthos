[%bs.raw {|require('./app.css')|}];

[@bs.module] external logo : string = "./logo.svg";

let component = ReasonReact.statelessComponent("App");

let make = (~userData, _children) => {
  ...component,
  render: (_self) =>
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <SignIn />
        (
          switch userData {
          | None => <div> (ReasonReact.stringToElement("None")) </div>
          | Some(_) => <div> (ReasonReact.stringToElement("Some")) </div>
          }
        )
      </div>
    </div>
};
