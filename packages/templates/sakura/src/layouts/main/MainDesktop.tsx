import { Sidebar } from '../../widgets/sidebar/Sidebar';
import { ContentNavigation } from '../../widgets/content-navigation/ContentNavigation';
import type { MainLayoutProps } from './main.types';
import type { PropsWithChildren } from 'react';
import { cn } from '@triple-win/ui';


export default function MainDesktop({ settings, children }: MainLayoutProps & PropsWithChildren) {
  return (
    <div className={'flex space-x-10 px-10'}>
      <aside className={cn('shrink-0 flex-col xl:w-[260px] h-full space-y-6')}>
        {settings.leftSidebar && <Sidebar items={settings.leftSidebar} />}
        {settings.leftSidebar2 && <Sidebar items={settings.leftSidebar2} />}
      </aside>
      <div className={cn('flex-col grow h-full flex-1 min-w-0')}>
        <div className={'pb-6'}>
          <ContentNavigation items={settings.pageNavigation} />
        </div>
        {children}
      </div>
    </div>
  );
}
