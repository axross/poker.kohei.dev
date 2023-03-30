import { Rank, Suit } from "holdem";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { RankIcon, RankIconProps } from "~/components/rank-icon";
import { SuitIcon, SuitIconProps } from "~/components/suit-icon";

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
  children,
  ...props
}) => {
  const resolvedRank = rank ?? (children[0] as Rank);
  const resolvedSuit = suit ?? (children[1] as Suit);

  return (
    <span
      className={twMerge(
        "inline-flex items-center h-[1.25em] px-[.25em] bg-slate-500/10 border border-slate-500/10 rounded align-baseline select-none",
        resolvedSuit === "h" && "bg-rose-500/10 border-rose-500/10",
        resolvedSuit === "d" && "bg-blue-500/10 border-blue-500/10",
        resolvedSuit === "c" && "bg-emerald-500/10 border-emerald-500/10",
        className
      )}
      {...props}
    >
      <RankIcon
        rank={resolvedRank}
        className={twMerge(
          "font-card-symbol text-slate-900 dark:text-slate-200 text-[1.125em] font-semibold leading-[.875em]",
          resolvedSuit === "h" && "text-rose-600 dark:text-rose-500",
          resolvedSuit === "d" && "text-blue-600 dark:text-blue-500",
          resolvedSuit === "c" && "text-emerald-600 dark:text-emerald-500"
        )}
      />

      <SuitIcon
        suit={resolvedSuit}
        className={twMerge(
          "w-[.875em] h-[.875em] text-slate-400 dark:text-slate-700",
          resolvedSuit === "s" && "text-slate-900 dark:text-slate-200",
          resolvedSuit === "h" && "text-rose-600 dark:text-rose-500",
          resolvedSuit === "d" && "text-blue-600 dark:text-blue-500",
          resolvedSuit === "c" && "text-emerald-600 dark:text-emerald-500"
        )}
      />
    </span>
  );
};
