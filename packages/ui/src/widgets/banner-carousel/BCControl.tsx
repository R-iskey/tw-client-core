'use client';

import { useMemo } from 'react';
import { cn } from '../../utils/cn';

interface CarouselControlProps {
  decrementCarousel: () => void;
  incrementCarousel: () => void;
  jumpTo: (i: number) => void;
  currentIndex: number;
  totalFrames: number;
}

export const BCControl = ({jumpTo, currentIndex, totalFrames}: CarouselControlProps) => {
  const dots = useMemo(() => Array.from({ length: totalFrames }, (_, i) => i), [totalFrames])
  return (
    <div className={'flex gap-3 mt-6 justify-center items-center'}>
      {
        dots.map(i => (
          <span
            key={i}
            className={cn('transition rounded-sm w-[12px] h-[12px] dark:bg-white cursor-pointer', currentIndex === i && 'dark:bg-primary w-[16px] h-[16px] rounded-md')}
            onClick={() => jumpTo(i)}
          >
          </span>
        ))
      }
    </div>
  )
}
