import type { PropsWithChildren } from 'react';

export const MainTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className={'text-black dark:text-white uppercase font-black text-center text-4xl lg:mb-4 2xl:mb-6 tracking-widest'}>
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h1 className={'text-black dark:text-white uppercase font-black text-xl lg:mb-4 2xl:mb-6 tracking-widest'}>{children}</h1>;
};
