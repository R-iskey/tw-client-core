import type { PropsWithChildren } from 'react';
import { cn } from '@triple-win/ui';

interface LayoutProps extends PropsWithChildren {
  className?: string;
}

function Base({ children, className }: LayoutProps) {
  return <div className={cn('h-screen overflow-hidden', className)}>{children}</div>;
}

function Header({ children, className }: LayoutProps) {
  return (
    <header
      className={cn(`bg-background fixed left-0 right-0 top-0 z-[30] h-[100px] px-10 mx-auto`, className)}
    >
      <div className="flex justify-between items-center h-full w-full">{children}</div>
    </header>
  );
}

function Main({ children, className }: LayoutProps) {
  return (
    <main className={cn('flex w-full pt-[120px] h-full space-x-10 px-10', className)}>
      {children}
    </main>
  );
}

function Left({ children, className }: LayoutProps) {
  return <aside className={cn("flex-col w-[260px] h-full space-y-6", className)}>{children}</aside>;
}

function Content({ children, className }: LayoutProps) {
  return <section className={cn("flex-col grow h-full", className)}>{children}</section>;
}

function Footer({ children, className }: LayoutProps) {
  return <footer className={cn("p-10", className)}>{children}</footer>;
}

export const SakuraLayout = {
  Base,
  Header,
  Main,
  Left,
  Content,
  Footer
};
