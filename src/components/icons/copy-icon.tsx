import { SVGProps, forwardRef } from "react";

export const CopyIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.5 5.5v-1a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.5 7.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z"
        />
      </svg>
    );
  }
);
CopyIcon.displayName = "CopyIcon";
