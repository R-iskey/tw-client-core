'use client';

import React from 'react';
import { cn, Icon } from '@triple-win/ui';

interface TopNavigationProps {
  items: Array<{
    path: string;
    icon?: string;
    name: string;
  }>;
  className?: string;
}

export const ContentNavigation = ({ items, className }: TopNavigationProps) => {
  return (
    <div className={cn('bg-white dark:bg-white/15 p-[10px] h-[60px] rounded-full shadow-lg flex justify-center', className)}>
      <div
        role={'navigation'}
        className={cn("overflow-x-auto scrollbar-hide flex w-full lg:pl-10 lg:gap-4")}
      >
        {items.map((item) => (
          <a
            href={item.path}
            key={item.path}
            className={`px-5 py-2 flex items-center rounded-full cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 transition justify-center`}
          >
            {item.icon && (
              <span className="mr-2 dark:text-white text-black">
              <Icon name={item.icon} />
            </span>
            )}
            <span className="font-black whitespace-nowrap text-card-foreground dark:text-white">{item.name}</span>
          </a>
        ))}
      </div>
    </div>

  );
};
