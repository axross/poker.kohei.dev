import { SVGProps, forwardRef } from "react";

export const ChevronRightLeftIcon = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" ref={ref} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M1.5 10A6.5 6.5 0 0 1 8 3.5h4a6.5 6.5 0 1 1 0 13H8A6.5 6.5 0 0 1 1.5 10Z"
      />

      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7.5 7.5-3 2.5 3 2.5M12.5 7.5l3 2.5-3 2.5"
      />
    </svg>
  );
});
ChevronRightLeftIcon.displayName = "ChevronRightLeftIcon";
