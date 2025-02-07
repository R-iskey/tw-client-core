import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path
      d="M6.296 9.284a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42 0l5-5a1.002 1.002 0 0 0-.326-1.639 1 1 0 0 0-1.094.22l-4.29 4.3-4.29-4.3a1 1 0 0 0-1.42 0"
      opacity={0.75}
    />
  </svg>
);
export default SvgArrow;
