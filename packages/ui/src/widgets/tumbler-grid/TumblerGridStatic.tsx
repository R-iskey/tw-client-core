'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import type { TumblerGridItemData } from './types';

interface TumblerGridProps {
  items: TumblerGridItemData[];
}

const imgClasses =
  'w-full h-full object-cover rounded-xl cursor-pointer hover:shadow-lg hover:shadow-primary/30 hover:transform hover:scale-102 border-2 border-transparent transition-all duration-300 ease-in-out';

export const TumblerGridStatic = ({ items }: TumblerGridProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startHoverInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === null || prev === items.length - 1 ? 0 : prev + 1));
    }, 3500);
  };

  const clearHoverInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startHoverInterval();
    return clearHoverInterval;
  }, []);

  const handleMouseEnter = (index: number) => {
    clearHoverInterval();
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    startHoverInterval();
  };

  return (
    <div className="flex items-center">
      <div className="grid grid-cols-2 grid-rows-[105px_220px_105px] lg:grid-cols-4 lg:grid-rows-2 gap-3 lg:gap-7 w-full gap-4.5">
        {items.slice(0, 5).map((item, index) => (
          <div
            key={item.id}
            className={cn(
              index === 1
              ? 'col-span-2 row-span-1 row-start-2 lg:row-span-2 lg:col-span-2 lg:row-start-auto'
              : 'row-span-1 col-span-1'
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              className={cn(imgClasses, 'w-full h-full object-cover', activeIndex === index ? 'shadow-lg shadow-primary/30 transform scale-102' : '')}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
