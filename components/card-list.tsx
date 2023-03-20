import { FC, HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { parseRank, parseSuit } from "~/components/card";
import { RankIcon, RankIconProps } from "~/components/rank-icon";
import { SuitIcon, SuitIconProps } from "~/components/suit-icon";

export interface CardListProps extends HTMLAttributes<HTMLSpanElement> {
  cards?: { rank: RankIconProps["rank"]; suit: SuitIconProps["suit"] }[];
  children?: string;
}

export const CardList: FC<CardListProps> = ({
  cards,
  className,
  children,
  ...props
}) => {
  const resolvedCards = useMemo(() => {
    if (Array.isArray(cards) && cards.length >= 1) {
      return cards;
    }

    const cardsFromChildren = [];
    for (let i = 0; i < children.length; i += 2) {
      cardsFromChildren.push({
        rank: parseRank(children[i]),
        suit: parseSuit(children[i + 1]),
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
              "inline-flex items-center h-5 px-0.5 bg-slate-500/10 border-t border-b border-slate-500/10 align-baseline select-none",
              i === 0 && "pl-1 border-l rounded-l",
              i === resolvedCards.length - 1 && "pr-1 border-r rounded-r",
              suit === "heart" && "bg-rose-500/10 border-rose-500/10",
              suit === "diamond" && "bg-blue-500/10 border-blue-500/10",
              suit === "club" && "bg-emerald-500/10 border-emerald-500/10"
            )}
            key={i}
          >
            <RankIcon
              rank={rank}
              className={twMerge(
                "font-card-symbol text-slate-900 dark:text-slate-200 text-[18px] font-semibold leading-[14px]",
                suit === "heart" && "text-rose-600 dark:text-rose-500",
                suit === "diamond" && "text-blue-600 dark:text-blue-500",
                suit === "club" && "text-emerald-600 dark:text-emerald-500"
              )}
            />

            <SuitIcon
              suit={suit}
              className={twMerge(
                "w-3.5 h-3.5 text-slate-400 dark:text-slate-700",
                suit === "spade" && "text-slate-900 dark:text-slate-200",
                suit === "heart" && "text-rose-600 dark:text-rose-500",
                suit === "diamond" && "text-blue-600 dark:text-blue-500",
                suit === "club" && "text-emerald-600 dark:text-emerald-500"
              )}
            />
          </span>
        );
      })}
    </span>
  );
};
