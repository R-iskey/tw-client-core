import type { HeaderProps } from './header.types';
import { HeaderMenuMobile } from '../../widgets/header-menu/HeaderMenuMobile';
import { Logo } from '../../widgets/logo/Logo';

export default function HeaderMobile({ settings }: HeaderProps) {
  return (
    <div className="flex justify-between items-center h-full w-full px-5">
      <Logo image={settings.brand.logo.dark} alt={settings.brand.name} />
      <HeaderMenuMobile />
    </div>
  );
}
