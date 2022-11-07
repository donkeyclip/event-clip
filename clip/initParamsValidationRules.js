export default {
  color: {
    label: "Text Color",
    type: "color",
    optional: true,
    default: "white",
  },
  title: {
    type: "string",
    label: "Title",
  },
  subTitle: {
    type: "string",
    label: "Subtitle",
  },
  eventLink: {
    type: "string",
    label: "Event Link",
  },
  sponsors: {
    label: "Sponsors",
    type: "array",
    min: 3,
    max: 3,
    items: {
      type: "string",
    },
  },
  speekers: {
    label: "Speekers",
    type: "array",
    min: 2,
    max: 2,
    items: {
      type: "object",
      props: {
        dayName: {
          type: "string",
        },
        dayNumber: {
          type: "number",
        },
        name: { type: "string" },
        surname: { type: "string" },
        positionName: { type: "string" },
        speech: { type: "string" },
        img: { type: "string" },
      },
    },
  },
};
