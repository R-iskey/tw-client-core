import type { MainLayoutProps } from './main.types';
import type { PropsWithChildren } from 'react';
import { ContentNavigation } from '../../widgets/content-navigation/ContentNavigation';
import { SidebarMobile } from '../../widgets/sidebar/SidebarMobile';


export default function MainMobile({ settings, children }: MainLayoutProps & PropsWithChildren) {
  return <div className={'px-5'}>
    <div className={'flex gap-4 items-center pb-4'}>
      <SidebarMobile />
      <div className={'relative w-full overflow-hidden -mr-5'}>
        <ContentNavigation items={settings.pageNavigation} className={'rounded-r-none'}/>
      </div>
    </div>
    <div>
      {children}
    </div>
  </div>;
}
