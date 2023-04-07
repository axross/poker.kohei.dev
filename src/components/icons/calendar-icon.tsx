import { SVGProps, forwardRef } from "react";

export const CalendarIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-9Z"
        />
        <path
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v2h-15v-2Z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 5.5v-3M14.5 5.5v-3"
        />
      </svg>
    );
  }
);
CalendarIcon.displayName = "CalendarIcon";
