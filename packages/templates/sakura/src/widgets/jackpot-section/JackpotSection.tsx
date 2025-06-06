'use client';
import { JackpotItem } from './JackpotItem';
import type { JackpotItemData } from './types';

interface JackpotListProps {
  items: JackpotItemData[];
}

export function JackpotSection({ items }: JackpotListProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-black/15 dark:bg-white/15">
      {items.map((elem) => (
        <JackpotItem key={elem.id} {...elem} />
      ))}
    </div>
  );
}
