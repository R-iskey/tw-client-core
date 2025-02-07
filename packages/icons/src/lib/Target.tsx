import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTarget = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M12.004 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
    <path d="M21.004 11h-1.1c-.5-3.6-3.3-6.5-6.9-6.9V3c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-3.6.4-6.5 3.3-6.9 6.9h-1.1c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.5 3.6 3.3 6.5 6.9 6.9V21c0 .6.4 1 1 1s1-.4 1-1v-1.1c3.6-.5 6.5-3.3 6.9-6.9h1.1c.6 0 1-.4 1-1s-.4-1-1-1m-3.1 2c-.4 2.5-2.4 4.5-4.9 4.9 0-.5-.5-.9-1-.9s-.9.4-1 .9c-2.5-.4-4.5-2.4-4.9-4.9.5 0 .9-.5.9-1s-.4-.9-.9-1c.4-2.5 2.4-4.5 4.9-4.9 0 .5.5.9 1 .9s.9-.4 1-.9c2.5.4 4.5 2.4 4.9 4.9-.5 0-.9.5-.9 1s.4.9.9 1" />
  </svg>
);
export default SvgTarget;
