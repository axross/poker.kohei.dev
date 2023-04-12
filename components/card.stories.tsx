import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "components/card";
import { Rank, Suit } from "holdem";

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
    rank: Rank.Queen,
    suit: Suit.Heart,
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
    rank: Rank.Jack,
    suit: Suit.Diamond,
  },
  render: (props) => (
    <div className="text-2xl">
      Let&apos;s talk how to utilize <Card {...props} /> !
    </div>
  ),
};
