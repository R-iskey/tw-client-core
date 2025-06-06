'use client';

import { useState } from 'react';
import { GamesFilter } from './GamesFilter';
import type { CasinoGame } from '@triple-win/api';
import { GamesList } from './GamesList';
import { FilteredGamesList } from './FilteredGamesList';

interface GameSectionProps {
  filters: {
    enable: boolean;
    hiddenCategories?: string[];
    onFilterApplied?: (filter: { category: string; searchValue?: string }) => void;
  };
  data: Array<{
    title?: string;
    items: CasinoGame[];
  }>;
}

export function GameSection(props: GameSectionProps) {
  const {
    filters: { enable: enableFilters = true, onFilterApplied, hiddenCategories },
    data = [],
  } = props;

  const [category, setCategory] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  // const {
  //   casinoGamesQuery: { data: gamesList, isLoading, fetchNextPage },
  // } = useCasinoQuery({ filter: [category] });

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    if (onFilterApplied) {
      onFilterApplied({ category: value, searchValue });
    }
  };

  const handleSearch = (search: string) => {
    setSearchValue(search);
    if (onFilterApplied) {
      onFilterApplied({ category, searchValue: search });
    }
  };

  const isFilterApplied = searchValue || category !== 'all';

  return (
    <div className={'space-y-10'}>
      <div className={'relative'}>
        {enableFilters && (
          <GamesFilter
            selectedCategory={category}
            hiddenCategories={hiddenCategories}
            onCategoryChange={handleCategoryChange}
            onSearch={handleSearch}
          />
        )}
      </div>
      {data.length === 0 ? (
        <p className={'text-lg text-center'}>No result found.</p>
      ) : (
        data.length === 1 || isFilterApplied ? (
          <FilteredGamesList title={data[0].title} items={data[0].items} />
        ) : (
          data.map((section) => <GamesList key={section.title} title={section.title} items={section.items} />)
        )
      )}
    </div>
  );
}
