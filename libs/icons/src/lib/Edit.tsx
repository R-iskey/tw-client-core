import * as React from 'react';
import type { SVGProps } from 'react';
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M21 11.998a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1h6a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76v4.24a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93 2.84-2.78a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35 2.83 2.83-1.42 1.42-2.83-2.83zM8 13.168l5.93-5.93 2.83 2.83-5.93 5.93H8z" />
  </svg>
);
export default SvgEdit;
