'use client';
import { SectionTitle } from '../typography/Typography';
import type { CasinoGame } from '@triple-win/api';
import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Link,
  useLgSize,
} from '@triple-win/ui';
import React, { useMemo, useRef, useState } from 'react';
import { GameItem } from './GameItem';
import chunkArray from '../../utils/chunkArray';

interface GamesListProps {
  title?: string;
  items: CasinoGame[];
}

const carouselBtnStyles = 'static translate-x-0 translate-y-0 w-10 h-10 dark:bg-white/15';

export const GamesList = ({ title, items = [] }: GamesListProps) => {
  const isLgSize = useLgSize();

  const [showAll, setShowAll] = useState(false);

  const groupedItems = useMemo(() => chunkArray(items, 4), [items]);

  return (
    <div className={'pt-3 pb-10 lg:border-b-2 mb-3 last:border-b-0 relative'}>
      {!isLgSize && (
        <Link
          role={'button'}
          className={'absolute right-0 top-4 tracking-wider text-muted-foreground uppercase font-black'}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'See All'}
        </Link>
      )}
      <Carousel opts={{ align: 'start', loop: true }} className="w-full">
        <div className="flex items-start justify-between">
          {title && (
            <SectionTitle>
              {title} ({items.length})
            </SectionTitle>
          )}
          <div className="hidden lg:visisble flex items-center gap-3 pb-3 xl:pb-0">
            <CarouselPrevious className={carouselBtnStyles} />
            <CarouselNext className={carouselBtnStyles} />
            <Button className={'uppercase ml-4'} size={'lg'} variant={'secondary'}>
              See All
            </Button>
          </div>
        </div>

        <CarouselContent>
          {groupedItems.map((group, idx) => (
            <CarouselItem key={idx}>
              <div className="grid grid-rows-[105px_105px] grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-1 w-full">
                {group.map((game) => (
                  <GameItem item={game} key={game.name} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
