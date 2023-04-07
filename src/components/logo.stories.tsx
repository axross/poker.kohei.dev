import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "~/components/logo";

const meta: Meta<typeof Logo> = {
  title: "components/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Example: Story = {};
