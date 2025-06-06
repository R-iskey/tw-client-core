import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMenuLines = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <path
      fill="#fff"
      d="M29.333 24.006c0 .733-.594 1.327-1.327 1.327h-10.68a1.327 1.327 0 0 1 0-2.654h10.68c.733 0 1.327.595 1.327 1.327M29.339 15.999c0 .733-.595 1.327-1.327 1.327H3.999a1.327 1.327 0 1 1 0-2.654h24.013c.732 0 1.326.594 1.326 1.327M28.012 9.322a1.327 1.327 0 0 0 0-2.654H11.999a1.327 1.327 0 0 0 0 2.654z"
    />
  </svg>
);
export default SvgMenuLines;
