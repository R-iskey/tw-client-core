'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { TrendingItemProps } from './TumblerGrid';
import { cn } from '@triple-win/ui';

type TumblerGridProps = {
  items: TrendingItemProps[];
  cellClassNames?: string[]; // For custom per-cell style
  bigCellIdx?: number; // index of the big cell
};

type TumblerCellProps = {
  images: TrendingItemProps[];
  initialIdx: number;
  isAnimating: boolean;
  onAnimationEnd: () => void;
  className?: string;
};

// ------- Animation logic ---------
const ANIMATION_DURATION = 0.6; // seconds
const INTERVAL = 2500; // ms between waves
const CELLS_COUNT = 5; // visible cells

function getRandomSubset(arr: number[], n: number) {
  // Randomly pick n unique items from arr
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

// Helper for a new random image index
function getRandomNextIdx(curr: number, total: number) {
  let next = curr;
  while (next === curr) {
    next = Math.floor(Math.random() * total);
  }
  return next;
}

export const TumblerCell: React.FC<TumblerCellProps> = ({
  images,
  initialIdx,
  isAnimating,
  onAnimationEnd,
  className = '',
}) => {
  const [currentIdx, setCurrentIdx] = useState(initialIdx);
  const [nextIdx, setNextIdx] = useState(getRandomNextIdx(initialIdx, images.length));
  const [showingNext, setShowingNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isAnimating && !isHovered) {
      setShowingNext(true);
      const timer = setTimeout(() => {
        setCurrentIdx(nextIdx);
        setNextIdx(getRandomNextIdx(nextIdx, images.length));
        setShowingNext(false);
        onAnimationEnd();
      }, ANIMATION_DURATION * 1000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, nextIdx, onAnimationEnd, isHovered]);

  return (
    <div
      className={cn(className,
        'cursor-pointer rounded-xl overflow-hidden shadow-md flex items-center justify-center relative border-2 border-transparent transition-all duration-300 ease-in-out',
        'hover:shadow-lg hover:shadow-primary/30 hover:transform hover:scale-102',
      )}
      style={{ perspective: 600 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Current image: always slides down */}
      <motion.img
        key={`current-${currentIdx}-${nextIdx}`}
        src={images[currentIdx].src}
        alt={images[currentIdx].alt}
        className="absolute w-full h-full object-cover top-0 left-0"
        animate={isAnimating && !isHovered ? { y: '100%', opacity: 0 } : { y: '0%', opacity: 1 }}
        initial={{ y: '0%', opacity: 1 }}
        transition={{ duration: ANIMATION_DURATION, ease: 'easeInOut' }}
        draggable={false}
        style={{ zIndex: 1 }}
      />
      {/* Next image: only render while animating, always slides in from top */}
      {showingNext && (
        <motion.img
          key={`next-${nextIdx}-${currentIdx}`}
          src={images[nextIdx].src}
          alt={images[nextIdx].alt}
          className="absolute w-full h-full object-cover top-0 left-0"
          animate={{ y: '0%', opacity: 1 }}
          initial={{ y: '-100%', opacity: 0 }}
          transition={{ duration: ANIMATION_DURATION, ease: 'easeInOut' }}
          draggable={false}
          style={{ zIndex: 2 }}
        />
      )}
    </div>
  );
};

export const TumblerGridAnimated: React.FC<TumblerGridProps> = ({ items = [] }) => {
  // Animation state: which cells are animating (by index)
  const [animatingCells, setAnimatingCells] = useState<boolean[]>(Array(CELLS_COUNT).fill(false));

  // Define cell order and grid areas based on your design
  // [ 0 | 1(big) | 2 ]
  // [ 3 |       | 4 ]
  // Grid: 2 rows × 3 columns, but the center (index 1) is big (rowSpan+colSpan)

  // Map each visual cell to an image index (can randomize for production)
  const gridCells = [
    { idx: 0, className: 'row-span-1 col-span-1 rounded-xl' },
    {
      idx: 1, // big image
      className: 'row-span-2 col-span-1 rounded-xl',
    },
    { idx: 2, className: 'row-span-1 col-span-1 rounded-xl' },
    { idx: 3, className: 'row-span-1 col-span-1 rounded-xl' },
    { idx: 4, className: 'row-span-1 col-span-1 rounded-xl' },
  ];

  // "Global" ticker
  useEffect(() => {
    const interval = setInterval(() => {
      // Each wave, animate 2 or 3 cells
      const cellIndexes = Array.from({ length: CELLS_COUNT }, (_, i) => i);
      const cellsToAnimate = getRandomSubset(cellIndexes, 2 + Math.floor(Math.random() * 2));
      setAnimatingCells((prev) => prev.map((_, i) => cellsToAnimate.includes(i)));
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Called when a cell finishes its animation
  const handleAnimationEnd = (cellIdx: number) => {
    setAnimatingCells((prev) => prev.map((anim, i) => (i === cellIdx ? false : anim)));
  };

  return (
    <div
      className={'grid grid-cols-3 grid-rows-2 gap-4 w-full relative'}
      style={{
        gridTemplateColumns: `20% 50% 25%%`,
        gridTemplateRows: `185px 185px`,
      }}
    >
      {gridCells.map((cell, i) => (
        <TumblerCell
          key={i}
          images={items}
          initialIdx={cell.idx}
          className={cell.className}
          onAnimationEnd={() => handleAnimationEnd(cell.idx)}
          isAnimating={animatingCells[cell.idx]}
        />
      ))}
    </div>
  );
};
