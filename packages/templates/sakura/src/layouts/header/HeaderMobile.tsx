import type { HeaderSettings } from './types';
import { HeaderMenuMobile } from '../../widgets/header-menu/HeaderMenuMobile';
import { Logo } from '../../widgets/logo/Logo';

export default function HeaderMobile({ brand, mainNavigation, locale }: HeaderSettings) {
  return (
    <div className="flex justify-between items-center h-full w-full px-5">
      <Logo image={brand.logo.dark} alt={brand.name} />
      <HeaderMenuMobile />
    </div>
  );
}
