import { FC, HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { RankIcon, RankIconProps } from "~/components/rank-icon";
import { SuitIcon, SuitIconProps } from "~/components/suit-icon";

export interface CardProps extends HTMLAttributes<HTMLSpanElement> {
  rank?: RankIconProps["rank"];
  suit?: SuitIconProps["suit"];
  children?: string;
}

export const Card: FC<CardProps> = ({
  rank,
  suit,
  className,
  children,
  ...props
}) => {
  const resolvedRank = rank ?? parseRank(children[0]);
  const resolvedSuit = suit ?? parseSuit(children[1]);

  return (
    <span
      className={twMerge(
        "inline-flex items-center h-5 mx-0.5 px-1 bg-slate-500/10 border border-slate-500/10 rounded align-baseline select-none",
        resolvedSuit === "heart" && "bg-rose-500/10 border-rose-500/10",
        resolvedSuit === "diamond" && "bg-blue-500/10 border-blue-500/10",
        resolvedSuit === "club" && "bg-emerald-500/10 border-emerald-500/10",
        className
      )}
      {...props}
    >
      <RankIcon
        rank={resolvedRank}
        className={twMerge(
          "font-card-symbol text-slate-900 dark:text-slate-200 text-[18px] font-semibold leading-[14px]",
          resolvedSuit === "heart" && "text-rose-600 dark:text-rose-500",
          resolvedSuit === "diamond" && "text-blue-600 dark:text-blue-500",
          resolvedSuit === "club" && "text-emerald-600 dark:text-emerald-500"
        )}
      />

      <SuitIcon
        suit={resolvedSuit}
        className={twMerge(
          "w-3.5 h-3.5 text-slate-400 dark:text-slate-700",
          resolvedSuit === "spade" && "text-slate-900 dark:text-slate-200",
          resolvedSuit === "heart" && "text-rose-600 dark:text-rose-500",
          resolvedSuit === "diamond" && "text-blue-600 dark:text-blue-500",
          resolvedSuit === "club" && "text-emerald-600 dark:text-emerald-500"
        )}
      />
    </span>
  );
};

export function parseRank(rankChar: string): RankIconProps["rank"] {
  switch (rankChar) {
    case "A":
      return "ace";
    case "K":
      return "king";
    case "Q":
      return "queen";
    case "J":
      return "jack";
    case "T":
      return "ten";
    case "9":
      return "nine";
    case "8":
      return "eight";
    case "7":
      return "seven";
    case "6":
      return "six";
    case "5":
      return "five";
    case "4":
      return "four";
    case "3":
      return "trey";
    case "2":
      return "deuce";
  }
}

export function parseSuit(suitChar: string): SuitIconProps["suit"] {
  switch (suitChar) {
    case "s":
      return "spade";
    case "h":
      return "heart";
    case "d":
      return "diamond";
    case "c":
      return "club";
  }
}
