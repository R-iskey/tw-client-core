'use client';

import * as React from "react";
import { cn } from "../utils/cn";

interface InputProps extends React.ComponentProps<"input"> {
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rightIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-3xl dark:bg-black/50 bg-white pl-5 pr-12 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className,
            rightIcon ? "pr-12" : "pr-5"
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && (
          <span className="absolute inset-y-0 right-2 flex items-center">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
