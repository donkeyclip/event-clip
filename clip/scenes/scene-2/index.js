import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { fadeOut } from "../../library/fadeOut";
import { scaleBig } from "../../library/scaleBig";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-2",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

clip.addIncident(fadeOut(".container", 2000), 0);
clip.addIncident(scaleBig(".container", 2000), 0);
export default clip;
