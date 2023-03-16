import {
  AlertCircle,
  AlertTriangle,
  Check,
  Info,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";
import type { FC, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  intent: "note" | "warning" | "info" | "tip" | "check";
  children?: ReactNode;
}

export const Callout: FC<CalloutProps> = ({
  intent = "note",
  className,
  children,
}) => {
  const Icon = getIntentIcon(intent);

  return (
    <div
      className={twMerge(
        "flex mt-6 px-5 py-4 gap-x-3 overflow-hidden rounded-xl border",
        intent === "note" &&
          "border-sky-500/20 bg-sky-50/50 dark:border-sky-500/30 dark:bg-sky-500/10",
        intent === "warning" &&
          "border-amber-500/20 bg-amber-50/50 dark:border-amber-500/30 dark:bg-amber-500/10",
        intent === "info" &&
          "border-zinc-500/20 bg-zinc-50/50 dark:bg-zinc-900 dark:border-zinc-500/30 dark:bg-zinc-500/10",
        intent === "tip" &&
          "border-emerald-500/20 bg-emerald-50/50 dark:border-emerald-500/30 dark:bg-emerald-500/10",
        intent === "check" &&
          "border-emerald-500/20 bg-emerald-50/50 dark:border-emerald-500/30 dark:bg-emerald-500/10",
        // "nextra-callout nx-overflow-x-auto nx-mt-6 nx-flex nx-rounded-lg nx-border nx-py-2 ltr:nx-pr-4 rtl:nx-pl-4",
        // "contrast-more:nx-border-current contrast-more:dark:nx-border-current",
        className
      )}
    >
      <Icon
        size={20}
        className={twMerge(
          "mt-1",
          intent === "note" && "text-sky-500",
          intent === "warning" && "text-amber-500 dark:text-amber-300/80",
          intent === "info" && "text-zinc-400 dark:text-zinc-300",
          intent === "tip" && "text-emerald-500",
          intent === "check" && "text-emerald-500"
        )}
      />

      <div
        className={twMerge(
          "w-full min-w-0 prose leading-relaxed overflow-x-auto",
          intent === "note" && "text-sky-900 dark:text-sky-200",
          intent === "warning" && "text-amber-900 dark:text-amber-200",
          intent === "info" && "text-zinc-900 dark:text-zinc-200",
          intent === "tip" && "text-emerald-900 dark:text-emerald-200",
          intent === "check" && "text-emerald-900 dark:text-emerald-200"
        )}
      >
        {children}
      </div>
    </div>
  );
};

function getIntentIcon(intent: CalloutProps["intent"]): LucideIcon {
  switch (intent) {
    case "note":
      return AlertCircle;
    case "warning":
      return AlertTriangle;
    case "info":
      return Info;
    case "tip":
      return Lightbulb;
    case "check":
      return Check;
  }
}
