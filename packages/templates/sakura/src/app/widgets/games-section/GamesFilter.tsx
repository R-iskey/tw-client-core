'use client';

import React, { type KeyboardEvent, useState } from 'react';
import { Button, cn, Icon, Input } from '@triple-win/ui';

const gameCategories = [
  { name: 'All', value: 'all', icon: 'Menu' },
  { name: 'Last Played', value: 'recent', icon: 'Recent' },
  { name: 'Top Games', value: 'top', icon: 'Trophy' },
  { name: 'Favorites', value: 'favorites', icon: 'Star' },
  { name: 'Hot now', value: 'hot', icon: 'Flame' },
];

interface GamesFilterProps {
  onCategoryChange: (value: string) => void;
  onSearch: (searchValue: string) => void;
  hiddenCategories?: string[];
  selectedCategory?: string;
}

export const GamesFilter = (props: GamesFilterProps) => {
  const { hiddenCategories, onCategoryChange, onSearch } = props;

  const availableCategories = gameCategories.filter((category) => !hiddenCategories?.includes(category.value));
  const selectedCategory = props.selectedCategory || availableCategories[0]?.value;

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(event.currentTarget.value);
    }
  };

  return (
    <div className={'flex justify-between items-center mb-3'}>
      <div className={'flex gap-2 flex-4'}>
        {availableCategories.map((category) => (
          <div
            key={category.value}
            className={cn(
              'min-w-[74px] flex items-center gap-1 px-1 py-3 rounded-xl dark:bg-white/15 transition flex-col cursor-pointer',
              selectedCategory === category.value && 'dark:bg-primary'
            )}
            role={'button'}
            onClick={() => onCategoryChange(category.value)}
          >
            <Icon name={category.icon} className={'w-6 h-6'} />
            <span className={'text-xs'}>{category.name}</span>
          </div>
        ))}
      </div>
      <div className={'flex-1'}>
        <Input
          placeholder={'Search by game'}
          rightIcon={
          <span className={'rounded-full dark:bg-white/15 p-2 cursor-pointer hover:bg-white/20 transition'}>
            <Icon name={'Search'} />
          </span>
          }
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
};
