import type { Decorator, Parameters, Preview } from "@storybook/react";
import * as React from "react";
import "~/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const parameters: Parameters = {
  // TODO:
  // `backgrounds` parameters are not passed to docs and stories.
  // i need to take a look into the source
  backgrounds: {
    default: globalThis.matchMedia("(prefers-color-scheme: dark)").matches
      ? "nextra-dark"
      : "nextra-light",
    grid: {
      cellSize: 16,
      opacity: 0.25,
      cellAmount: 4,
      offsetX: 8,
      offsetY: 8,
    },
    values: [
      {
        name: "nextra-light",
        value: "#ffffff",
      },
      {
        name: "nextra-dark",
        value: "#111111",
      },
    ],
  },
  otherParameter: {
    hello: "world!",
  },
};

export const decorators: Decorator[] = [
  (Story, { globals }) => {
    React.useLayoutEffect(() => {
      if (globals.backgrounds.value === "#111111") {
        globalThis.document.body.classList.add("dark");
      } else {
        globalThis.document.body.classList.remove("dark");
      }
    }, [globals.backgrounds.value]);

    return <Story />;
  },
];

export default preview;
