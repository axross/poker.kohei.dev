import "./globals.css";
import type { Preview } from "@storybook/react";
import * as React from "react";
import { TooltipProvider } from "~/components/tooltip";
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
      disable: true,
      grid: {
        cellSize: 16,
        opacity: 0.25,
        cellAmount: 4,
        offsetX: 8,
        offsetY: 8,
      },
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Tailwind theme for components",
      defaultTheme: globalThis.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light",
      toolbar: {
        icon: "photo",
        items: [
          { value: "light", right: "☀️", title: "Light" },
          { value: "dark", right: "🌙", title: "Dark" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      React.useLayoutEffect(() => {
        if (context.globals.theme === "dark") {
          globalThis.document.body.classList.add("dark");
        } else {
          globalThis.document.body.classList.remove("dark");
        }
      }, [context.globals.theme]);

      return Story();
    },
    (Story) => <TooltipProvider>{Story()}</TooltipProvider>,
  ],
};

export default preview;
