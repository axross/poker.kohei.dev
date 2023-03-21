import type { Preview } from "@storybook/react";
import { useLayoutEffect } from "react";
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
    backgrounds: {
      default: globalThis.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
      grid: {
        cellSize: 16,
        opacity: 0.25,
        cellAmount: 4,
        offsetX: 8,
        offsetY: 8,
      },
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#111111",
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      useLayoutEffect(() => {
        if (context.globals.backgrounds.value === "#111111") {
          globalThis.document.body.classList.add("dark");
        } else {
          globalThis.document.body.classList.remove("dark");
        }
      }, [context.globals.backgrounds.value]);

      return Story();
    },
  ]
};

export default preview;
