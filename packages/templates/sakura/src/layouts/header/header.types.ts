export interface HeaderProps {
  settings: {
    mainNavigation: Array<{ name: string, path: string }>;
    brand: {
      name: string;
      logo: {
        dark: string;
        light: string;
      }
    };
    locale: {
      default: string,
      available: Array<{code: string; label: string; shortLabel: string}>
    }
  };
  className?: string;

}
