import { SVGProps, forwardRef } from "react";

export const ListIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 4.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11Z"
        />

        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.5 6.5h7M6.5 13.5h7M6.5 10h7"
        />
      </svg>
    );
  }
);
ListIcon.displayName = "ListIcon";
