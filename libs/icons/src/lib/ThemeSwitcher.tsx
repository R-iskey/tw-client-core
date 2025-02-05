import * as React from 'react';
import type { SVGProps } from 'react';
const SvgThemeSwitcher = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="currentColor" {...props}>
    <path d="M17.6 4.8a1.6 1.6 0 1 0-3.2 0v1.6a1.6 1.6 0 1 0 3.2 0zM25.051 9.212a1.6 1.6 0 0 0-2.263-2.263l-1.13 1.131a1.6 1.6 0 0 0 2.262 2.263zM28.8 16a1.6 1.6 0 0 1-1.6 1.6h-1.6a1.6 1.6 0 1 1 0-3.2h1.6a1.6 1.6 0 0 1 1.6 1.6M8.08 10.343a1.6 1.6 0 1 0 2.263-2.263L9.212 6.95a1.6 1.6 0 0 0-2.263 2.262zM8 16a1.6 1.6 0 0 1-1.6 1.6H4.8a1.6 1.6 0 1 1 0-3.2h1.6A1.6 1.6 0 0 1 8 16M12.8 25.6V24h6.4v1.6a3.2 3.2 0 1 1-6.4 0M19.201 22.4c.023-.544.33-1.034.761-1.374a6.4 6.4 0 1 0-7.926 0c.432.34.739.83.762 1.374z" />
  </svg>
);
export default SvgThemeSwitcher;
