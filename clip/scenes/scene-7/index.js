import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "./index.css";
import {
  Opacity,
  Scale,
  Size,
  Top,
  Width,
  Left,
  Right,
} from "../../library/incidents";

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
    venue: "@initParams.venue",
  },
});

clip.addIncident(
  Left("1000px", ".venue-image-wrapper", 1700, "easeInOutCubic"),
  13100
);
clip.addIncident(Left("1560px", ".cercle-1", 1700, "easeInOutCubic"), 13000);
clip.addIncident(Left("250px", ".cercle-2", 1700, "easeInOutCubic"), 13000);

clip.addIncident(
  Right("0%", ".hall-wrapper,.building-wrapper", 1500, "easeInOutCubic"),
  14200
);
clip.addIncident(Top("0%", ".address-wrapper", 1500, "easeInOutCubic"), 14300);

clip.addIncident(
  Top(
    "130%",
    ".cercle-2,.text-wrapper,.venue-image-wrapper,.cercle-1",
    1000,
    "easeInOutCubic",
    "@stagger(0, 200)"
  ),
  18000
);

clip.addIncident(
  Top("-100%", ".address-wrapper", 1000, "easeInOutCubic"),
  18300
);

export default clip;
