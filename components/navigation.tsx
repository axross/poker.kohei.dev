import { Button } from "components/button";
import { useIsInsideMobileNavigation } from "components/mobile-navigation";
import { useSectionStore } from "components/section-provider";
import { Tag } from "components/tag";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentProps, FC, HTMLAttributes, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { remToPx } from "~/lib/rem-to-px";
import { PageLinkGroup, TopLevelLink } from "~/models/navigation";

function useInitialValue<V>(value: V, condition: boolean = true): V {
  const initialValue = useRef<V>(value).current;

  return condition ? initialValue : value;
}

interface TopLevelNavItemProps extends HTMLAttributes<HTMLElement> {
  href: ComponentProps<typeof Link>["href"];
}

const TopLevelNavItem: FC<TopLevelNavItemProps> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <li className={twMerge("md:hidden", className)} {...props}>
      <Link
        href={href}
        className="block py-1 text-sm text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
};

interface NavLinkProps extends ComponentProps<typeof Link> {
  tag?: string;
  active?: boolean;
  isAnchorLink?: boolean;
}

const NavLink: FC<NavLinkProps> = ({
  href,
  tag,
  active,
  isAnchorLink = false,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={twMerge(
        "flex justify-between gap-2 py-1 pr-3 text-sm transition",
        isAnchorLink ? "pl-7" : "pl-4",
        active
          ? "text-gray-900 dark:text-white"
          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      )}
      {...props}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="gray">
          {tag}
        </Tag>
      )}
    </Link>
  );
};

interface VisibleSectionHighlightProps
  extends ComponentProps<typeof motion.div> {
  pageLinkGroup: PageLinkGroup;
  pathname: string;
}

const VisibleSectionHighlight: FC<VisibleSectionHighlightProps> = ({
  pageLinkGroup,
  pathname,
  ...props
}) => {
  const [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  );

  const isPresent = useIsPresent();
  const firstVisibleSectionIndex = Math.max(
    0,
    [{ id: "_top" }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  );
  const itemHeight = remToPx(2);
  const height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight;
  const top =
    pageLinkGroup.links.findIndex((link) => link.href === pathname) *
      itemHeight +
    firstVisibleSectionIndex * itemHeight;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-gray-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
      {...props}
    />
  );
};

interface ActivePageMarkerProps extends ComponentProps<typeof motion.div> {
  pageLinkGroup: PageLinkGroup;
  pathname: string;
}

const ActivePageMarker: FC<ActivePageMarkerProps> = ({
  pageLinkGroup,
  pathname,
  className,
  ...props
}) => {
  const itemHeight = remToPx(2);
  const offset = remToPx(0.25);
  const activePageIndex = pageLinkGroup.links.findIndex(
    (link) => link.href === pathname
  );
  const top = offset + activePageIndex * itemHeight;

  return (
    <motion.div
      layout
      className={twMerge("absolute left-2 h-6 w-px bg-emerald-500", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
      {...props}
    />
  );
};

interface NavigationGroupItemProps extends HTMLAttributes<HTMLElement> {
  pageLinkGroup: PageLinkGroup;
}

const NavigationGroupItem: FC<NavigationGroupItemProps> = ({
  pageLinkGroup,
  className,
  ...props
}) => {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  const isInsideMobileNavigation = useIsInsideMobileNavigation();
  const [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  );

  const isActiveGroup =
    pageLinkGroup.links.findIndex((link) => link.href === router.pathname) !==
    -1;

  return (
    <li className={twMerge("relative mt-6", className)} {...props}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-gray-900 dark:text-white"
      >
        {pageLinkGroup.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight
              pageLinkGroup={pageLinkGroup}
              pathname={router.pathname}
            />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-gray-950/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker
              pageLinkGroup={pageLinkGroup}
              pathname={router.pathname}
            />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {pageLinkGroup.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
  topLevelLinks: TopLevelLink[];
  pageLinkGroups: PageLinkGroup[];
}

export const Navigation: FC<NavigationProps> = ({
  topLevelLinks,
  pageLinkGroups,
  ...props
}) => {
  return (
    <nav {...props}>
      <ul role="list">
        {topLevelLinks.map(({ title, href }) => (
          <TopLevelNavItem href={href} key={`${title}-${href}`}>
            {title}
          </TopLevelNavItem>
        ))}

        {pageLinkGroups.map((pageLinkGroup, i) => (
          <NavigationGroupItem
            key={pageLinkGroup.title}
            pageLinkGroup={pageLinkGroup}
            className={i === 0 ? "md:mt-0" : undefined}
          />
        ))}
      </ul>
    </nav>
  );
};
