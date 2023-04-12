import { SVGProps, forwardRef } from "react";

export const InfoIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true" ref={ref} {...props}>
        <circle cx="8" cy="8" r="8" strokeWidth="0" fill="currentColor" />

        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.75 7.75h1.5v3.5"
          className="text-white"
        />

        <circle
          cx="8"
          cy="4"
          r=".5"
          fill="none"
          stroke="currentColor"
          className="text-white"
        />
      </svg>
    );
  }
);
InfoIcon.displayName = "InfoIcon";
