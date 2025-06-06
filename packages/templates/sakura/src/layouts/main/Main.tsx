'use client';

import { cn, useXlSize } from '@triple-win/ui';
import type { MainLayoutSettings } from './types';
import type { PropsWithChildren } from 'react';
import MainDesktop from './MainDesktop';
import MainMobile from './MainMobile';

interface MainLayoutProps extends  PropsWithChildren {
  className?: string;
  settings: MainLayoutSettings;
}
export function Main({ settings, children, className }: MainLayoutProps) {
  const isDesktop = useXlSize(); // xl: 1280px+

  const MainComponent = isDesktop ? MainDesktop : MainMobile;

  return (
    <main className={cn('w-full h-full', className)}>
      <MainComponent {...settings}>{children}</MainComponent>
    </main>
  );
}
