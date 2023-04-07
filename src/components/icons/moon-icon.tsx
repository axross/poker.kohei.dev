import { SVGProps, forwardRef } from "react";

export const MoonIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
          fill="none"
          stroke="currentColor"
          d="M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"
        />
      </svg>
    );
  }
);
MoonIcon.displayName = "MoonIcon";
