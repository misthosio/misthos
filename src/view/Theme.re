type t;

[@bs.module "material-ui/styles"]
external createMuiTheme : Js.t({..}) => t = "";

external toJsUnsafe : t => Js.t({..}) = "%identity";

let sourceSansPro = {|"Source Sans Pro", sans-serif|};

let oswald = {|"Oswald", sans-serif|};

let spacingBase = 8;

let space = factor => factor * spacingBase;

let theme =
  createMuiTheme({
    "palette": {
      "primary": {
        "main": "#" ++ Colors.uMisthosTeal,
      },
      "background": {
        "default": "#FFFFFF",
      },
    },
    "typography": {
      "fontFamily": sourceSansPro,
      "display4": {
        "fontFamily": oswald,
        "textTransform": "uppercase",
        "fontSize": "124px",
        "color": "#000000",
        "letterSpacing": "0px",
        "fontWeight": 700,
        "lineHeight": "112px",
      },
      "display3": {
        "fontSize": "92px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 600,
        "lineHeight": "92px",
      },
      "display2": {
        "fontSize": "92px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 300,
        "lineHeight": "92px",
      },
      "display1": {
        "fontSize": "24px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 600,
        "lineHeight": "32px",
      },
      "headline": {
        "fontFamily": oswald,
        "textTransform": "uppercase",
        "fontSize": "30px",
        "color": "#ffffff",
        "letterSpacing": "0px",
        "fontWeight": 700,
        "lineHeight": "30px",
      },
      "title": {
        "fontFamily": oswald,
        "textTransform": "uppercase",
        "fontSize": "26px",
        "color": "#000000",
        "letterSpacing": "0px",
        "fontWeight": 600,
        "lineHeight": "32px",
      },
      "subheading": {
        "fontSize": "30px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 600,
        "lineHeight": "normal",
      },
      "body2": {
        "fontSize": "16px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 600,
        "lineHeight": "19px",
      },
      "body1": {
        "fontSize": "16px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 300,
        "lineHeight": "19px",
      },
      "caption": {
        "fontSize": "14px",
        "color": "#000000",
        "letterSpacing": "0.5px",
        "fontWeight": 600,
        "lineHeight": "18px",
      },
      "button": {
        "fontFamily": oswald,
        "textTransform": "uppercase",
        "fontSize": "18px",
        "color": "#000000",
        "letterSpacing": "0.7px",
        "fontWeight": 700,
        "lineHeight": "26px",
      },
    },
    "spacing": {
      "unit": spacingBase,
    },
  });