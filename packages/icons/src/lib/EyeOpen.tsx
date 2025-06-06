import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" {...props}>
    <g fill="current" clipPath="url(#eye-open_svg__a)">
      <path d="M15.832 7.445C13.946 4.617 11.692 2 8 2S2.054 4.617.168 7.445a1 1 0 0 0 0 1.11C2.054 11.383 4.308 14 8 14s5.947-2.617 7.832-5.445a1 1 0 0 0 0-1.11M8 12c-2.122 0-3.778-1.132-5.79-4C4.223 5.132 5.879 4 8 4s3.778 1.132 5.79 4c-2.012 2.868-3.668 4-5.79 4" />
      <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
    </g>
    <defs>
      <clipPath id="eye-open_svg__a">
        <path d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEyeOpen;
