import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLine = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M18.725 11H5.275C4.571 11 4 11.447 4 12s.57 1 1.275 1h13.45c.704 0 1.275-.447 1.275-1s-.57-1-1.275-1" />
  </svg>
);
export default SvgLine;
