import {
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import {
  ComponentType,
  FC,
  HTMLAttributes,
  MouseEvent,
  PropsWithoutRef,
  SVGAttributes,
  useCallback,
} from "react";
import { twMerge } from "tailwind-merge";
import { GridPattern, GridPatternProps } from "~/components/grid-pattern";
import { Heading } from "~/components/heading";

interface ResourceIconProps extends HTMLAttributes<HTMLElement> {
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
}

const ResourceIcon: FC<ResourceIconProps> = ({
  icon: Icon,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "flex h-7 w-7 items-center justify-center rounded-full bg-gray-900/5 ring-1 ring-gray-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-gray-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5 text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-emerald-400" />
    </div>
  );
};

interface ResourcePatternProps
  extends PropsWithoutRef<Omit<GridPatternProps, "width" | "height">> {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const ResourcePattern: FC<ResourcePatternProps> = ({
  mouseX,
  mouseY,
  ...gridProps
}) => {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
};

export type ResourcesProps = HTMLAttributes<HTMLElement>;

export const Resources: FC<ResourcesProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={twMerge("my-16 xl:max-w-none", className)} {...props}>
      <Heading level={2} id="resources">
        Resources
      </Heading>

      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-gray-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export interface ResourceProps
  extends Omit<HTMLAttributes<HTMLElement>, "resource"> {
  href: string;
  name: string;
  description: string;
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
  pattern: {
    y: number;
    squares: [number, number][];
  };
}

export const Resource: FC<ResourceProps> = ({
  href,
  name,
  description,
  icon,
  pattern,
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();

      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  return (
    <div
      key={href}
      onMouseMove={onMouseMove}
      className={twMerge(
        "group relative flex rounded-2xl bg-gray-50 transition-shadow hover:shadow-md hover:shadow-gray-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
        className
      )}
      {...props}
    >
      <ResourcePattern {...pattern} mouseX={mouseX} mouseY={mouseY} />

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/7.5 group-hover:ring-gray-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />

      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={icon} />

        <h3 className="mt-4 text-sm font-semibold leading-7 text-gray-900 dark:text-white">
          <Link href={href}>
            <span className="absolute inset-0 rounded-2xl" />
            {name}
          </Link>
        </h3>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
