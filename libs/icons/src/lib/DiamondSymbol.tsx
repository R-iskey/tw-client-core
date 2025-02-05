import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDiamondSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      d="M12 .836C9.285 4.994 5.88 8.853 2 12.505q6.308 5.324 10 11.664c2.504-4.532 5.759-8.483 10-11.664-4.175-3.893-7.56-7.784-10-11.67"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDiamondSymbol;
