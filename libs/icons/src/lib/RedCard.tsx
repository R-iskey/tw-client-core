import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRedCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <rect width={8} height={12} x={8} y={6} fill="#DA4339" rx={2} />
  </svg>
);
export default SvgRedCard;
