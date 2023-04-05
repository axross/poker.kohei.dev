import { SVGProps, forwardRef } from "react";

export const SearchIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
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
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.01 12a4.25 4.25 0 1 0-6.02-6 4.25 4.25 0 0 0 6.02 6Zm0 0 3.24 3.25"
        />
      </svg>
    );
  }
);
SearchIcon.displayName = "SearchIcon";
