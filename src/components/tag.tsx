import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface TagProps extends HTMLAttributes<HTMLElement> {
  variant?: "small" | "medium";
  color?: "emerald" | "sky" | "amber" | "rose" | "gray";
}

const valueColorMap: Record<string, TagProps["color"]> = {
  get: "emerald",
  post: "sky",
  put: "amber",
  delete: "rose",
};

export const Tag = forwardRef<HTMLElement, TagProps>(
  (
    {
      children,
      variant = "medium",
      color = typeof children === "string"
        ? valueColorMap[children.toLowerCase()] ?? "emerald"
        : "emerald",
    },
    ref
  ) => {
    return (
      <span
        className={twMerge(
          "font-mono text-[0.625rem] font-semibold leading-6",
          variant === "medium" && "rounded-lg px-1.5 ring-1 ring-inset",
          color === "emerald" &&
            variant === "small" &&
            "text-emerald-500 dark:text-emerald-400",
          color === "emerald" &&
            variant === "medium" &&
            "bg-emerald-400/10 text-emerald-500 ring-emerald-300 dark:text-emerald-400 dark:ring-emerald-400/30",
          color === "sky" && variant === "small" && "text-sky-500",
          color === "sky" &&
            variant === "medium" &&
            "bg-sky-400/10 text-sky-500 ring-sky-300 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-sky-400/30",
          color === "amber" && variant === "small" && "text-amber-500",
          color === "amber" &&
            variant === "medium" &&
            "bg-amber-400/10 text-amber-500 ring-amber-300 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/30",
          color === "rose" && variant === "small" && "text-red-500",
          color === "rose" &&
            variant === "medium" &&
            "bg-rose-50 text-red-500 ring-rose-200 dark:bg-rose-400/10 dark:text-rose-400 dark:ring-rose-500/20",
          color === "gray" &&
            variant === "small" &&
            "text-gray-400 dark:text-gray-500",
          color === "gray" &&
            variant === "medium" &&
            "bg-gray-50 text-gray-500 ring-gray-200 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-500/20"
        )}
        ref={ref}
      >
        {children}
      </span>
    );
  }
);
Tag.displayName = "Tag";
