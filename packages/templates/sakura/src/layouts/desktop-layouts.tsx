import type { PropsWithChildren } from 'react';
import { cn } from '@triple-win/ui';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

function Base({ children, className }: LayoutProps) {
  return <div className={cn('max-w-[1920px] mx-auto', className)}>{children}</div>;
}

function Header({ children, className }: LayoutProps) {
  return (
    <header className={cn(`bg-background sticky z-[30] h-[100px] px-10 mx-auto`, className)}>
      <div className="flex justify-between items-center h-full w-full">{children}</div>
    </header>
  );
}

function Main({ children, className }: LayoutProps) {
  return <main className={cn('flex w-full h-full space-x-10 px-10', className)}>{children}</main>;
}

function Left({ children, className }: LayoutProps) {
  return <aside className={cn('shrink-0 flex-col w-[260px] h-full space-y-6', className)}>{children}</aside>;
}

function Content({ children, className }: LayoutProps) {
  return <section className={cn('flex-col grow h-full flex-1 min-w-0', className)}>{children}</section>;
}

function Footer({ children, className }: LayoutProps) {
  return <footer className={cn('p-10', className)}>{children}</footer>;
}

export const SakuraLayout = {
  Base,
  Header,
  Main,
  Left,
  Content,
  Footer,
};
