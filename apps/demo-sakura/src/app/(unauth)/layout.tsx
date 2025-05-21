import { type PropsWithChildren } from 'react';
import { Logo, SakuraLayout, Sidebar, HeaderMenu, HeaderProfile, LanguageSelector } from '@triple-win/template-sakura';

const { Header, Base, Main, Left, Content, Footer } = SakuraLayout;

export default async function Layout({ children }: PropsWithChildren) {
  const response = await fetch('http://localhost:3000/api/settings');
  const settings = await response.json();

  return (
    <Base>
      <Header>
        <Logo image={settings.brand.logo} alt={settings.brand.name} />
        <HeaderMenu navigations={settings.mainNavigation} />
        <div className={'flex space-x-4'}>
          <HeaderProfile />
          <LanguageSelector locale={settings.locale} />
        </div>
      </Header>
      <Main>
        <Left>
          {settings.leftSidebar && <Sidebar items={settings.leftSidebar} />}
        </Left>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </Base>
  );
}
