'use client';
import type { JackpotItemProps } from './JackpotItem';
import { JackpotItem } from './JackpotItem';

interface JackpotListProps {
  items: JackpotItemProps[];
  title?: string;
}

export function JackpotList({ items, title }: JackpotListProps) {
  return (
    <>
      {title && (
        <h1 className={'text-black dark:text-white uppercase font-black text-center text-3xl mb-6 2xl:mb-10'}>
          {title}
        </h1>
      )}
      <div className="flex overflow-x-auto scrollbar-hide rounded-3xl bg-black/15 dark:bg-white/15">
        {items.map((elem) => (
          <JackpotItem key={elem.id} {...elem} />
        ))}
      </div>
    </>
  );
}
