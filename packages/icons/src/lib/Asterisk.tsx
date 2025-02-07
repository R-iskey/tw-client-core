import * as React from 'react';
import type { SVGProps } from 'react';
const SvgAsterisk = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" {...props}>
    <path d="M13.418 3.49c0-.823-.64-1.49-1.429-1.49s-1.428.667-1.428 1.49v7.35L3.87 8.572c-.75-.254-1.557.174-1.8.957-.245.783.166 1.624.917 1.878l6.7 2.272-4.147 5.954c-.464.666-.322 1.598.316 2.082a1.39 1.39 0 0 0 1.996-.33l4.141-5.948 4.142 5.949a1.39 1.39 0 0 0 1.996.33c.638-.485.78-1.417.316-2.083l-4.144-5.951 6.708-2.275c.75-.254 1.162-1.095.918-1.878s-1.05-1.211-1.8-.957l-6.712 2.275z" />
  </svg>
);
export default SvgAsterisk;
