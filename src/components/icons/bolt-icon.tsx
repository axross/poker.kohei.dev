import { SVGProps, forwardRef } from "react";

export const BoltIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="currentColor"
          d="M4.5 11.5 10 2v5.5a1 1 0 0 0 1 1h4.5L10 18v-5.5a1 1 0 0 0-1-1H4.5Z"
        />
      </svg>
    );
  }
);
BoltIcon.displayName = "BoltIcon";
