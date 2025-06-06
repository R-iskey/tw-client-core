'use client';

import * as React from 'react';
import { useState } from 'react';

import { cn } from '../../utils/cn';
import { Input } from '../../components/input';
import { Icon } from '../../components/icon';
import { Button } from '../../components/button';

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
            className={cn(className)}
            ref={ref}
            {...props}
          />

          <div className="absolute flex top-0 right-0 items-center justify-end p-2 cursor-pointer">
            <Button type='button' variant={'ghost'} size={'icon'} onClick={() => setShow(!show)} className="text-muted-foreground">
              {show ? <Icon name={'EyeOpen'} /> :<Icon name={'EyeClosed'} />}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export { InputPassword };
