import { FC, HTMLAttributes, SVGAttributes } from "react";
import { twJoin } from "tailwind-merge";

export interface RankPairProps extends HTMLAttributes<HTMLSpanElement> {
  highRank:
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
  kickerRank:
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
  suited?: boolean;
}

export const RankPair: FC<RankPairProps> = ({
  highRank,
  kickerRank,
  suited = false,
  className,
  ...props
}) => {
  return (
    <span
      className={twJoin(
        "inline-flex items-center h-[1.25em] mx-0.5 px-1 rounded-[0.15em] align-baseline",
        suited && "bg-amber-500/10",
        !suited && "bg-purple-500/10",
        className
      )}
      {...props}
    >
      <span
        className={twJoin(
          "font-card-symbol text-[1.125em] font-semibold leading-[14px]",
          suited && "text-amber-500",
          !suited && "text-purple-500"
        )}
      >
        {highRank}
      </span>

      <span
        className={twJoin(
          "font-card-symbol text-[1.125em] font-semibold leading-[14px]",
          suited && "text-amber-500",
          !suited && "text-purple-500"
        )}
      >
        {kickerRank}
      </span>

      <span
        className={twJoin(
          "mb-[.25em] font-card-symbol text-[.875em] font-bold leading-[.625em] self-end",
          suited && "text-amber-500",
          !suited && "text-purple-500"
        )}
      >
        {suited ? "s" : "o"}
      </span>
    </span>
  );
};
