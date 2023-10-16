import { SVGProps } from "react";

export const MarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="6.5"
        stroke="current"
        strokeWidth="3"
        stroke-dasharray="1 1"
      />
    </svg>
  );
};