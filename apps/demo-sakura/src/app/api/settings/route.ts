import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const data = {
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
        light: '/images/light_logo.png'
      }
    },
    pageNavigation: [
      {name: 'Home', path: '/'},
      {name: 'Games', path: '/games'},
      {name: 'Casino', path: '/casino'},
      {name: 'Live Casino', path: '/live'},
      {name: 'Blog', path: '/blog'},
      {name: 'Promotions', path: '/promotions'},
    ],
    leftSidebar: [
      {name: 'Lobby', path: '/lobby', icon: 'Home'},
      {name: 'For You', path: '/you', icon: 'Star'},
      {name: 'Popular', path: '/popular', icon: 'Flame'},
      {name: 'Classic', path: '/classic', icon: 'Rocket'},
      {name: 'Slots', path: '/slots', icon: 'RingBell'},
      {name: 'Unlimited Play', path: '/unlimited', icon: 'PsSymbols'},
    ],
    locale: {
      default: 'en',
      available: [
        {code: 'en', label: 'English', shortLabel: 'eng'},
        {code: 'fr', label: 'French', shortLabel: 'fre'},
      ]
    }
  };

  return NextResponse.json(data, { status: 200 });
}
