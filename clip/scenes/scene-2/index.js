import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Opacity, Top } from "../../library/incidents";

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

clip.addIncident(Top("0%", ".conf-title", 1000, "easeInOutCubic"), 0);
clip.addIncident(Top("0%", ".date-title", 800, "easeInOutCubic"), 1000);
clip.addIncident(
  Opacity(1, ".sponsor-title,.logo", 800, "@stagger(0, 1000)"),
  1800
);
export default clip;
