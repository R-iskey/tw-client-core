import * as GeneratedIcons from '@triple-win/icons';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { type SVGProps } from 'react';
import { cn } from '../utils/cn';

export interface IconProps extends SVGProps<SVGSVGElement>, VariantProps<typeof iconVariants> {
  name: string | keyof typeof GeneratedIcons;
}

const iconVariants = cva('text-inherit dark:text-white', {
  variants: {
    size: {
      lg: `w-9 h-9`,
      default: `w-6 h-6`,
      md: 'w-[22px] h-[22px]',
      sm: `w-3.5 h-3.5`
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export const Icon = ({ className, size, name, ...props }: IconProps) => {
  const IconComponent = GeneratedIcons[name as keyof typeof GeneratedIcons];
  if (IconComponent) {
    return <IconComponent className={cn(iconVariants({ size, className }))} {...props} />;
  }

  return null;
};
