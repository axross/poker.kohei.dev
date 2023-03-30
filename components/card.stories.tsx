import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./card";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

/**
 * A basic example of `<Card>` usage.
 */
export const HeartOfQueen: Story = {
  args: {
    rank: "Q",
    suit: "h",
  },
};

/**
 * `<Card>` also parses the children and use them as `props.rank` and `props.suit`.
 */
export const KingOfClubFromChildren: Story = {
  args: {
    children: "Kc",
  },
};

/**
 * An example that `<Card>` appears in a heading element (e.g. `<h1>`).
 */
export const InHeading: Story = {
  args: {
    rank: "J",
    suit: "d",
  },
  render: (props) => (
    <div className="text-2xl">
      Let's talk how to utilize <Card {...props} /> !
    </div>
  ),
};
