import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "~/components/tag";

const meta: Meta<typeof Tag> = {
  title: "components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Lorem ipsum",
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const MediumEmerald: Story = {
  args: {
    variant: "medium",
    color: "emerald",
  },
};

export const SmallRose: Story = {
  args: {
    variant: "small",
    color: "rose",
  },
};
