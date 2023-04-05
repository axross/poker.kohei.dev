import { SVGProps, forwardRef } from "react";

export const BookIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10 5.5-7.5-3v12l7.5 3m0-12 7.5-3v12l-7.5 3m0-12v12"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m17.5 2.5-7.5 3v12l7.5-3v-12Z"
        />
      </svg>
    );
  }
);
BookIcon.displayName = "BookIcon";
