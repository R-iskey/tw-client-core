import * as React from 'react';

import { cn } from '../utils/cn';
import { ReactNode, useState } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
  rightIcon?: ReactNode;
  rightIconClick?: (val: string) => void;
  leftIcon?: ReactNode;
  leftIconClick?: (val: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, containerClass, rightIcon, rightIconClick, leftIcon, leftIconClick, ...props }, ref) => {
    const [val, setVal] = useState('');

    return (
      <div className={cn(`grid w-72 items-center gap-1.5`, containerClass)}>
        <div className="relative w-full items-center">
          <input
            type={type}
            className={cn(
              'flex w-full border border-input px-3 py-1 font-medium shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 rounded-3xl bg-input-background focus-visible:ring-transparent dark:focus-visible:ring-transparent dark:focus-visible:ring-offset-0 dark:text-white h-10 hover:bg-input-hover focus:bg-input-hover',
              `${rightIcon && 'pr-10'}`,
              `${leftIcon && 'pl-10'}`,
              className
            )}
            ref={ref}
            onChange={(e) => {
              setVal(e.target.value);
              props.onChange && props.onChange(e);
            }}
            {...props}
          />

          {rightIcon && (
            <div
              className="absolute right-1 top-1 flex items-center justify-end p-2 dark:bg-violet-900 w-8 h-8 rounded-full cursor-pointer"
              onClick={() => rightIconClick && rightIconClick(val)}
            >
              {rightIcon}
            </div>
          )}

          {leftIcon && (
            <div
              className="absolute left-1 top-1 flex items-center justify-end p-2 dark:bg-violet-900 w-8 h-8 rounded-full cursor-pointer"
              onClick={() => leftIconClick && leftIconClick(val)}
            >
              {leftIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
