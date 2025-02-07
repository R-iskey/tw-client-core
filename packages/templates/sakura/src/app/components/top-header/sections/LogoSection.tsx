// import { useThemeStore } from '@3win/store';
// import { useAppGlobals } from '@3win/helpers';

export const LogoSection = () => {
  // const { currentTheme } = useThemeStore();
  // const { logo } = useAppGlobals();

  return (
    <a className="block me-2 md:me-[20px] min-w-14 2xl:min-w-52" href="/">
      <picture>
        {/*<source srcSet={currentTheme === 'dark' ? logo.dark : logo.light} media="(min-width: 768px)" />*/}
        {/*<source srcSet={currentTheme === 'dark' ? logo.dark_mobile : logo.light_mobile} media="(max-width: 767px)" />*/}
        {/*<img srcSet={currentTheme === 'dark' ? logo.dark : logo.light} alt="logo" />*/}
      </picture>
    </a>
  );
};
