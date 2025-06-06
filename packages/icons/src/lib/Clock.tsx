import * as React from 'react';
import type { SVGProps } from 'react';
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path d="M10 4a1 1 0 0 0-1 1v4.384l-2.43 1.223a1 1 0 0 0 .898 1.786l2.981-1.5A1 1 0 0 0 11 10V5a1 1 0 0 0-1-1m0-4a10 10 0 1 0 10 10A10.01 10.01 0 0 0 10 0m0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8" />
  </svg>
);
export default SvgClock;
