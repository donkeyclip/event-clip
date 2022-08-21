import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { fadeOut } from "../../library/fadeOut";
import { scaleBig } from "../../library/scaleBig";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-1",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    color: "@initParams.color",
  },
});

export default clip;
