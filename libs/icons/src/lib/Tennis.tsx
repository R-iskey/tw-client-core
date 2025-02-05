import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTennis = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <circle cx={12} cy={12} r={12} fill="#fff" />
    <g clipPath="url(#Tennis_svg__a)">
      <path fill="#33E037" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18" />
      <path
        fill="#E6E6E6"
        d="M15.095 8.905c1.632 1.63 3.713 2.475 5.85 2.587-.056-.562-.112-1.125-.28-1.687a7.14 7.14 0 0 1-4.388-2.082 7.3 7.3 0 0 1-2.082-4.387c-.562-.169-1.125-.225-1.687-.281.112 2.08.956 4.218 2.587 5.85M3.281 14.195a7.14 7.14 0 0 1 4.388 2.082 7.3 7.3 0 0 1 2.081 4.387c.563.169 1.125.225 1.688.281-.113-2.137-.957-4.218-2.588-5.85-1.575-1.63-3.712-2.475-5.85-2.587.056.562.169 1.125.281 1.687"
      />
    </g>
    <defs>
      <clipPath id="Tennis_svg__a">
        <path fill="#fff" d="M3 3h18v18H3z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTennis;
