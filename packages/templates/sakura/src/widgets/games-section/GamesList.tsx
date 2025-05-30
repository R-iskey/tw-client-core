'use client';
import { SectionTitle } from '../typography/Typography';
import type { CasinoGame } from '@triple-win/api';
import type { CarouselApi } from '@triple-win/ui';
import { Button, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@triple-win/ui';
import { useRef } from 'react';
import { GameItem } from './GameItem';

interface GamesListProps {
  title?: string;
  items?: CasinoGame[];
  shouldAnimate?: boolean;
}

const carouselBtnStyles = 'static translate-x-0 translate-y-0 w-10 h-10 dark:bg-white/15';

export const GamesList = ({ title, items, shouldAnimate = true }: GamesListProps) => {
  const carouselRef = useRef<CarouselApi>(null);

  return (
    <div className={'pt-3 pb-10 border-b-2 mb-3 last:border-b-0'}>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full grid"
        setApi={(api) => (carouselRef.current = api)}
      >
        <div className="flex items-start justify-between mb-4">
          {title && (
            <SectionTitle>
              {title} ({items?.length})
            </SectionTitle>
          )}
          <div className="flex items-center gap-3">
            <CarouselPrevious className={carouselBtnStyles} />
            <CarouselNext className={carouselBtnStyles} />
            <Button className={'uppercase ml-4'} size={'lg'} variant={'secondary'}>
              See All
            </Button>
          </div>
        </div>

        <CarouselContent>
          {items?.map((game) => (
            <CarouselItem key={game.name} className="basis-1/4">
              <GameItem item={game} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
