import type { MainLayoutSettings } from './types';
import type { PropsWithChildren } from 'react';
import { ContentMenu } from '../../widgets/content-menu/ContentMenu';
import { Sidebar } from '../sidebar/Sidebar';

export default function MainMobile({
  leftSidebar,
  leftSidebar2,
  pageNavigation,
  children,
}: MainLayoutSettings & PropsWithChildren) {
  return (
    <div className={'px-5'}>
      <div className={'flex gap-4 items-center pb-4'}>
        <Sidebar items={[]} />
        <div className={'relative w-full overflow-hidden -mr-5'}>
          <ContentMenu items={pageNavigation} className={'rounded-r-none'} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
