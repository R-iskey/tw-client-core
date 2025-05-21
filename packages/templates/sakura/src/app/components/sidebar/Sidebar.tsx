'use client';

import { Icon } from '@triple-win/ui';

interface SidebarProps {
  items: Array<{
    path: string;
    icon: string;
    name: string;
  }>;
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <div className="bg-primary dark:bg-white/15 dark:text-white rounded-3xl p-2.5 shadow-lg gap-2.5 flex flex-col">
      {items.map((item) => (
        <div key={item.name}>
          <div className="px-3.5 py-2.5 hover:bg-black/10 dark:hover:bg-white/15 transition-colors rounded-full cursor-pointer">
            <div>
              <a href={item.path} className="flex gap-2">
                <span>
                  <Icon name={item.icon} />
                </span>
                {item.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
;
