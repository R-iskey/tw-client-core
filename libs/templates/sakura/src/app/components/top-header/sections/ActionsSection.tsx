import { Theme } from '@3win/types/enums/theme.enum';
import { ThemeSwitcher } from '@3win/icons';
import { useThemeStore } from '@3win/store';
import { AuthLinks } from './AuthLinks';
import { LanguageSection } from './LanguageSection';

const ActionsSection = () => {
  const { currentTheme, toggleTheme } = useThemeStore();
  const isDarkMode = currentTheme === Theme.Dark;
  return (
    <div className="flex gap-4">
      <AuthLinks />
      <div className="hidden lg:block">
        <LanguageSection />
      </div>
      <div className="theme-switcher flex items-center">
        <label className="cursor-pointer block w-[32px]" htmlFor="theme-switcher">
          {isDarkMode ? <ThemeSwitcher className="dark-icon" /> : <ThemeSwitcher className="text-primary" />}
        </label>
        <input checked={isDarkMode} onChange={toggleTheme} type="checkbox" className="hidden" id="theme-switcher" />
      </div>
    </div>
  );
};

export default ActionsSection;
