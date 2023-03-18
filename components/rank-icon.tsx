import { Azeret_Mono } from "@next/font/google";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const azeretMonoFont = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
});

export interface RankIconProps extends HTMLAttributes<HTMLSpanElement> {
  rank?:
    | "ace"
    | "king"
    | "queen"
    | "jack"
    | "ten"
    | "nine"
    | "eight"
    | "seven"
    | "six"
    | "five"
    | "four"
    | "trey"
    | "deuce";
}

export const RankIcon: FC<RankIconProps> = ({ rank, className, ...props }) => {
  switch (rank) {
    case "ace":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          A
        </span>
      );
    case "king":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          K
        </span>
      );
    case "queen":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          Q
        </span>
      );
    case "jack":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          J
        </span>
      );
    case "ten":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          T
        </span>
      );
    case "nine":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          9
        </span>
      );
    case "eight":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          8
        </span>
      );
    case "seven":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          7
        </span>
      );
    case "six":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          6
        </span>
      );
    case "five":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          5
        </span>
      );
    case "four":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          4
        </span>
      );
    case "trey":
      return (
        <span
          className={twMerge(azeretMonoFont.variable, className)}
          {...props}
        >
          3
        </span>
      );
    case "deuce":
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
