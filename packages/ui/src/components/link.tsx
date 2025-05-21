import * as React from "react";
import { cn } from "../utils/cn";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  animated?: boolean;
}

export const Link = React.forwardRef<HTMLElement, LinkProps>(
  ({ as: Component = 'a', animated, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "inline-block no-underline underline-offset-4 focus:outline-none",
          className,
          animated && "tracking-[.1em] relative after:content-[''] transition-colors after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-foreground after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full",
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Link.displayName = "Link";
