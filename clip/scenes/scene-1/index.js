import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import { Left, Top } from "../../library/incidents";
import { flush } from "../../library/flush";

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

clip.addIncident(Top("-100%", ".cercle-1", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Top("10%", ".cercle-2", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Top("-10%", ".cercle-3", 1500, "easeInOutCubic"), 5000);
clip.addIncident(Left("30%", ".cercle-4", 10), 6000);
clip.addIncident(flush(), 6300);
clip.addIncident(
  Top(
    "100%",
    ".cercle-2,.cercle-4,.dot-box",
    1500,
    "easeInOutCubic",
    "@stagger(0, 200)"
  ),
  9800
);

clip.addIncident(Top("80%", ".cercle-1", 1500, "easeInOutCubic"), 9800);
clip.addIncident(Top("40%", ".cercle-3", 1500, "easeInOutCubic"), 9800);
clip.addIncident(
  Left(
    "100%",
    ".cercle-1,.cercle-3,.dot-box",
    1000,
    "easeInOutCubic",
    "@stagger(0, 200)"
  ),
  13000
);

export default clip;
