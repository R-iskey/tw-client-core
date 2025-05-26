import { type PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren) {
  return <div className={'max-w-lg mx-auto'}>
    {children}
  </div>;
}
