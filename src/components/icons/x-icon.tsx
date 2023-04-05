import { SVGProps, forwardRef } from "react";

export const XIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg
        viewBox="0 0 10 9"
        fill="none"
        strokeLinecap="round"
        aria-hidden="true"
        ref={ref}
        {...props}
      >
        <path d="m1.5 1 7 7M8.5 1l-7 7" />
      </svg>
    );
  }
);
XIcon.displayName = "XIcon";
