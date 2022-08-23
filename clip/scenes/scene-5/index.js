import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Opacity, Scale, Size, Top, Width } from "../../library/incidents";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-5",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

export default clip;
