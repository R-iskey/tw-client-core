import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCoin2 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <circle cx={12} cy={12} r={12} />
    <path
      fill="#212121"
      d="M4 9.24C4 7.451 7.581 6 12 6s8 1.451 8 3.24-3.581 3.24-8 3.24-8-1.451-8-3.24m0 2.814v3.706C4 17.549 7.581 19 12 19s8-1.451 8-3.24v-3.706c-3.544 2.778-12.453 2.781-16 0"
    />
  </svg>
);
export default SvgCoin2;
