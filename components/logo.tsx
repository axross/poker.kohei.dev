import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type LogoProps = HTMLAttributes<HTMLSpanElement>;

export const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <span className={twMerge("p-2 font-bold", className)} {...props}>
      poker.kohei.dev
    </span>
  );
};
