import { SVGProps, forwardRef } from "react";

export const ArrowIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
        ref={ref}
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
        />
      </svg>
    );
  }
);
ArrowIcon.displayName = "ArrowIcon";
