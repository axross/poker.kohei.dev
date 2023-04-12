import { Rank } from "holdem";
import { Azeret_Mono } from "next/font/google";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const azeretMonoFont = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
});

export interface RankIconProps extends HTMLAttributes<HTMLSpanElement> {
  rank?: Rank;
}

export const RankIcon: FC<RankIconProps> = ({ rank, className, ...props }) => {
  switch (rank) {
    case Rank.Ace:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          A
        </span>
      );
    case Rank.King:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          K
        </span>
      );
    case Rank.Queen:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          Q
        </span>
      );
    case Rank.Jack:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          J
        </span>
      );
    case Rank.Ten:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          T
        </span>
      );
    case Rank.Nine:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          9
        </span>
      );
    case Rank.Eight:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          8
        </span>
      );
    case Rank.Seven:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          7
        </span>
      );
    case Rank.Six:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          6
        </span>
      );
    case Rank.Five:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          5
        </span>
      );
    case Rank.Four:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          4
        </span>
      );
    case Rank.Trey:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          3
        </span>
      );
    case Rank.Deuce:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          2
        </span>
      );
    default:
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          *
        </span>
      );
  }
};
