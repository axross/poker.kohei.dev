import { SVGProps, forwardRef } from "react";

export const EnvelopeIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
        />

        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
        />
      </svg>
    );
  }
);
EnvelopeIcon.displayName = "EnvelopeIcon";
