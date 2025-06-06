'use client'

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '../utils/cn';
import { Minus, Plus } from 'lucide-react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'group flex flex-1 items-center justify-between py-5 px-7 text-xl font-medium transition-all hover:bg-secondary-muted rounded-[24px] text-left [&[data-state=open]]:rounded-b-none',
        className
      )}
      {...props}
    >
      {children}
      <Plus
        className={
          'group-[&[data-state=open]]:hidden shrink-0 transition-transform duration-200 text-muted-foreground ml-7'
        }
      />
      <Minus
        className={
          'group-[&[data-state=closed]]:hidden flex shrink-0 transition-transform duration-200 text-muted-foreground ml-7'
        }
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-lg data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down py-5 px-7 border-t-2 border-black/25 dark:border-white/25"
    {...props}
  >
    <div className={cn(className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  type?: 'multiple' | 'single';
}

const AccordionWidget = ({ items, type = 'single' }: AccordionProps) => {
  return (
    <Accordion type={type} collapsible>
      {items.map(({ title, content }, i) => (
        <AccordionItem
          value={`item-${i}`}
          key={i}
          className={'bg-black/10 dark:bg-white/15 rounded-[24px] [&:not(:last-child)]:mb-4'}
        >
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export { AccordionWidget as Accordion, AccordionItem, AccordionTrigger, AccordionContent };
