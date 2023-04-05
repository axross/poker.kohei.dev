import { MDXComponents } from "mdx/types";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button";
import { CodeGroup, Code, Pre } from "~/components/code";
import { Heading, HeadingProps } from "~/components/heading";
import { InfoIcon } from "~/components/icons/info-icon";

const H2: FC<HeadingProps> = (props) => {
  return <Heading level={2} {...props} />;
};

type NoteProps = HTMLAttributes<HTMLElement>;

const Note: FC<NoteProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(
        "my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links-hover:theme(colors.emerald.300)] dark:[--tw-prose-links:theme(colors.white)]",
        className
      )}
      {...props}
    >
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200" />

      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
};

type RowProps = HTMLAttributes<HTMLElement>;

const Row: FC<RowProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface ColProps extends HTMLAttributes<HTMLElement> {
  sticky?: boolean;
}

const Col: FC<ColProps> = ({
  sticky = false,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
        sticky && "xl:sticky xl:top-24",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

type PropertiesProps = HTMLAttributes<HTMLElement>;

const Properties: FC<PropertiesProps> = ({ className, children, ...props }) => {
  return (
    <div className={twMerge("my-6", className)} {...props}>
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-gray-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  );
};

interface PropertyProps extends HTMLAttributes<HTMLElement> {
  name: string;
  type: string;
}

const Property: FC<PropertyProps> = ({
  name,
  type,
  className,
  children,
  ...props
}) => {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>

        <dd>
          <code>{name}</code>
        </dd>

        <dt className="sr-only">Type</dt>

        <dd className="font-mono text-xs text-gray-400 dark:text-gray-500">
          {type}
        </dd>

        <dt className="sr-only">Description</dt>

        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  );
};

export const mdxComponents = {
  a: Link,
  h2: H2,
  code: Code,
  pre: Pre,
  Button,
  CodeGroup,
  Note,
  Row,
  Col,
  Properties,
  Property,
} as never as MDXComponents;
