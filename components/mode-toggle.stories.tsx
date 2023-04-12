import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "components/mode-toggle";

const meta: Meta<typeof ModeToggle> = {
  title: "components/ModeToggle",
  component: ModeToggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModeToggle>;

export const Example: Story = {};
