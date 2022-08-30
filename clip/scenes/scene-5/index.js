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

clip.addIncident(Opacity(1, ".day-name", 400), 6300);
clip.addIncident(Left("0px", ".day-number", 800, "easeInOutCubic"), 6300);
clip.addIncident(Top("50%", ".image-wrapper", 800, "easeInOutCubic"), 6700);
clip.addIncident(Width("550px", ".image-wrapper", 800, "easeInOutCubic"), 6700);
clip.addIncident(
  Height("550px", ".image-wrapper", 800, "easeInOutCubic"),
  6700
);
clip.addIncident(
  Width("550px", ".image-wrapper-background", 800, "easeInOutCubic"),
  6900
);
clip.addIncident(
  Height("550px", ".image-wrapper-background", 800, "easeInOutCubic"),
  6900
);
clip.addIncident(
  Top(
    "0%",
    ".name,.surname,.position-name",
    800,
    "easeInOutCubic",
    "@stagger(0, 400)"
  ),
  6900
);
clip.addIncident(Top("79%", ".speech-wrapper", 800, "easeInOutCubic"), 7500);
clip.addIncident(Opacity(1, ".speech", 800), 8000);

clip.addIncident(Top("150%", ".speech-wrapper", 1000, "easeInOutCubic"), 10000);
clip.addIncident(
  Top("150%", ".day-number-wrapper", 1000, "easeInOutCubic"),
  10200
);
clip.addIncident(Top("150%", ".image-wrapper", 1200, "easeInOutCubic"), 10300);
clip.addIncident(
  Top("150%", ".position-wrapper", 1000, "easeInOutCubic"),
  10300
);
clip.addIncident(
  Top("150%", ".name-root,.day-name", 1200, "easeInOutCubic"),
  10300
);

export default clip;
