import type { Meta, StoryObj } from "@storybook/react";
import { HeroPattern } from "~/components/hero-pattern";

const meta: Meta<typeof HeroPattern> = {
  title: "components/HeroPattern",
  component: HeroPattern,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeroPattern>;

export const Example: Story = {};
