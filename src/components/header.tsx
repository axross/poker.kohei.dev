import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ComponentProps, FC, HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button";
import { Logo } from "~/components/logo";
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from "~/components/mobile-navigation";
import { ModeToggle } from "~/components/mode-toggle";
import { MobileSearch, Search } from "~/components/search";
import { topLevelNavigationItems } from "~/constants/navigation";

interface TopLevelNavItemProps extends HTMLAttributes<HTMLLIElement> {
  href: ComponentProps<typeof Link>["href"];
}

const TopLevelNavItem: FC<TopLevelNavItemProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <li {...props}>
      <Link
        href={href}
        className={twMerge(
          "text-sm leading-5 text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export interface HeaderProps extends ComponentProps<typeof motion.div> {}

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
    let isInsideMobileNavigation = useIsInsideMobileNavigation();

    let { scrollY } = useScroll();
    let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
    let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

    return (
      <motion.div
        ref={ref}
        className={twMerge(
          "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80",
          !isInsideMobileNavigation &&
            "backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80",
          isInsideMobileNavigation
            ? "bg-white dark:bg-gray-900"
            : "bg-white/[var(--bg-opacity-light)] dark:bg-gray-900/[var(--bg-opacity-dark)]",
          className
        )}
        style={
          {
            "--bg-opacity-light": bgOpacityLight,
            "--bg-opacity-dark": bgOpacityDark,
          } as never
        }
        {...props}
      >
        <div
          className={twMerge(
            "absolute inset-x-0 top-full h-px transition",
            (isInsideMobileNavigation || !mobileNavIsOpen) &&
              "bg-gray-900/7.5 dark:bg-white/7.5"
          )}
        />
        <Search />
        <div className="flex items-center gap-5 lg:hidden">
          <MobileNavigation />
          <Link href="/" aria-label="Home">
            <Logo className="h-6" />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul role="list" className="flex items-center gap-8">
              {topLevelNavigationItems.map(({ title, href }) => (
                <TopLevelNavItem href={href} key={`${title}-${href}`}>
                  {title}
                </TopLevelNavItem>
              ))}
            </ul>
          </nav>
          <div className="hidden md:block md:h-5 md:w-px md:bg-gray-900/10 md:dark:bg-white/15" />
          <div className="flex gap-4">
            <MobileSearch />
            <ModeToggle />
          </div>
          <div className="hidden min-[416px]:contents">
            <Button href="#">Sign in</Button>
          </div>
        </div>
      </motion.div>
    );
  }
);
Header.displayName = "Header";
