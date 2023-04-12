import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/button";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    children: "Explore Docs",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const TextAndArrow: Story = {
  args: {
    variant: "text",
    arrow: "right",
  },
};
