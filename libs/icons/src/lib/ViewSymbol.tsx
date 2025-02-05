import * as React from 'react';
import type { SVGProps } from 'react';
const SvgViewSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M21.79 11.307C19.433 7.772 16.616 4.5 12 4.5s-7.433 3.272-9.79 6.807a1.25 1.25 0 0 0 0 1.387C4.567 16.229 7.384 19.5 12 19.5s7.433-3.271 9.79-6.806a1.25 1.25 0 0 0 0-1.387M12 17c-2.653 0-4.723-1.414-7.237-5C7.277 8.415 9.347 7 12 7s4.723 1.415 7.236 5c-2.513 3.586-4.583 5-7.236 5" />
    <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" />
  </svg>
);
export default SvgViewSymbol;
