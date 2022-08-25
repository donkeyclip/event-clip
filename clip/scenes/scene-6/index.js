import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import {
  Height,
  Left,
  Opacity,
  Scale,
  Size,
  Top,
  Width,
} from "../../library/incidents";

const clip = new HTMLClip({
  html,
  css,
  selector: ".scene-6",
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  initParams: {
    fontSize: "@initParams.fontSize",
    color: "@initParams.color",
  },
});

clip.addIncident(Top("55%", ".image-wrapper", 1500, "easeInOutCubic"), 10000);
clip.addIncident(
  Width("550px", ".image-wrapper", 1500, "easeInOutCubic"),
  10000
);
clip.addIncident(
  Height("550px", ".image-wrapper", 1500, "easeInOutCubic"),
  10000
);
clip.addIncident(Top("100px", ".day-name", 1500, "easeInOutCubic"), 10000);
clip.addIncident(Left("0px", ".day-number", 1500, "easeInOutCubic"), 10400);
clip.addIncident(
  Width("550px", ".image-wrapper-background", 1500, "easeInOutCubic"),
  10400
);
clip.addIncident(
  Height("550px", ".image-wrapper-background", 1500, "easeInOutCubic"),
  10400
);
clip.addIncident(
  Top(
    "0%",
    ".name,.surname,.position-name",
    800,
    "easeInOutCubic",
    "@stagger(0, 400)"
  ),
  10800
);

clip.addIncident(Top("0%", ".speech-wrapper", 800, "easeInOutCubic"), 11000);
clip.addIncident(Opacity(1, ".speech", 800), 11200);

export default clip;
