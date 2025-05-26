'use client';

import { SectionTitle } from '../typography/Typography';
import type { CasinoGame } from '@triple-win/api';
import type { CarouselApi } from '@triple-win/ui';
import { Button, Carousel, CarouselContent, CarouselItem } from '@triple-win/ui';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from '@triple-win/icons';

interface GamesListProps {
  title?: string;
  items?: CasinoGame[];
}

export const GamesList = ({ title, items }: GamesListProps) => {
  const carouselRef = useRef<CarouselApi>(null);

  return (
    <div className={'pt-3 pb-10 border-b-2 mb-3 last:border-b-0'}>
      <div className="flex items-start justify-between">
        {title && <SectionTitle>{title}</SectionTitle>}
        <div className="flex items-center gap-3 -mt-2">
          <Button
            size={'icon'}
            variant={'secondary'}
            onClick={() => carouselRef.current?.scrollPrev()}
          >
            <ArrowLeft />
          </Button>
          <Button
            size={'icon'}
            variant={'secondary'}
            onClick={() => carouselRef.current?.scrollNext()}
          >
            <ArrowRight />
          </Button>
          <Button className={'uppercase ml-4'} size={'default'} variant={'secondary'}>
            See All
          </Button>
        </div>
      </div>
      <Carousel
        opts={{ align: 'start', loop: true }}
        className="w-full grid"
        setApi={(api) => (carouselRef.current = api)}
      >
        <CarouselContent>
          {items?.map((game) => (
            <CarouselItem key={game.name} className="basis-1/4">
              <div>
                <img src={game.imageUrl} alt={game.name} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
