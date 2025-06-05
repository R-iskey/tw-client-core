'use client';

import { cn, useXlSize } from '@triple-win/ui';
import type { MainLayoutProps } from './main.types';
import type { PropsWithChildren } from 'react';
import MainDesktop from './MainDesktop';
import MainMobile from './MainMobile';

export function Main({ settings, children, className }: MainLayoutProps & PropsWithChildren) {
  const isDesktop = useXlSize(); // xl: 1280px+

  const MainComponent = isDesktop ? MainDesktop : MainMobile;

  return (
    <main className={cn('w-full h-full', className)}>
      <MainComponent settings={settings}>{children}</MainComponent>
    </main>
  );
}
