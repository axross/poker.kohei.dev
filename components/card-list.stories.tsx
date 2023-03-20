import type { Meta, StoryObj } from "@storybook/react";

import { CardList } from "./card-list";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
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
      { rank: "ace", suit: "spade" },
      { rank: "king", suit: "club" },
      { rank: "queen", suit: "heart" },
      { rank: "jack", suit: "diamond" },
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
      { rank: "ace", suit: "spade" },
      { rank: "king", suit: "club" },
      { rank: "queen", suit: "heart" },
    ],
  },
  render: (props) => (
    <div className="text-slate-700 dark:text-slate-200 text-2xl">
      How can you play your hand in <CardList {...props} /> ?
    </div>
  ),
};
