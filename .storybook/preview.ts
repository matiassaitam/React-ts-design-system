import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Atoms", "Molecules", "Organisms", "Templates"],
        method: "alphabetical",
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
