import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 50" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M26.764 50c7.102-10.67 12.401-14.94 20.842-23.853 3.263-3.441 5.995-7.764 5.995-12.652C53.601 6.068 47.514 0 40.06 0c-6.519 0-11.983 4.642-13.249 10.77C25.531 4.642 20.06 0 13.541 0 6.089 0 0 6.068 0 13.495c0 4.595 2.726 9.747 5.65 12.652C14.49 34.914 19.828 40.24 26.764 50"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeart;
