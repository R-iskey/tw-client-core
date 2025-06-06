'use client';

import { SectionTitle } from '../typography/Typography';
import type { CasinoGame } from '@triple-win/api';
import { GameItem } from './GameItem';

interface GamesListProps {
  title?: string;
  items?: CasinoGame[];
}

export const FilteredGamesList = ({ title, items = [] }: GamesListProps) => {
  return (
    <div className={'pt-3 pb-10 border-b-2 mb-3 last:border-b-0'}>
      <div className="flex items-start justify-between">
        {title && (
          <SectionTitle>
            {title} ({items.length})
          </SectionTitle>
        )}
      </div>
      <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'}>
        {items.map((game) => (
          <GameItem key={game.name} item={game} />
        ))}
      </div>
    </div>
  );
};
