'use client';

import { cn } from '@triple-win/ui';

export interface ProviderItemProps {
  item: {
    id: string;
    name: string;
    icon?: string;
    count?: number;
  };
  className?: string;
  onProviderSelect: (providerId: string) => void;
  selected?: boolean;
}

export function ProviderItem({
  className,
  item: { id, name, icon, count },
  onProviderSelect,
  selected,
}: ProviderItemProps) {
  return (
    <div
      className={cn(
        'transition cursor-pointer h-14 text-sm flex flex-1 items-center justify-center rounded-2xl px-4',
        selected ? 'bg-primary' : 'bg-black/15 dark:bg-white/15',
        className
      )}
      onClick={() => onProviderSelect(id)}
    >
      <div className={'me-2'}>
        {icon ? (
          <img src={icon} alt={name} className="pointer-events-none" />
        ) : (
          <span className={'me-2 font-medium'}>{name}</span>
        )}
      </div>
      {!!count && <span className={'text-white/50'}>{count}</span>}
    </div>
  );
}
