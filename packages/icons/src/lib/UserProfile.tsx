import * as React from 'react';
import type { SVGProps } from 'react';
const SvgUserProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M20 19v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6" />
  </svg>
);
export default SvgUserProfile;
