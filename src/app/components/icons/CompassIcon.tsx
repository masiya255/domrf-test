import { SVGProps } from "react";

export const CompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_1174)">
        <circle cx="12" cy="12" r="11" stroke="current" strokeWidth="2" />
        <path
          d="M10 9.5L17.5 6.5L14.5 13.5L6.50049 17.5L10 9.5Z"
          stroke="current"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1174">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
