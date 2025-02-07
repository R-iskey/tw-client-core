// import { useTranslation } from 'react-i18next';
// import { isActiveRoute, useAppGlobals } from '@3win/helpers';
// import { cn } from '@tw/ui/utils/cn';

const MenuItemsSection = () => {
  // const { mainNavigation } = useAppGlobals();

  // const { t } = useTranslation();

  return (
    <nav>
      <ul className="flex xl:flex-row flex-col">
        {/*{mainNavigation.items.map((item) => (*/}
        {/*  <li key={item.path} className="px-3 2xl:px-4 mb-4 xl:mb-0">*/}
        {/*    <a*/}
        {/*      className={cn(*/}
        {/*        "text-sm 2xl:text-base text-foreground tracking-[.1em] uppercase no-underline relative font-bold after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[3px] after:bg-foreground after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full",*/}
        {/*        isActiveRoute(item.path) && 'after:w-full'*/}
        {/*      )}*/}
        {/*      href={item.path}*/}
        {/*    >*/}
        {/*      {t(item.name)}*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*))}*/}
      </ul>
    </nav>
  );
};

export default MenuItemsSection;
