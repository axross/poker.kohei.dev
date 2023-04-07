import { Rank, Suit } from "holdem";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { RankIcon, RankIconProps } from "~/components/rank-icon";
import { SuitIcon, SuitIconProps } from "~/components/suit-icon";
import { safeParseRank, safeParseSuit } from "~/lib/holdem";

export interface CardProps extends HTMLAttributes<HTMLSpanElement> {
  rank?: RankIconProps["rank"];
  suit?: SuitIconProps["suit"];
  children?: string;
}

/**
 * A presentation component that expresses a single card in a friendly way. Suitable as a leaf node in markdown documents.
 */
export const Card: FC<CardProps> = ({
  rank,
  suit,
  className,
  children = "",
  ...props
}) => {
  const resolvedRank = rank ?? safeParseRank(children[0]);
  const resolvedSuit = suit ?? safeParseSuit(children[1]);

  return (
    <span
      className={twMerge(
        "inline-flex h-[1.25em] select-none items-center rounded border border-slate-500/10 bg-slate-500/10 px-[.25em] align-baseline",
        resolvedSuit === Suit.Heart && "border-rose-500/10 bg-rose-500/10",
        resolvedSuit === Suit.Diamond && "border-blue-500/10 bg-blue-500/10",
        resolvedSuit === Suit.Club && "border-emerald-500/10 bg-emerald-500/10",
        className
      )}
      {...props}
    >
      <RankIcon
        rank={resolvedRank ?? undefined}
        className={twMerge(
          "font-card-symbol text-[1.125em] font-semibold leading-[.875em] text-slate-900 dark:text-slate-200",
          resolvedSuit === Suit.Heart && "text-rose-600 dark:text-rose-500",
          resolvedSuit === Suit.Diamond && "text-blue-600 dark:text-blue-500",
          resolvedSuit === Suit.Club && "text-emerald-600 dark:text-emerald-500"
        )}
      />

      <SuitIcon
        suit={resolvedSuit ?? undefined}
        className={twMerge(
          "h-[.875em] w-[.875em] text-slate-400 dark:text-slate-700",
          resolvedSuit === Suit.Spade && "text-slate-900 dark:text-slate-200",
          resolvedSuit === Suit.Heart && "text-rose-600 dark:text-rose-500",
          resolvedSuit === Suit.Diamond && "text-blue-600 dark:text-blue-500",
          resolvedSuit === Suit.Club && "text-emerald-600 dark:text-emerald-500"
        )}
      />
    </span>
  );
};
