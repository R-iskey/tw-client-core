import { HeaderMenu } from '../../widgets/header-menu/HeaderMenu';
import { HeaderProfile } from '../../widgets/header-profile/HeaderProfile';
import { LanguageSelector } from '../../widgets/language-selector/LanguageSelector';
import { Logo } from '../../widgets/logo/Logo';
import type { HeaderProps } from './header.types';

export default function HeaderDesktop({ settings }: HeaderProps) {
  return (
    <div className="flex justify-between items-center h-full w-full px-10">
      <Logo image={settings.brand.logo.dark} alt={settings.brand.name} />
      <HeaderMenu navigations={settings.mainNavigation} />
      <div className={'flex space-x-4'}>
        <HeaderProfile loginHref={'/auth/login'} signUpHref={'/auth/login'} />
        <LanguageSelector locale={settings.locale} />
      </div>
    </div>
  );
}
