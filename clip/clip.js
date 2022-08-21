import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import initParamsValidationRules from "./initParamsValidationRules";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts:[ {
    type: `google-font`,
    src: `https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap`,
  },]
});

clip.addIncident(scene1, 0);
clip.addIncident(scene2, 0);
// https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap/