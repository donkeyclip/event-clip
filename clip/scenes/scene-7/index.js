import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Opacity, Scale, Size, Top, Width } from "../../library/incidents";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-7",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    color: "@initParams.color",
  },
});

clip.addIncident(Top("0%", ".text", 1500, "easeInOutCubic"), 13700);
clip.addIncident(Opacity(1, ".date-title,.link", 800), 13700);

export default clip;
