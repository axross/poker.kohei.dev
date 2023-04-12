import { ArrowIcon } from "components/icons/arrow-icon";
import Link from "next/link";
import { ComponentProps, HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variant?: "primary" | "secondary" | "filled" | "outline" | "text";
  href?: ComponentProps<typeof Link>["href"];
  arrow?: "left" | "right";
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    { variant = "primary", href, arrow, className, children, ...props },
    ref
  ) => {
    const Component = href ? Link : "button";
    const arrowIcon = (
      <ArrowIcon
        className={twMerge(
          "mt-0.5 h-5 w-5",
          variant === "text" && "relative top-px",
          arrow === "left" && "-ml-1 rotate-180",
          arrow === "right" && "-mr-1"
        )}
      />
    );

    return (
      <Component
        href={href as never}
        className={twMerge(
          "inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950 ",
          variant === "primary" &&
            "rounded-full border border-transparent bg-emerald-600 px-3 py-1 text-white hover:bg-emerald-500 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300",
          variant === "secondary" &&
            "rounded-full border border-transparent bg-gray-200 px-3 py-1 text-gray-700  hover:bg-gray-300 hover:text-gray-950 dark:border-gray-50/10 dark:bg-gray-50/5 dark:text-gray-300 dark:hover:border-gray-50/20 dark:hover:bg-gray-50/10 dark:hover:text-gray-50",
          variant === "filled" &&
            "rounded-full border border-transparent bg-gray-800 px-3 py-1 text-gray-100 hover:bg-gray-950 hover:text-white dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-50 dark:hover:text-gray-950",
          variant === "outline" &&
            "rounded-full border border-gray-950/20 bg-transparent px-3 py-1 text-gray-800 hover:bg-gray-900/5 hover:text-gray-950 dark:border dark:border-gray-50/20 dark:text-gray-200 dark:hover:bg-gray-50/5 dark:hover:text-gray-50",
          variant === "text" &&
            "text-emerald-500 hover:text-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-400",
          className
        )}
        ref={ref as never}
        {...props}
      >
        {arrow === "left" && arrowIcon}

        {children}

        {arrow === "right" && arrowIcon}
      </Component>
    );
  }
);
Button.displayName = "Button";
