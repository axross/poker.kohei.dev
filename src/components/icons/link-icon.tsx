import { SVGProps, forwardRef } from "react";

export const LinkIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m5.056 11.5-1.221-1.222a4.556 4.556 0 0 1 6.443-6.443L11.5 5.056M7.5 7.5l5 5m2.444-4 1.222 1.222a4.556 4.556 0 0 1-6.444 6.444L8.5 14.944"
        />
      </svg>
    );
  }
);
LinkIcon.displayName = "LinkIcon";
