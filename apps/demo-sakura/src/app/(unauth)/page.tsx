// import { GamesSection, ImageSlider, JackpotList, ProvidersList, WinnersList } from '@triple-win/template-sakura';

import { ContentNavigation } from '@triple-win/template-sakura/app/components/content-navigation/ContentNavigation';
import { LoginForm } from '@triple-win/template-sakura';

export default async function Index() {
  const response = await fetch('http://localhost:3000/api/settings');
  const settings = await response.json();

  return (
    <div>
      <section>
        <ContentNavigation items={settings.pageNavigation} />
      </section>
      <section className={'py-6'}>
        <LoginForm />
      </section>
      {/*<section className="pb-6 xl:pb-8 2xl:pb-10">*/}
        {/*<ImageSlider />*/}
      {/*</section>*/}
      {/*<section className={'py-6 xl:py-8 2xl:py-10'}>*/}
      {/*  <JackpotList />*/}
      {/*</section>*/}
      {/*<section className={'py-6 xl:py-8 2xl:py-10'}>*/}
      {/*  <WinnersList />*/}
      {/*</section>*/}
      {/*<section className={'py-6 xl:py-8 2xl:py-10'}>*/}
      {/*  <ProvidersList />*/}
      {/*</section>*/}
      {/*<section className={'py-6 xl:py-8 2xl:py-10'}>*/}
      {/*  <GamesSection />*/}
      {/*</section>*/}
    </div>
  );
}
