import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <g clipPath="url(#Corner_svg__a)">
      <path
        fill="#fff"
        d="M9.145 16.994h10.24a1.137 1.137 0 0 0 .81-1.944 1.14 1.14 0 0 0-.802-.333H10.28V5.604a1.14 1.14 0 0 0-1.135-1.135 1.14 1.14 0 0 0-.805.338 1.14 1.14 0 0 0-.338.805v10.24a1.14 1.14 0 0 0 1.143 1.142"
      />
      <mask id="Corner_svg__b" fill="#fff">
        <path d="M17.212 16.524a9.106 9.106 0 0 0-9.106-9.106v2.016a7.09 7.09 0 0 1 7.09 7.09z" />
      </mask>
      <path
        stroke="#fff"
        strokeWidth={4}
        d="M17.212 16.524a9.106 9.106 0 0 0-9.106-9.106v2.016a7.09 7.09 0 0 1 7.09 7.09z"
        mask="url(#Corner_svg__b)"
      />
    </g>
    <defs>
      <clipPath id="Corner_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCorner;
