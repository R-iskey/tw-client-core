'use client';

import { cn } from '@triple-win/ui';
import type { PropsWithChildren } from 'react';

export const BaseLayout = ({ children, className }: PropsWithChildren & {className?: string}) => {
  return <div className={cn('max-w-[1920px] mx-auto', className)}>{children}</div>;
}
