import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils/cn';

const buttonVariants = cva(
  'flex items-center justify-center whitespace-nowrap rounded-full font-black text-base transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary-hover disabled:bg-primary-inactive disabled:text-primary-inactive-foreground max-w-80 h-11 px-4 py-2',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary-hover disabled:bg-secondary-inactive disabled:text-secondary-inactive-foreground max-w-80 h-11 px-4 py-2',
        'secondary-muted':
          'bg-secondary-muted text-foreground hover:bg-secondary-muted-hover dark:hover:bg-secondary-muted-hover-bright disabled:text-muted-foreground disabled:bg-secondary-muted max-w-80 h-11 px-4 py-2',
        // link: 'text-black dark:text-white bg-transparent max-w-fit hover:text-hover',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:bg-hover max-w-80',
        transparent: 'bg-transparent max-w-fit hover:bg-hover',
        passive:
          'bg-foreground text-foreground-reversed max-w-80 h-11 px-4 py-2 hover:enabled:bg-passive-hover disabled:text-white/30 dark:disabled:text-black/20',
      },
      size: {
        default: 'w-full', // We do not do much change here as we don't need link component to get that styles.
        // sm: 'h-8 rounded-md px-3 text-xs',
        // lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  to?: string;
  linkClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
