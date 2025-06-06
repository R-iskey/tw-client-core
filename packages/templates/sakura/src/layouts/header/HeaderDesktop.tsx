import { HeaderMenu } from '../../widgets/header-menu/HeaderMenu';
import { HeaderProfile } from '../../widgets/header-profile/HeaderProfile';
import { LanguageSelector } from '../../widgets/language-selector/LanguageSelector';
import { Logo } from '../../widgets/logo/Logo';
import type { HeaderSettings } from './types';

export default function HeaderDesktop({ brand, mainNavigation, locale }: HeaderSettings) {
  return (
    <div className="flex justify-between items-center h-full w-full px-10">
      <Logo image={brand.logo.dark} alt={brand.name} />
      <HeaderMenu navigations={mainNavigation} />
      <div className={'flex space-x-4'}>
        <HeaderProfile
          authActions={{
            loginHref: '/auth/login',
            signUpHref: '/auth/login',
          }}
        />
        <LanguageSelector locale={locale} />
      </div>
    </div>
  );
}
