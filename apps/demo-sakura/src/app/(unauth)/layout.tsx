import { type PropsWithChildren } from 'react';
import { Logo, SakuraLayout, FooterSection, Sidebar, HeaderMenu, HeaderProfile, LanguageSelector } from '@triple-win/template-sakura';
import { ContentNavigation } from '@triple-win/template-sakura';

const { Header, Base, Main, Left, Content, Footer } = SakuraLayout;

const settings = {
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
    {name: 'Slots', path: '/slots', icon: 'SlotMachine'},
    {name: 'Unlimited Play', path: '/unlimited', icon: 'PlaystationSymbols'},
  ],
  locale: {
    default: 'en',
    available: [
      {code: 'en', label: 'English', shortLabel: 'eng'},
      {code: 'fr', label: 'French', shortLabel: 'fre'},
    ]
  }
};


export default async function Layout({ children }: PropsWithChildren) {
  // const response = await fetch(`${baseUrl}/api/settings`);
  // const settings = await response.json();
  return (
    <Base>
      <Header>
        <Logo image={settings.brand.logo.dark} alt={settings.brand.name} />
        <HeaderMenu navigations={settings.mainNavigation} />
        <div className={'flex space-x-4'}>
          <HeaderProfile loginHref={'/auth/login'} signUpHref={'/auth/login'} />
          <LanguageSelector locale={settings.locale} />
        </div>
      </Header>
      <Main>
        <Left>
          {settings.leftSidebar && <Sidebar items={settings.leftSidebar} />}
        </Left>
        <Content>
          <ContentNavigation items={settings.pageNavigation} />
          {children}
        </Content>
      </Main>
      <Footer>
        <FooterSection />
      </Footer>
    </Base>
  );
}
