import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button";
import { Heading } from "~/components/heading";

export type GuidesProps = HTMLAttributes<HTMLDivElement>;

export const Guides: FC<GuidesProps> = ({ className, children, ...props }) => {
  return (
    <div className={twMerge("my-16 xl:max-w-none", className)} {...props}>
      <Heading level={2} id="guides">
        Guides
      </Heading>

      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-gray-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export interface GuideProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  href: string;
  description: string;
}

export const Guide: FC<GuideProps> = ({
  name,
  href,
  description,
  ...props
}) => {
  return (
    <div {...props}>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>

      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>

      <p className="mt-4">
        <Button href={href} variant="text" arrow="right">
          Read more
        </Button>
      </p>
    </div>
  );
};
