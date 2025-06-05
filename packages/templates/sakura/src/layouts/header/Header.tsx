'use client';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';
import { cn, useXlSize } from '@triple-win/ui';
import type { HeaderProps } from './header.types';

export function Header({ settings, className }: HeaderProps) {
  const isDesktop = useXlSize(); // xl: 1280px+

  const HeaderComponent = isDesktop ? HeaderDesktop : HeaderMobile;

  return (
    <header className={cn(`bg-background sticky z-[30] h-[100px] mx-auto`, className)}>
      <HeaderComponent settings={settings} />
    </header>
  );
}
