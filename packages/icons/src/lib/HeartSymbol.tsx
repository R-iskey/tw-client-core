import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeartSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M11.987 21.08c2.65-4.09 4.627-5.726 7.776-9.143C20.98 10.617 22 8.961 22 7.087c0-2.847-2.271-5.173-5.052-5.173-2.433 0-4.472 1.78-4.944 4.128-.478-2.348-2.52-4.128-4.951-4.128C4.272 1.914 2 4.24 2 7.087c0 1.761 1.017 3.737 2.108 4.85 3.298 3.36 5.29 5.402 7.879 9.144"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeartSymbol;
