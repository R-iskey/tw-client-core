'use client';

import { createContext, useContext } from 'react';
import { createTwinClient } from '@triple-win/api';
import { getCookie, deleteCookie } from 'cookies-next';

interface MainApiProviderConfig {
  baseUrl: string;
  authTokenCookieName: string;
  logoutRedirect: string;
}

const ApiContext = createContext<ReturnType<typeof createTwinClient> | null>(null);

export const useMainApi = () => useContext(ApiContext)!;

export function MainApiProvider({ children, config }: { children: React.ReactNode; config: MainApiProviderConfig }) {
  const api = createTwinClient({
    baseUrl: config.baseUrl,
    authTokenCookieName: config.authTokenCookieName,
    getAuthToken: () => {
      return getCookie(config.authTokenCookieName) as string;
    },
    onUnauthorized: () => {
      deleteCookie(config.authTokenCookieName);
      window.location.href = '/';
    },
  });
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
