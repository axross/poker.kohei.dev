import { FC, HTMLAttributes, SVGAttributes, useMemo } from "react";
import { twJoin } from "tailwind-merge";
import { ClubIcon, DiamondIcon, HeartIcon, SpadeIcon } from "./suit-icon";

export interface PlayingCardProps extends HTMLAttributes<HTMLSpanElement> {
  rank:
    | "A"
    | "K"
    | "Q"
    | "J"
    | "T"
    | "9"
    | "8"
    | "7"
    | "6"
    | "5"
    | "4"
    | "3"
    | "2"
    | "X";
  suit: "s" | "h" | "d" | "c" | "x" | "=";
}

export const PlayingCard: FC<PlayingCardProps> = ({
  rank,
  suit,
  className,
  ...props
}) => {
  const SuitIcon = useMemo(() => {
    switch (suit) {
      case "h":
        return HeartIcon;
      case "d":
        return DiamondIcon;
      case "c":
        return ClubIcon;
      default:
        return SpadeIcon;
    }
  }, [suit]);

  return (
    <span
      className={twJoin(
        "inline-flex items-center h-5 mx-0.5 px-1 rounded-sm align-baseline select-none",
        suit === "s" && "bg-slate-500/10",
        suit === "h" && "bg-rose-500/10",
        suit === "d" && "bg-blue-500/10",
        suit === "c" && "bg-emerald-500/10",
        className
      )}
      {...props}
    >
      <span
        className={twJoin(
          "font-card-symbol text-[18px] font-semibold leading-[14px]",
          suit === "s" && "text-slate-900 dark:text-slate-200",
          suit === "h" && "text-rose-600 dark:text-rose-500",
          suit === "d" && "text-blue-600 dark:text-blue-500",
          suit === "c" && "text-emerald-600 dark:text-emerald-500"
        )}
      >
        {rank}
      </span>

      <SuitIcon
        className={twJoin(
          "w-3.5 h-3.5",
          suit === "s" && "text-slate-900 dark:text-slate-200",
          suit === "h" && "text-rose-600 dark:text-rose-500",
          suit === "d" && "text-blue-600 dark:text-blue-500",
          suit === "c" && "text-emerald-600 dark:text-emerald-500"
        )}
      />
    </span>
  );
};
