import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "components/search";

const meta: Meta<typeof Search> = {
  title: "components/Search",
  component: Search,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Example: Story = {};
