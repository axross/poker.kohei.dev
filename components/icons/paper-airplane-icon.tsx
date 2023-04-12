import { SVGProps, forwardRef } from "react";

export const PaperAirplaneIcon = forwardRef<
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
        d="M17 3L1 9L8 12M17 3L11 19L8 12M17 3L8 12"
      />

      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19L8 12L17 3L11 19Z"
      />
    </svg>
  );
});
PaperAirplaneIcon.displayName = "PaperAirplaneIcon";
