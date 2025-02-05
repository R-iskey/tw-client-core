import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRunningMan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} clipPath="url(#Running-man_svg__a)">
      <path d="M14.25 7.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M4.5 10.272s3-2.775 7.5.75c4.734 3.694 7.5 2.25 7.5 2.25M10.371 15.11c1.678.356 6.131 1.762 6.131 6.637" />
      <path d="M12.347 11.29c-.928 2.718-3.74 8.024-9.347 7.462" />
    </g>
    <defs>
      <clipPath id="Running-man_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRunningMan;
