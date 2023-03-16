import { FC, HTMLAttributes } from "react";

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

export const RankIcon: FC<RankIconProps> = ({ rank, ...props }) => {
  switch (rank) {
    case "ace":
      return <span {...props}>A</span>;
    case "king":
      return <span {...props}>K</span>;
    case "queen":
      return <span {...props}>Q</span>;
    case "jack":
      return <span {...props}>J</span>;
    case "ten":
      return <span {...props}>T</span>;
    case "nine":
      return <span {...props}>9</span>;
    case "eight":
      return <span {...props}>8</span>;
    case "seven":
      return <span {...props}>7</span>;
    case "six":
      return <span {...props}>6</span>;
    case "five":
      return <span {...props}>5</span>;
    case "four":
      return <span {...props}>4</span>;
    case "trey":
      return <span {...props}>3</span>;
    case "deuce":
      return <span {...props}>2</span>;
    default:
      return <span {...props}>*</span>;
  }
};
