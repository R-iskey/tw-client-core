'use client'

import {
  Button,
  Drawer, DrawerClose,
  DrawerContent,
  DrawerDescription, DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Icon,
} from '@triple-win/ui';
import type { SidebarItemData } from './types';

interface SidebarMobileProps {
  items: SidebarItemData[]
}

export const SidebarMobile = ({ items }: SidebarMobileProps) => {
  return (
    <Drawer direction={'left'}>
      <DrawerTrigger asChild>
        <Button variant={'secondary'} className={'h-15 w-16'}>
          <Icon name={'Menu'} />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
