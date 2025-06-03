import type { PropsWithChildren } from 'react';

export const MainTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className={'text-black dark:text-white uppercase font-black text-center text-4xl mb-6 tracking-widest'}>
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h1 className={'text-black dark:text-white uppercase font-black text-xl mb-6 tracking-widest'}>{children}</h1>;
};
