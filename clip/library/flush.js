import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const flush = () =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
          },
          props: {
            duration: 50,
            easing: "easeInCubic",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
          },
          props: {
            duration: 50,
            easing: "easeOutCubic",
          },
          position: 50,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
          },
          props: {
            duration: 50,
            easing: "easeInCubic",
          },
          position: 100,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
          },
          props: {
            duration: 50,
            easing: "easeOutCubic",
          },
          position: 150,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
          },
          props: {
            duration: 50,
            easing: "easeInCubic",
          },
          position: 200,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
          },
          props: {
            duration: 50,
            easing: "easeOutCubic",
          },
          position: 250,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
          },
          props: {
            duration: 50,
            easing: "easeOutCubic",
          },
          position: 300,
        },
      ],
    },
    {
      selector: ".dot-box",
      duration: 550,
    }
  );
