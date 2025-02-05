import { ProviderCard } from './ProviderCard';
import React, { useState } from 'react';
import { useCasinoQuery } from '@3win/query-client';

export function ProvidersList() {
  const {
    providersQuery: { data: providers, isLoading },
  } = useCasinoQuery();

  const [showAll, setShowAll] = useState(false);

  if (isLoading) {
    // @TODO: add loader
    return null;
  }

  if (!providers) {
    return null;
  }

  const visibleProviders = showAll ? providers : providers.slice(0, 12);

  return (
    <div>
      <div className={'grid grid-cols-2 lg:grid-cols-6 2xl:grid-cols-7 gap-2.5'}>
        <div className={'bg-primary h-16 text-sm flex flex-1 items-center justify-center rounded-2xl text-white px-4'}>
          <span className={'me-2 font-medium'}>All Providers</span>
          <span>{providers.length}</span>
        </div>
        <div
          className={
            'bg-black/25 dark:bg-white/25 md:hidden h-16 text-sm flex flex-1 items-center justify-center rounded-2xl  px-4 cursor-pointer'
          }
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? 'Show Less' : 'See All'}</span>
        </div>
        {visibleProviders.map((provider, index) => (
          <ProviderCard key={index} provider={provider} />
        ))}
        <div
          className={
            'bg-black/25 dark:bg-white/25 hidden h-16 text-sm md:flex flex-1 items-center justify-center rounded-2xl  px-4 cursor-pointer'
          }
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? 'Show Less' : 'See All'}</span>
        </div>
      </div>
    </div>
  );
}
