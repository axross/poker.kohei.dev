import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ProseProps extends HTMLAttributes<HTMLElement> {
  as: any;
}

export const Prose: FC<ProseProps> = ({
  as: Component = "div",
  className,
  ...props
}) => {
  return (
    <Component
      className={twMerge("prose dark:prose-invert", className)}
      {...props}
    />
  );
};
