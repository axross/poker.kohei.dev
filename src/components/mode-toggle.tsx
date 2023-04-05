import { ButtonHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { SunIcon } from "~/components/icons/sun-icon";
import { MoonIcon } from "~/components/icons/moon-icon";

export type ModeToggleProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const ModeToggle = forwardRef<HTMLButtonElement, ModeToggleProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type="button"
        className={twMerge(
          "flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-gray-900/5 dark:hover:bg-white/5",
          className
        )}
        aria-label="Toggle dark mode"
        onClick={toggleMode}
        ref={ref}
        {...props}
      >
        <SunIcon className="h-5 w-5 stroke-gray-900 dark:hidden" />

        <MoonIcon className="hidden h-5 w-5 stroke-white dark:block" />
      </button>
    );
  }
);
ModeToggle.displayName = "ModeToggle";

function disableTransitionsTemporarily() {
  document.documentElement.classList.add("[&_*]:!transition-none");
  window.setTimeout(() => {
    document.documentElement.classList.remove("[&_*]:!transition-none");
  }, 0);
}

function toggleMode() {
  disableTransitionsTemporarily();

  let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let isSystemDarkMode = darkModeMediaQuery.matches;
  let isDarkMode = document.documentElement.classList.toggle("dark");

  if (isDarkMode === isSystemDarkMode) {
    delete window.localStorage.isDarkMode;
  } else {
    window.localStorage.isDarkMode = isDarkMode;
  }
}
