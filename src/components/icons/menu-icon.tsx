import { SVGProps, forwardRef } from "react";

export const MenuIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
        <path fill="none" stroke="currentColor" d="M.5 1h9M.5 8h9M.5 4.5h9" />
      </svg>
    );
  }
);
MenuIcon.displayName = "MenuIcon";
