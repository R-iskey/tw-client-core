import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={2} fill="none" {...props}>
    <path
      fill="currentColor"
      d="M14.725 0H1.275C.571 0 0 .447 0 1s.57 1 1.275 1h13.45C15.429 2 16 1.553 16 1s-.57-1-1.275-1"
    />
  </svg>
);
export default SvgMinus;
