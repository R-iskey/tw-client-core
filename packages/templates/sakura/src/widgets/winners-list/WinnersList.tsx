'use client';

import type { WinnerItemProps } from './WinnerItem';
import { WinnerItem } from './WinnerItem';
import { Carousel, CarouselContent, CarouselItem, cn, Tabs, TabsContent, TabsList, TabsTrigger } from '@triple-win/ui';
import { useMemo } from 'react';

interface WinnersListProps {
  items: {
    [key: string]: WinnerItemProps[];
  };
}

export function WinnersList({ items }: WinnersListProps) {
  const tabs = useMemo(() => Object.keys(items), [items]);
  const defaultTab = useMemo(() => tabs[0], [items]);

  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList className="grid w-full grid-cols-3 rounded-2xl xl:rounded-full p-0 max-w-[660px] mx-auto">
        {tabs.map((tabLabel) => (
          <TabsTrigger
            key={tabLabel}
            value={tabLabel}
            className={'whitespace-normal xl:whitespace-nowrap uppercase font-black dark:data-[state=active]:bg-white rounded-2xl xl:rounded-full py-2 tracking-widest'}
          >
            {tabLabel}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tabLabel) => (
        <TabsContent value={tabLabel} key={tabLabel} className={'mt-4 dark:bg-white/15 xl:rounded-2xl pt-3 pb-2 xl:static -ml-5 -mr-5 xl:ml-0 xl:mr-0'}>
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full grid"
            autoPlay={{
              delay: 2000,
            }}
          >
            <CarouselContent>
              {items[tabLabel].map((winner) => (
                <CarouselItem key={winner.winnerId} className="basis-1/3 sm:basis-1/4 xl:basis-1/6 2xl:basis-1/9">
                  <div className="pt-1">
                    <WinnerItem key={winner.winnerId} {...winner} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </TabsContent>
      ))}
    </Tabs>
  );
}
