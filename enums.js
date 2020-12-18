const BLOCKS = [
  {
    name: "header",
    object: {
      type: "header",
      text: {
        type: "plain_text",
        text: "",
        emoji: true,
      },
    },
  },
  {
    name: "summary",
    object: {
      type: "section",
      text: {
        type: "mrkdwn",
        text:
          "",
      },
    },
  },
  {
    name: "subtitle",
    object: {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*These requests had failing tests:*",
      },
    },
  },
  {
    name: "list",
    object: {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "",
      },
    },
  },
  {
    name: "investigate",
    object: {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "_Go to run results_",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: "Investigate",
          emoji: true,
        },
        value: "investigate",
        url: "https://google.com",
        action_id: "button-action",
      },
    },
  },
];

module.exports = { BLOCKS };
