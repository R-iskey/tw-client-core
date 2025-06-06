import { useXlSize } from '@triple-win/ui';
import type { SidebarItemData } from './types';
import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

interface SidebarProps {
  items: Array<SidebarItemData>;
}

export function Sidebar({ items }: SidebarProps) {
  const isDesktop = useXlSize(); // xl: 1280px+

  return isDesktop ? <SidebarDesktop items={items} /> : <SidebarMobile items={items} />
}
