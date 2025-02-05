import { PropsWithChildren } from 'react';
import { TopHeader } from '@3win/top-header';
import { TopNavigation } from './TopNavigation';
import { LeftSidebar } from './LeftSidebar';
import { useAppGlobals } from '@3win/helpers';
import { Toaster } from '@3win/ui-kit/ui';

export function BaseLayout({ children }: PropsWithChildren) {
  const { topNavigation, leftSidebarTop, leftSidebarBottom } = useAppGlobals();

  return (
    <>
      <TopHeader />
      <div
        className={
          'flex relative flex-col lg:flex-row align-top gap-5 xl:gap-10 pt-[120px] px-[20px] pb-[40px] max-w-[1880px] mx-auto'
        }
      >
        <div className="flex-col space-y-4 hidden xl:block">
          {leftSidebarTop.enable && <LeftSidebar items={leftSidebarTop.items} />}
          {leftSidebarBottom.enable && <LeftSidebar items={leftSidebarBottom.items} />}
        </div>
        <div className="flex flex-1 flex-col w-full gap-[24px] xl:max-w-[calc(100vw-350px)] 2xl:max-w-[calc(100vw-370px)]">
          <Toaster />
          {topNavigation.enable && <TopNavigation items={topNavigation.items} />}
          <section>{children}</section>
        </div>
      </div>
    </>
  );
}
