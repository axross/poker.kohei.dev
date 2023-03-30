import { Azeret_Mono } from "@next/font/google";
import { Rank } from "holdem";
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
    case "A":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          A
        </span>
      );
    case "K":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          K
        </span>
      );
    case "Q":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          Q
        </span>
      );
    case "J":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          J
        </span>
      );
    case "T":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          T
        </span>
      );
    case "9":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          9
        </span>
      );
    case "8":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          8
        </span>
      );
    case "7":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          7
        </span>
      );
    case "6":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          6
        </span>
      );
    case "5":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          5
        </span>
      );
    case "4":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          4
        </span>
      );
    case "3":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          3
        </span>
      );
    case "2":
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
