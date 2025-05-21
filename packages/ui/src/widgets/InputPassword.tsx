'use client';

import * as React from 'react';
import { useState } from 'react';

import { cn } from '../utils/cn';
import { EyeIcon, EyeIconNotAllowed } from '@triple-win/icons';
import { Input } from '../components/input';

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
}

const InputPassword = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, containerClass, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div className={cn(`grid w-72 items-center gap-1.5`, containerClass)}>
        <div className="relative w-full items-center">
          <Input
            type={show ? 'text' : 'password'}
            className={cn(
              'flex w-full px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 rounded-3xl bg-input-background focus-visible:ring-transparent dark:focus-visible:ring-transparent dark:focus-visible:ring-offset-0 dark:text-white h-10 pr-10 hover:bg-input-hover focus:bg-input-hover',
              className
            )}
            ref={ref}
            {...props}
          />

          <div className="absolute right-1 top-1 flex items-center justify-end p-2 cursor-pointer">
            <button type={'button'} onClick={() => setShow(!show)} className="text-muted-foreground">
              {show ? <EyeIcon /> : <EyeIconNotAllowed />}
            </button>
          </div>
        </div>
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export { InputPassword };
