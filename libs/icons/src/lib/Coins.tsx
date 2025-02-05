import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoins = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} clipPath="url(#Coins_svg__a)">
      <path d="M9 11.25c4.142 0 7.5-1.511 7.5-3.375S13.142 4.5 9 4.5 1.5 6.011 1.5 7.875 4.858 11.25 9 11.25" />
      <path d="M1.5 7.875v3.75C1.5 13.491 4.856 15 9 15s7.5-1.51 7.5-3.375v-3.75M6 10.969v3.75" />
      <path d="M16.5 9.066c3.422.32 6 1.678 6 3.31 0 1.865-3.356 3.375-7.5 3.375-1.838 0-3.525-.3-4.828-.788" />
      <path d="M7.5 14.934v1.191c0 1.866 3.356 3.375 7.5 3.375s7.5-1.51 7.5-3.375v-3.75M18 15.469v3.75M12 10.969v8.25" />
    </g>
    <defs>
      <clipPath id="Coins_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCoins;
