export interface MainLayoutProps {
  settings: {
    pageNavigation: Array<{name: string; icon: string; path: string}>;
    leftSidebar: Array<{name: string; icon: string; path: string}>;
    leftSidebar2: Array<{name: string; icon: string; path: string}>;
  };
  className?: string;

}
