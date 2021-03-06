open Css;

let uDarkGray = "1f2532";

let darkGray = hex(uDarkGray);

let clickableGray = rgba(0, 0, 0, 0.5);
let grayedOut = rgba(0, 0, 0, 0.2);

let uDevider = "979797";
let devider = hex(uDevider);

let uBlack = "000000";

let black = hex(uBlack);

let uWhite = "FFFFFF";

let white = hex(uWhite);

let uSucces = "33d321";

let success = hex(uSucces);

let uWarning = "f5a623";

let warning = hex(uWarning);

let uError = "ff3253";

let error = hex(uError);

let uRobinsEgg = "59f7f0";

let robinsEgg = hex(uRobinsEgg);

let uDeepAqua = "067781";

let deepAqua = hex(uDeepAqua);

let uMisthosTeal = "02a2b4";

let misthosTeal = hex(uMisthosTeal);

let uStrongPink = "ff006d";

let strongPink = hex(uStrongPink);

let uReddishOrange = "f65e25";

let reddishOrange = hex(uReddishOrange);

let gradient =
  linearGradient(
    deg(90),
    [
      (0, robinsEgg),
      (28, misthosTeal),
      (57, deepAqua),
      (80, strongPink),
      (100, reddishOrange),
    ],
  );

let uGradient = {j|linear-gradient(90deg, #$uRobinsEgg 0%, #$uMisthosTeal 28%, #$uDeepAqua 57%, #$uStrongPink 80%, #$uReddishOrange 100%)|j};

let gradientAqua =
  linearGradient(
    deg(75),
    [(0, robinsEgg), (49, misthosTeal), (100, deepAqua)],
  );

let uGradientAqua = {j|linear-gradient(75deg, #$uRobinsEgg, #$uMisthosTeal 49%, #$uDeepAqua)|j};

let uGradientAquaLight = {j|linear-gradient(87deg, rgba(89, 247, 240, 0.45), rgba(2, 162, 180, 0.45) 49%, rgba(6, 119, 129, 0.45))|j};

let gradientOrange =
  linearGradient(deg(75), [(0, strongPink), (100, reddishOrange)]);

let uGradientOrange = {j|linear-gradient(75deg, #$uStrongPink, #$uReddishOrange)|j};
