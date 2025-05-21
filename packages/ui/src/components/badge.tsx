'use client'

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/cn';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg h-9 font-medium text-[13px]',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary-hover ',
        secondary: 'border-transparent bg-secondary text-foreground dark:text-black hover:bg-secondary-hover',
        'secondary-muted':
          'bg-black/5 dark:bg-black/25 hover:bg-secondary-hover dark:hover:bg-secondary-muted-hover-bright',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className, props.onClick && 'cursor-pointer')} {...props} />;
}

export { Badge, badgeVariants };
