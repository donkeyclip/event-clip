import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Opacity, Scale, Size, Top, Width } from "../../library/incidents";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-8",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    color: "@initParams.color",
    subTitle: "@initParams.subTitle",
    eventLink: "@initParams.eventLink",
  },
});

clip.addIncident(Top("0%", ".text", 1500, "easeInOutCubic"), 19700);
clip.addIncident(Opacity(1, ".date-title,.link", 800), 19700);

export default clip;
