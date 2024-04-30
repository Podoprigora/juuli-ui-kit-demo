import React from "react";
import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Stories, ArgTypes, Source } from "@storybook/blocks";

import "@fontsource-variable/plus-jakarta-sans";

import { ThemeProvider } from "../src/components/theme";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgTypes />
          <Stories />
        </>
      ),
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
