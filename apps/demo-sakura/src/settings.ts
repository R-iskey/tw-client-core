export const APP_SETTINGS = {
  mainNavigation: [
    { name: 'Offers', path: '/offers' },
    { name: 'Feedback', path: '/feedback' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ],
  brand: {
    name: 'Brand',
    logo: {
      dark: '/images/dark_logo.png',
      light: '/images/light_logo.png',
    },
  },
  pageNavigation: [
    { name: 'Home', icon: 'Home', path: '/' },
    { name: 'Games', icon: 'Gamepad', path: '/games' },
    { name: 'Casino', icon: 'SlotMachine', path: '/casino' },
    { name: 'Live Casino', icon: 'ConnectionSignal', path: '/live' },
    { name: 'Blog', icon: 'Layout', path: '/blog' },
    { name: 'Promotions', icon: 'Rocket', path: '/promotions' },
  ],
  leftSidebar: [
    { name: 'Lobby', path: '/lobby', icon: 'Home' },
    { name: 'For You', path: '/you', icon: 'Star' },
    { name: 'Popular', path: '/popular', icon: 'Flame' },
    { name: 'Classic', path: '/classic', icon: 'Rocket' },
    { name: 'Slots', path: '/slots', icon: 'SlotMachine' },
    { name: 'Unlimited Play', path: '/unlimited', icon: 'PlaystationSymbols' },
  ],
  leftSidebar2: [
    { name: 'Install App', path: '/install-app', icon: 'PlusSquare' },
    { name: 'For You', path: '/you', icon: 'TargetCircles' },
  ],
  locale: {
    default: 'en',
    available: [
      { code: 'en', label: 'English', shortLabel: 'eng' },
      { code: 'fr', label: 'French', shortLabel: 'fre' },
    ],
  },
};
