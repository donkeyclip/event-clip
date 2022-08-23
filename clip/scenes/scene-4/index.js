import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Opacity, Scale, Size, Top, Width } from "../../library/incidents";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-4",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

clip.addIncident(Top("50%", ".ball", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Size("3000px", ".blue-ball", 1600, "easeOutSine"), 5300);
clip.addIncident(Size("3000px", ".white-ball", 900, "easeInCubic"), 5300);
clip.addIncident(Opacity(0, ".ball", 1), 6120);

export default clip;
