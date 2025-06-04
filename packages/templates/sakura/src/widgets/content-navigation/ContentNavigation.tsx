'use client';

import React from 'react';
import { Icon } from '@triple-win/ui';

interface TopNavigationProps {
  items: Array<{
    path: string;
    icon?: string;
    name: string;
  }>;
}

export const ContentNavigation = ({ items }: TopNavigationProps) => {
  return (
    <section role={'navigation'} className={'pb-6'}>
      <div className="flex bg-white dark:bg-white/15 p-[10px] rounded-full flex w-full h-[64px] shadow-lg overflow-x-auto scrollbar-hide pl-10 gap-4">
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
    </section>
  );
};
