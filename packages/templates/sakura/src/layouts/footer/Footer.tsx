import type { PropsWithChildren } from 'react';
import { cn } from '@triple-win/ui';

const FMain = ({ children, className }: PropsWithChildren & { className?: string }) => {
  return <footer className={cn('xl:p-10 px-5', className)}>{children}</footer>;
};

const FGrid = ({ children, className }: PropsWithChildren & { className?: string }) => {
  return <div className={cn(
    'grid lg:grid-rows-[auto_1fr] lg:grid-cols-[auto_auto] xl:grid-rows-1 xl:grid-cols-[auto_auto_1fr] items-center w-full',
    'gap-y-10 lg:gap-y-0 gap-x-10 xl:gap-32', className)}
  >{children}</div>;
};

const FGridLast = ({ children, className }: PropsWithChildren & { className?: string }) => {
  return <div className={cn("lg:col-span-2 lg:row-start-2 xl:col-span-1 xl:row-start-auto mt-10 xl:mt-[-30px] xl:text-right", className)}>{children}</div>
}

const FLinksSection = ({ title, linksGroup }: {title: string; linksGroup: any[]}) => {
  return (
    <div>
      <h3 className="font-semibold text-xl">{title}</h3>
      <hr className={'mb-3 mt-1 bg-muted-foreground'} />
      <div className={'flex gap-12'}>
        {linksGroup.map((linkGroup: any, idx: number) => (
          <div key={idx}>
            <ul className="space-y-2">
              {linkGroup.map((link: any, idx2: number) => (
                <li key={idx2}>
                  <a href={link.href} className="hover:underline text-muted-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export const Footer = {
  FMain,
  FGrid,
  FLinksSection,
  FGridLast
};
