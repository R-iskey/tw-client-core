import { Sidebar } from '../sidebar/Sidebar';
import { ContentMenu } from '../../widgets/content-menu/ContentMenu';
import type { PropsWithChildren } from 'react';
import { cn } from '@triple-win/ui';
import type { MainLayoutSettings } from './types';

export default function MainDesktop({
  leftSidebar,
  leftSidebar2,
  pageNavigation,
  children,
}: MainLayoutSettings & PropsWithChildren) {
  return (
    <div className={'flex space-x-10 px-10'}>
      <aside className={cn('shrink-0 flex-col xl:w-[260px] h-full space-y-6')}>
        {leftSidebar && <Sidebar items={leftSidebar} />}
        {leftSidebar2 && <Sidebar items={leftSidebar2} />}
      </aside>
      <div className={cn('flex-col grow h-full flex-1 min-w-0')}>
        <div className={'pb-6'}>
          <ContentMenu items={pageNavigation} />
        </div>
        {children}
      </div>
    </div>
  );
}
