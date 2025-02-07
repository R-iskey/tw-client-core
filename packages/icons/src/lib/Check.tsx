import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={12} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M14.709 1.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.022 1.022 0 0 0 1.288 7l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47"
    />
  </svg>
);
export default SvgCheck;
