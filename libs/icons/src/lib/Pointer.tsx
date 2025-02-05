import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPointer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M21.152 2.858a2.89 2.89 0 0 0-3-.71l-14.15 4.73a2.9 2.9 0 0 0-.12 5.47l5.24 2a.93.93 0 0 1 .53.52l2 5.25a2.87 2.87 0 0 0 2.71 1.88h.07a2.88 2.88 0 0 0 2.69-2l4.73-14.17a2.89 2.89 0 0 0-.7-2.97m-1.15 2.34-4.78 14.18a.88.88 0 0 1-.84.62.92.92 0 0 1-.87-.58l-2-5.25a2.9 2.9 0 0 0-1.67-1.68l-5.25-2a.9.9 0 0 1-.59-.87.88.88 0 0 1 .62-.84l14.18-4.73a.91.91 0 0 1 1.2 1.15" />
  </svg>
);
export default SvgPointer;
