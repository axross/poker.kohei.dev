import type { Meta, StoryObj } from "@storybook/react";
import { GridPattern } from "components/grid-pattern";

const meta: Meta<typeof GridPattern> = {
  title: "components/GridPattern",
  component: GridPattern,
  tags: ["autodocs"],
  args: {
    width: 72,
    height: 59,
    x: "50%",
    y: 16,
    squares: [
      [0, 2],
      [1, 4],
    ],
  },
};

export default meta;
type Story = StoryObj<typeof GridPattern>;

export const Example: Story = {};
