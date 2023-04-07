import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "~/components/button";
import { Heading } from "~/components/heading";

export type LibrariesProps = HTMLAttributes<HTMLElement>;

export const Libraries: FC<LibrariesProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={twMerge("my-16 xl:max-w-none", className)} {...props}>
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>

      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-gray-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {children}
      </div>
    </div>
  );
};

export interface LibraryProps extends HTMLAttributes<HTMLElement> {
  name: string;
  description: string;
  href: string;
  logo: any;
}

export const Library: FC<LibraryProps> = ({
  name,
  description,
  href,
  logo,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge("flex flex-row-reverse gap-6", className)}
      {...props}
    >
      <div className="flex-auto">
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

      <Image src={logo} alt="" className="h-12 w-12" unoptimized />
    </div>
  );
};
