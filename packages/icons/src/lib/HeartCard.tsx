import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartCard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path
      fill="#fff"
      d="M13.89 10.891a1.916 1.916 0 0 0-2.707 0l-.47.468-.468-.468a1.91 1.91 0 0 0-2.087-.414 1.91 1.91 0 0 0-1.181 1.764c0 .505.201.99.56 1.349l3.17 3.16.007-.007.007.007 3.17-3.16a1.91 1.91 0 0 0 .414-2.08 1.9 1.9 0 0 0-.415-.619"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.43 5.14H5.996C4.894 5.14 4 6.033 4 7.13v12.878c0 1.099.894 1.99 1.996 1.99h9.434c1.103 0 1.996-.891 1.996-1.99V7.13c0-1.098-.893-1.99-1.996-1.99"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.424 19.333.42.023a2 2 0 0 0 1.44-.504c.394-.351.632-.844.662-1.37l.717-12.855a2 2 0 0 0-.506-1.436 2 2 0 0 0-1.375-.661l-9.426-.527a2 2 0 0 0-1.44.504 1.99 1.99 0 0 0-.663 1.37l-.07 1.26"
    />
  </svg>
);
export default SvgHeartCard;
