import { useInView } from "framer-motion";
import Link from "next/link";
import {
  ComponentProps,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { AnchorIcon } from "~/components/icons/anchor-icon";
import { useSectionStore } from "~/components/section-provider";
import { Tag } from "~/components/tag";
import { remToPx } from "~/lib/rem-to-px";

interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  tag?: string;
  label?: string;
}

const Eyebrow: FC<EyebrowProps> = ({ tag, label, className, ...props }) => {
  if (tag === undefined && label === undefined) {
    return null;
  }

  return (
    <div className={twMerge("flex items-center gap-x-3", className)} {...props}>
      {tag && <Tag>{tag}</Tag>}
      {tag && label && (
        <span className="h-0.5 w-0.5 rounded-full bg-gray-300 dark:bg-gray-600" />
      )}
      {label && (
        <span className="font-mono text-xs text-gray-400">{label}</span>
      )}
    </div>
  );
};

interface AnchorProps extends Omit<ComponentProps<typeof Link>, "href"> {
  id: string;
  inView: boolean;
}

const Anchor: FC<AnchorProps> = ({
  id,
  inView,
  className,
  children,
  ...props
}) => {
  return (
    <Link
      href={`#${id}`}
      className={twMerge(
        "group text-inherit no-underline hover:text-inherit",
        className
      )}
      {...props}
    >
      {inView && (
        <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
          <div className="group/anchor block h-5 w-5 rounded-lg bg-gray-50 ring-1 ring-inset ring-gray-300 transition hover:ring-gray-500 dark:bg-gray-800 dark:ring-gray-700 dark:hover:bg-gray-700 dark:hover:ring-gray-600">
            <AnchorIcon className="h-5 w-5 text-gray-500 transition dark:text-gray-400 dark:group-hover/anchor:text-white" />
          </div>
        </div>
      )}
      {children}
    </Link>
  );
};

export interface HeadingProps {
  level?: number;
  id: string;
  tag?: string;
  label?: string;
  anchor?: boolean;
  children?: ReactNode;
}

export const Heading: FC<HeadingProps> = ({
  level = 2,
  children,
  id,
  tag,
  label,
  anchor = true,
  ...props
}) => {
  const Component = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  const ref = useRef<HTMLHeadingElement>(null);
  const registerHeading = useSectionStore((s) => s.registerHeading);

  const inView = useInView(ref, {
    margin: `${remToPx(-3.5)}px 0px 0px 0px`,
    amount: "all",
  });

  useEffect(() => {
    if (level === 2) {
      registerHeading({ id, ref, offsetRem: tag || label ? 8 : 6 });
    }
  });

  return (
    <>
      <Eyebrow tag={tag} label={label} />

      <Component
        id={anchor ? id : undefined}
        className={tag || label ? "mt-2 scroll-mt-32" : "scroll-mt-24"}
        ref={ref}
        {...props}
      >
        {anchor ? (
          <Anchor id={id} inView={inView}>
            {children}
          </Anchor>
        ) : (
          children
        )}
      </Component>
    </>
  );
};
