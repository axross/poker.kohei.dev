import { SVGProps, forwardRef } from "react";

export const PackageIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0"
          d="m10 9.5-7.5-4v9l7.5 4v-9ZM10 9.5l7.5-4v9l-7.5 4v-9Z"
        />

        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.5 5.5 7.5 4m-7.5-4v9l7.5 4m-7.5-13 7.5-4 7.5 4m-7.5 4v9m0-9 7.5-4m-7.5 13 7.5-4v-9m-11 6 .028-3.852L13.5 3.5"
        />
      </svg>
    );
  }
);
PackageIcon.displayName = "PackageIcon";
