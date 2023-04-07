import type { Meta, StoryObj } from "@storybook/react";
import { Rank, Suit } from "holdem";
import { CardList } from "~/components/card-list";

const meta: Meta<typeof CardList> = {
  title: "Components/CardList",
  component: CardList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardList>;

/**
 * A basic example of `<CardList>` usage.
 */
export const CommunityCards: Story = {
  args: {
    cards: [
      { rank: Rank.Ace, suit: Suit.Spade },
      { rank: Rank.King, suit: Suit.Club },
      { rank: Rank.Queen, suit: Suit.Heart },
      { rank: Rank.Jack, suit: Suit.Diamond },
    ],
  },
};

/**
 * `<Card>` also parses the children and use them as `props.cards`.
 */
export const CardPairFromChildren: Story = {
  args: {
    children: "AsKc",
  },
};

/**
 * An example that `<CardList>` appears in a heading element (e.g. `<h1>`).
 */
export const InHeading: Story = {
  args: {
    cards: [
      { rank: Rank.Ace, suit: Suit.Spade },
      { rank: Rank.King, suit: Suit.Club },
      { rank: Rank.Queen, suit: Suit.Heart },
    ],
  },
  render: (props) => (
    <div className="text-2xl text-slate-700 dark:text-slate-200">
      How can you play your hand in <CardList {...props} /> ?
    </div>
  ),
};
