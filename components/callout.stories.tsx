import type { Meta, StoryObj } from "@storybook/react";

import { Callout } from "./callout";

const meta: Meta<typeof Callout> = {
  title: "Components/Callout",
  component: Callout,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Callout>;

/**
 * `<Callout>` usage example to add a note.
 */
export const Note: Story = {
  args: {
    children: "This adds a note in the content.",
  },
};

/**
 * `<Callout>` usage example to raise a warning.
 */
export const Warning: Story = {
  args: {
    intent: "warning",
    children: "This raises a warning to watch out for.",
  },
};

/**
 * `<Callout>` usage example to draw attention to important information.
 */
export const Info: Story = {
  args: {
    intent: "info",
    children: "This draws attention to important information.",
  },
};

/**
 * `<Callout>` usage example to suggest a helpful tip.
 */
export const Tip: Story = {
  args: {
    intent: "tip",
    children: "This suggests a helpful tip.",
  },
};

/**
 * `<Callout>` usage example to bring us a checked status.
 */
export const Check: Story = {
  args: {
    intent: "check",
    children: "This brings us a checked status.",
  },
};
