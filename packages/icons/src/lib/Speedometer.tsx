import * as React from 'react';
import type { SVGProps } from 'react';
const SvgSpeedometer = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="m15.29 10.29-2.78 2.78A2 2 0 0 0 12 13a2 2 0 0 0-2 2q.003.26.07.51l-.78.78a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l.78-.78q.25.066.51.07a2 2 0 0 0 2-2 2 2 0 0 0-.07-.51l2.78-2.78a1.004 1.004 0 1 0-1.42-1.42M12 4A10 10 0 0 0 2 14a9.9 9.9 0 0 0 1.69 5.56 1.002 1.002 0 0 0 1.66-1.12 8 8 0 1 1 13.3 0 1 1 0 0 0 1.3 1.444 1 1 0 0 0 .36-.324A9.9 9.9 0 0 0 22 14 10 10 0 0 0 12 4" />
  </svg>
);
export default SvgSpeedometer;
