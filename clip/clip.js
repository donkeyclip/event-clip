import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import scene2 from "./scenes/scene-2";
import scene3 from "./scenes/scene-3";
import scene4 from "./scenes/scene-4";
import scene5 from "./scenes/scene-5";
import scene6 from "./scenes/scene-6";
import scene7 from "./scenes/scene-7";
import scene8 from "./scenes/scene-8";
import initParamsValidationRules from "./initParamsValidationRules";
import { Opacity, Scale, Top } from "./library/incidents";

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
  fonts: [
    {
      type: `google-font`,
      src: `https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap`,
    },
  ],
});

clip.addIncident(scene1, 0);
clip.addIncident(scene2, 0);
clip.addIncident(scene3, 0);
clip.addIncident(scene4, 0);
clip.addIncident(scene5, 0);
clip.addIncident(scene6, 0);
clip.addIncident(scene7, 0);
clip.addIncident(scene8, 0);
clip.addIncident(Opacity(1, ".scene", 300), 1);
clip.addIncident(Scale(1, ".scene-1", 300), 1);
