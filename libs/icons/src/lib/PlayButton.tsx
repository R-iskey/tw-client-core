import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPlayButton = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M18.994 10.917 5.944 3.15A1 1 0 0 0 5.433 3a.935.935 0 0 0-.928.938H4.5v16.125h.005c0 .515.417.937.928.937.192 0 .351-.066.525-.16l13.036-7.757a1.413 1.413 0 0 0 0-2.166" />
  </svg>
);
export default SvgPlayButton;
