'use client';
import type { JackpotItemProps } from './JackpotItem';
import { JackpotItem } from './JackpotItem';

interface JackpotListProps {
  items: JackpotItemProps[];
}

export function JackpotList({ items }: JackpotListProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-black/15 dark:bg-white/15">
      {items.map((elem) => (
        <JackpotItem key={elem.id} {...elem} />
      ))}
    </div>
  );
}
