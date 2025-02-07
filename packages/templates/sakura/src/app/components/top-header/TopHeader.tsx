import './TopHeader.scss';
import { useState } from 'react';
import MenuItemsSection from './sections/MenuItemsSection';
import ActionsSection from './sections/ActionsSection';
import { LogoSection } from './sections/LogoSection';
import { LanguageSection } from './sections/LanguageSection';

export function TopHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header
      className={`bg-background fixed left-0 right-0 top-0 z-[30] h-[100px] max-w-[1880px] mx-auto px-[20px] ${
        showMenu ? 'after:content-[""]' : 'after:content-none'
      } after:w-full after:h-[100vh] after:bg-black/60 after:absolute after:top-0 after:left-0 z-1`}
    >
      <div className="flex justify-between items-center h-full">
        <LogoSection />
        <div className="hidden xl:flex flex-1 pr-0 2xl:pr-14 justify-center 2xl:justify-end">
          <MenuItemsSection />
        </div>
        <div className="flex">
          <ActionsSection />
          <div className="flex xl:hidden items-center justify-center">
            <button onClick={() => setShowMenu(!showMenu)} type="button" className="relative w-10 h-10 z-40">
              <span
                className={`absolute h-[2.7px] bg-primary right-0  rounded-[2px] transition-transform ${
                  showMenu ? 'rotate-45 top-[18px] w-[20px]' : 'top-[10px] w-[15px]'
                }`}
              />
              <span
                className={`${
                  showMenu ? 'scale-0' : ''
                } absolute h-[2.7px] bg-primary right-0 top-[18px] w-[21px] rounded-[2px] transition-transform`}
              />
              <span
                className={`absolute h-[2.7px] bg-primary right-0  rounded-[2px] transition-transform ${
                  showMenu ? 'rotate-[-45deg] top-[18px] w-[20px]' : 'top-[26px] w-[11px]'
                }`}
              />
            </button>
          </div>
          <div
            className={`${
              showMenu
                ? 'bg-background fixed w-[340px] py-[60px] top-0 right-0 bottom-0 translate-x-0 overflow-y-auto'
                : 'hidden'
            } px-[20px]  transition-transform duration-300 ease-in-out w-0 z-10`}
          >
            <MenuItemsSection />
            <div className="block lg:hidden">
              <LanguageSection />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopHeader;
