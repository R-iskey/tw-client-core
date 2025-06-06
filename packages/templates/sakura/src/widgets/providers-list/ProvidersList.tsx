'use client';

import type { ProviderItemProps } from './ProviderItem';
import { ProviderItem } from './ProviderItem';
import React, { useState } from 'react';
import { cn, Link, useLgSize, useXlSize } from '@triple-win/ui';

interface ProvidersListProps {
  items: ProviderItemProps['item'][];
}

export const ProvidersList = ({ items }: ProvidersListProps) => {
  const [selectedProviders, setSelectedProviders] = useState<string[]>(['all']);
  const [showAll, setShowAll] = useState(false);

  const isTablets = useLgSize();
  const isDesktops = useXlSize();

  const length = isDesktops ? 16 : isTablets ? 10 : 5;

  const visibleProviders = showAll ? items : items.slice(0, length);

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
    <div className={'relative'}>
      {/* for mobile only floating see all */}
      {!isTablets && (
        <Link
          role={'button'}
          className={'absolute right-0 top-[-40px] tracking-wider text-muted-foreground uppercase font-black'}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'See All'}
        </Link>
      )}
      <div className={cn('grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-2.5')}>
        <ProviderItem
          onProviderSelect={handleSelectProvider}
          item={{
            id: 'all',
            name: 'All Providers',
            count: items.length,
          }}
          selected={selectedProviders.includes('all')}
        />
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
        {isTablets && (
          <ProviderItem
            onProviderSelect={() => setShowAll(!showAll)}
            item={{
              id: 'more',
              name: showAll ? 'Show Less' : 'See All',
            }}
            className={'dark:bg-white/25'}
          />
        )}
      </div>
    </div>
  );
};
