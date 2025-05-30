import { type PropsWithChildren } from 'react';
import { Logo, SakuraLayout, FooterSection, Sidebar, HeaderMenu, HeaderProfile, LanguageSelector } from '@triple-win/template-sakura';
import { ContentNavigation } from '@triple-win/template-sakura';

const { Header, Base, Main, Left, Content, Footer } = SakuraLayout;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''; // Fallback for safety


export default async function Layout({ children }: PropsWithChildren) {
  const response = await fetch(`${baseUrl}/api/settings`);
  const settings = await response.json();

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
