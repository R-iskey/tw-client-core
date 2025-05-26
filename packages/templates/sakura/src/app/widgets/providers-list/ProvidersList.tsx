'use client';

import type { ProviderItemProps } from './ProviderItem';
import { ProviderItem } from './ProviderItem';
import React, { useState } from 'react';
import { cn } from '@triple-win/ui';
import { AnimatePresence } from 'framer-motion';

interface ProvidersListProps {
  items: ProviderItemProps['item'][];
}

export const ProvidersList = ({ items }: ProvidersListProps) => {
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const visibleProviders = showAll ? items : items.slice(0, 12);

  const handleSelectProvider = (providerId: string) => {
    setSelectedProvider(providerId);
  };

  return (
    <div>
      <div className={cn('grid grid-cols-2 lg:grid-cols-6 2xl:grid-cols-7 gap-2.5')}>
        <ProviderItem
          onProviderSelect={handleSelectProvider}
          item={{
            id: 'all',
            name: 'All Providers',
            count: items.length,
          }}
          selected={selectedProvider === 'all'}
        />
        <AnimatePresence initial={false}>
          {visibleProviders.map((provider, idx) => {
            return (
              <ProviderItem
                onProviderSelect={handleSelectProvider}
                selected={selectedProvider === provider.id}
                item={provider}
              />
            );
          })}
        </AnimatePresence>
        <ProviderItem
          onProviderSelect={() => setShowAll(!showAll)}
          item={{
            id: 'more',
            name: showAll ? 'Show Less' : 'See All',
          }}
        />
        {/*<div*/}
        {/*  className={*/}
        {/*    'bg-black/25 dark:bg-white/25 hidden h-14 text-sm md:flex flex-1 items-center justify-center rounded-2xl  px-4 cursor-pointer'*/}
        {/*  }*/}
        {/*  onClick={() => setShowAll(!showAll)}*/}
        {/*>*/}
        {/*  <span>{showAll ? 'Show Less' : 'See All'}</span>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
