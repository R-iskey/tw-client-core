'use client';

import { cn, Link } from '@triple-win/ui';
import { default as NextLink } from 'next/link';

import { usePathname } from 'next/navigation';

interface HeaderMenuProps {
  navigations: Array<{
    path: string;
    name: string;
  }>;
}

export function HeaderMenu({ navigations }: HeaderMenuProps) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav>
      <ul className="flex flex-row space-x-9">
        {navigations.map((item) => (
          <li key={item.path}>
            <Link
              className={cn('uppercase', isActive(item.path) && 'after:w-full')}
              href={item.path}
              as={NextLink}
              animated
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
