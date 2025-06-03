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
  const [selectedProviders, setSelectedProviders] = useState<string[]>(['all']);
  const [showAll, setShowAll] = useState(false);

  const visibleProviders = showAll ? items : items.slice(0, 16);

  const handleSelectProvider = (providerId: string) => {
    if (providerId === 'all') {
      // Only select "All Providers"
      setSelectedProviders(['all']);
    } else {
      // Remove "all" if it's selected
      let nextSelected = selectedProviders.filter((id) => id !== 'all');
      // Toggle provider selection
      if (nextSelected.includes(providerId)) {
        nextSelected = nextSelected.filter((id) => id !== providerId);
      } else {
        nextSelected = [...nextSelected, providerId];
      }
      // If nothing is selected, fallback to "all"
      setSelectedProviders(nextSelected.length ? nextSelected : ['all']);
    }
  };

  return (
    <div>
      <div className={cn('grid grid-cols-2 lg:grid-cols-9 2xl:grid-cols-9 gap-2.5')}>
        <ProviderItem
          onProviderSelect={handleSelectProvider}
          item={{
            id: 'all',
            name: 'All Providers',
            count: items.length,
          }}
          selected={selectedProviders.includes('all')}
        />
        <AnimatePresence initial={false}>
          {visibleProviders.map((provider) => {
            return (
              <ProviderItem
                key={provider.id}
                onProviderSelect={handleSelectProvider}
                selected={selectedProviders.includes(provider.id)}
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
          className={'dark:bg-white/25'}
        />
      </div>
    </div>
  );
};
