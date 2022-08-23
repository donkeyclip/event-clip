import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Scale, Top } from "../../library/incidents";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-3",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

clip.addIncident(Scale(1.3, ".waves", 5000), 0);

export default clip;
