import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Close, Icon, SidebarIcon } from '@3win/icons';
import { LeftSidebar } from './LeftSidebar';
import { useAppGlobals } from '@3win/helpers';

interface TopNavigationProps {
  items: Array<{
    path: string;
    icon: string;
    name: string;
  }>;
}
export const TopNavigation = ({ items }: TopNavigationProps) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { topNavigation, leftSidebarTop, leftSidebarBottom } = useAppGlobals();
  useEffect(() => {
    if (showMenu) {
      document.querySelector('body')?.classList.add('blur-effect');
    } else {
      document.querySelector('body')?.classList.remove('blur-effect');
    }
  }, [showMenu]);
  return (
    <div className={'flex justify-start gap-6 items-stretch'}>
      {/* MobileLeftSideBar */}
      <div className={'block xl:hidden'}>
        <button
          className="dark:text-white text-foreground w-[64px] h-[64px] flex flex-shrink-0 items-center justify-center bg-white dark:bg-white/15 rounded-full"
          type="button"
          onClick={() => setShowMenu(true)}
        >
          <SidebarIcon />
        </button>
        {showMenu && (
          <div className={'absolute flex gap-1 items-start top-0 left-0 z-40 h-[100vh] w-full pt-[120px] px-5'}>
            <div className={'space-y-4'}>
              {leftSidebarTop.enable && <LeftSidebar items={leftSidebarTop.items} />}
              {leftSidebarBottom.enable && <LeftSidebar items={leftSidebarBottom.items} />}
            </div>
            <button
              className={'relative top-0 -translate-y-6 bg-white/30 p-1 rounded-full'}
              onClick={() => setShowMenu(false)}
            >
              <Close />
            </button>
          </div>
        )}
      </div>
      {/* MobileLeftSideBar */}
      <div className="bg-white dark:bg-white/15 p-[10px] rounded-full flex flex-grow-1 w-full h-[64px] shadow-lg overflow-x-auto scrollbar-hide">
        {items.map((item, index) => (
          <a
            href={item.path}
            key={index}
            className={`${index === 0 ? 'ms-auto' : ''}${
              index === items.length - 1 ? 'mr-auto' : ''
            } flex items-center px-[14px] py-[10px] rounded-[30px] cursor-pointer hover:bg-black/10 dark:hover:bg-white/15 transition`}
          >
            {item.icon && (
              <span className="mr-2 dark:text-white text-black">
                <Icon name={item.icon} />
              </span>
            )}
            <span className="text-sm 2xl:text-base font-medium whitespace-nowrap text-card-foreground dark:text-white">
              {item.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
