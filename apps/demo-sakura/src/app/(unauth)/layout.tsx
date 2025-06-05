import { type PropsWithChildren } from 'react';
import { Main } from '@triple-win/template-sakura';
import { APP_SETTINGS } from '../../settings';


export default async function Layout({ children }: PropsWithChildren) {
  // const response = await fetch(`${baseUrl}/api/settings`);
  // const settings = await response.json();
  return (
    <Main settings={APP_SETTINGS}>{children}</Main>
  );
}
