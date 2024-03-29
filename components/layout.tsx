import { Footer } from "components/footer";
import { Header } from "components/header";
import { Logo } from "components/logo";
import { Navigation } from "components/navigation";
import { Prose } from "components/prose";
import { Section, SectionProvider } from "components/section-provider";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { PageLinkGroup, SocialLink, TopLevelLink } from "~/models/navigation";

export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
  sections: Section[];
  topLevelLinks: TopLevelLink[];
  pageLinkGroups: PageLinkGroup[];
  socialLinks: SocialLink[];
}

export const Layout: FC<LayoutProps> = ({
  sections = [],
  topLevelLinks,
  pageLinkGroups,
  socialLinks,
  className,
  children,
  ...props
}) => {
  return (
    <SectionProvider sections={sections}>
      <div className={twMerge("lg:ml-72 xl:ml-80", className)} {...props}>
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-gray-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-6 text-gray-950 dark:text-white" />
              </Link>
            </div>

            <Header
              topLevelLinks={topLevelLinks}
              pageLinkGroups={pageLinkGroups}
            />

            <Navigation
              topLevelLinks={topLevelLinks}
              pageLinkGroups={pageLinkGroups}
              className="hidden lg:mt-10 lg:block"
            />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            <Prose as="article">{children}</Prose>
          </main>

          <Footer socialLinks={socialLinks} pageLinkGroups={pageLinkGroups} />
        </div>
      </div>
    </SectionProvider>
  );
};
