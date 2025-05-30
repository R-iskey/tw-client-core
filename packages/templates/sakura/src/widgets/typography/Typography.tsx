import type { PropsWithChildren } from 'react';

export const MainTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className={'text-black dark:text-white uppercase font-black text-center text-3xl mb-6 2xl:mb-10'}>
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h1 className={'text-black dark:text-white uppercase font-black text-xl mb-6'}>{children}</h1>;
};
