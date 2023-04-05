import Link from "next/link";
import { ComponentProps, HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { ArrowIcon } from "~/components/icons/ArrowIcon";

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
          "inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium outline-none transition focus-within:ring-2 focus-within:ring-emerald-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-950 ",
          variant === "primary" &&
            "rounded-full bg-emerald-600 px-3 py-1 text-white hover:bg-gray-800 dark:border dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300",
          variant === "secondary" &&
            "rounded-full bg-gray-100 px-3 py-1 text-gray-950 hover:bg-gray-200 dark:bg-gray-800/40 dark:text-gray-400 dark:ring-1 dark:ring-inset dark:ring-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-300",
          variant === "filled" &&
            "rounded-full bg-gray-900 px-3 py-1 text-white hover:bg-gray-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400",
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
