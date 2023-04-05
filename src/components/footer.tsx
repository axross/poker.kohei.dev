import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ComponentProps,
  ComponentType,
  FC,
  FormEvent,
  forwardRef,
  Fragment,
  HTMLAttributes,
  SVGAttributes,
  useCallback,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button";
import { CheckIcon } from "~/components/icons/check-icon";
import { TwitterIcon } from "~/components/icons/twitterI-icon";
import { GitHubIcon } from "~/components/icons/github-icon";
import { DiscordIcon } from "~/components/icons/discord-icon";
import { navigationGroups, socialLinks } from "~/constants/navigation";

const FeedbackButton: FC<HTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => {
  return (
    <button
      type="submit"
      className={twMerge(
        "px-3 text-sm font-medium text-gray-600 transition hover:bg-gray-900/2.5 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white",
        className
      )}
      {...props}
    />
  );
};

const FeedbackForm = forwardRef<
  HTMLFormElement,
  HTMLAttributes<HTMLFormElement>
>(({ className, ...props }, ref) => {
  return (
    <form
      className={twMerge(
        "absolute inset-0 flex items-center justify-center gap-6 md:justify-start",
        className
      )}
      ref={ref}
      {...props}
    >
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-gray-900/10 dark:border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-gray-900/10 dark:bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  );
});
FeedbackForm.displayName = "FeedbackForm";

const FeedbackThanks = forwardRef<HTMLDivElement, HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={twMerge(
          "absolute inset-0 flex justify-center md:justify-start",
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="flex items-center gap-3 rounded-full bg-emerald-50/50 py-1 pl-1.5 pr-3 text-sm text-emerald-900 ring-1 ring-inset ring-emerald-500/20 dark:bg-emerald-500/5 dark:text-emerald-200 dark:ring-emerald-500/30">
          <CheckIcon className="h-5 w-5 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />
          Thanks for your feedback!
        </div>
      </div>
    );
  }
);
FeedbackThanks.displayName = "FeedbackThanks";

type FeedbackProps = HTMLAttributes<HTMLElement>;

const Feedback: FC<FeedbackProps> = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    // event.nativeEvent.submitter.dataset.response
    // => "yes" or "no"

    setSubmitted(true);
  }, []);

  return (
    <div className="relative h-8">
      <Transition
        show={!submitted}
        as={Fragment}
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        leave="pointer-events-none duration-300"
      >
        <FeedbackForm onSubmit={onSubmit} />
      </Transition>
      <Transition
        show={submitted}
        as={Fragment}
        enterFrom="opacity-0"
        enterTo="opacity-100"
        enter="delay-150 duration-300"
      >
        <FeedbackThanks />
      </Transition>
    </div>
  );
};

interface PageLinkProps {
  label: string;
  page: {
    href: string;
    title: string;
  };
  previous?: boolean;
}

const PageLink: FC<PageLinkProps> = ({ label, page, previous = false }) => {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? "left" : "right"}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-gray-900 transition hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
      >
        {page.title}
      </Link>
    </>
  );
};

function PageNavigation() {
  const router = useRouter();
  const allPages = navigationGroups.flatMap((group) => group.links);
  const currentPageIndex = allPages.findIndex(
    (page) => page.href === router.pathname
  );

  if (currentPageIndex === -1) {
    return null;
  }

  const previousPage = allPages[currentPageIndex - 1];
  const nextPage = allPages[currentPageIndex + 1];

  if (!previousPage && !nextPage) {
    return null;
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  );
}

interface SocialLinkProps extends ComponentProps<typeof Link> {
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon: Icon, children }) => {
  return (
    <Link href={href} className="group">
      <span className="sr-only">{children}</span>

      <Icon className="h-5 w-5 fill-gray-700 transition group-hover:fill-gray-900 dark:group-hover:fill-gray-500" />
    </Link>
  );
};

type SmallPrintProps = HTMLAttributes<HTMLDivElement>;

const SmallPrint: FC<SmallPrintProps> = ({ className, ...props }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-between gap-5 border-t border-gray-900/5 pt-8 dark:border-white/5 sm:flex-row",
        className
      )}
      {...props}
    >
      <p className="text-xs text-gray-600 dark:text-gray-400">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex gap-4">
        {socialLinks.map(({ icon, href, label }) => (
          <SocialLink href={href} icon={icon}>
            {label}
          </SocialLink>
        ))}
      </div>
    </div>
  );
};

export type FooterProps = HTMLAttributes<HTMLElement>;

export const Footer: FC<FooterProps> = ({ className, ...props }) => {
  const router = useRouter();

  return (
    <footer
      className={twMerge(
        "mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl",
        className
      )}
      {...props}
    >
      <Feedback key={router.pathname} />
      <PageNavigation />
      <SmallPrint />
    </footer>
  );
};
