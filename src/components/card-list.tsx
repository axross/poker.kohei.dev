import { Rank, Suit } from "holdem";
import { FC, HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { RankIcon, RankIconProps } from "~/components/rank-icon";
import { SuitIcon, SuitIconProps } from "~/components/suit-icon";
import { safeParseRank, safeParseSuit } from "~/lib/holdem";

export interface CardListProps extends HTMLAttributes<HTMLSpanElement> {
  cards?: { rank: RankIconProps["rank"]; suit: SuitIconProps["suit"] }[];
  children?: string;
}

/**
 * A presentation component that expresses multiple cards as a group. Suitable as a leaf node in markdown documents.
 */
export const CardList: FC<CardListProps> = ({
  cards,
  className,
  children = "",
  ...props
}) => {
  const resolvedCards = useMemo(() => {
    if (Array.isArray(cards) && cards.length >= 1) {
      return cards;
    }

    const cardsFromChildren = [];
    for (let i = 0; i < children.length; i += 2) {
      cardsFromChildren.push({
        rank: safeParseRank(children[i]),
        suit: safeParseSuit(children[i + 1]),
      });
    }

    return cardsFromChildren;
  }, [cards, children]);

  return (
    <span className={twMerge("inline-block", className)} {...props}>
      {resolvedCards.map(({ rank, suit }, i) => {
        return (
          <span
            className={twMerge(
              "inline-flex h-[1.25em] select-none items-center border-b border-t border-slate-500/10 bg-slate-500/10 px-[.25em] align-baseline",
              i === 0 && "rounded-l border-l pl-1",
              i === resolvedCards.length - 1 && "rounded-r border-r pr-1",
              suit === Suit.Heart && "border-rose-500/10 bg-rose-500/10",
              suit === Suit.Diamond && "border-blue-500/10 bg-blue-500/10",
              suit === Suit.Club && "border-emerald-500/10 bg-emerald-500/10"
            )}
            key={i}
          >
            <RankIcon
              rank={rank ?? undefined}
              className={twMerge(
                "font-card-symbol text-[1.125em] font-semibold leading-[.875em] text-slate-900 dark:text-slate-200",
                suit === Suit.Heart && "text-rose-600 dark:text-rose-500",
                suit === Suit.Diamond && "text-blue-600 dark:text-blue-500",
                suit === Suit.Club && "text-emerald-600 dark:text-emerald-500"
              )}
            />

            <SuitIcon
              suit={suit ?? undefined}
              className={twMerge(
                "h-[.875em] w-[.875em] text-slate-400 dark:text-slate-700",
                suit === Suit.Spade && "text-slate-900 dark:text-slate-200",
                suit === Suit.Heart && "text-rose-600 dark:text-rose-500",
                suit === Suit.Diamond && "text-blue-600 dark:text-blue-500",
                suit === Suit.Club && "text-emerald-600 dark:text-emerald-500"
              )}
            />
          </span>
        );
      })}
    </span>
  );
};
