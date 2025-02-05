import * as React from 'react';
import type { SVGProps } from 'react';
const SvgGamepadController = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <g clipPath="url(#Gamepad-controller_svg__a)">
      <path d="M18.098 7.435a7 7 0 0 1-6.79 12.242l-.21-.117-5.192-2.998a7 7 0 0 1 6.79-12.241l.21.117zm-.75 1.3-5.192-2.998a5.5 5.5 0 0 0-5.69 9.411l.19.115 5.192 2.998a5.5 5.5 0 0 0 5.69-9.412zM10.038 7.4a.75.75 0 0 1 .275 1.024l-.75 1.297 1.3.751a.75.75 0 0 1-.75 1.299l-1.3-.751-.75 1.301a.75.75 0 0 1-1.3-.75l.75-1.301-1.298-.749a.75.75 0 1 1 .75-1.299l1.299.749.75-1.297a.75.75 0 0 1 1.024-.274m4.096 6.406a1.25 1.25 0 1 1-1.25 2.165 1.25 1.25 0 0 1 1.25-2.165m3.482-2.032a1.25 1.25 0 1 1-1.25 2.166 1.25 1.25 0 0 1 1.25-2.166" />
    </g>
    <defs>
      <clipPath id="Gamepad-controller_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGamepadController;
