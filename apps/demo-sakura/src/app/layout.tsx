import '@triple-win/template-sakura/styles/sakura-theme.css';
import { Inter } from 'next/font/google';

import { ThemeProvider as NextTheme } from 'next-themes';
import React from 'react';
import { MainApiProvider, ReactQueryProvider } from '@triple-win/query-client';

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Demo Sakura',
  description: 'Sakura Theme Demo',
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''; // Fallback for safety

async function getAppConfig() {
  const res = await fetch(`${baseUrl}/app-config.json`, {
    // cache: 'no-store', // optional: always fresh
  })
  const allConfigs = await res.json()
  // Use request headers to select correct config
  const host = res.headers.get('host') || 'default';
  return allConfigs[host];
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const config = await getAppConfig()
  if (!config) {
    throw new Error('No config found for this host');
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.variable} antialiased`}>
        <NextTheme enableSystem={false} attribute={'class'} defaultTheme={'dark'}>
          <MainApiProvider config={{
            baseUrl: config.baseUrl,
            authTokenCookieName: config.authTokenCookieName,
            logoutRedirect: '/',
          }}>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </MainApiProvider>
        </NextTheme>
      </body>
    </html>
  );
}
