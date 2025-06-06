'use client';

import { Counter, useXlSize } from '@triple-win/ui';
import Image from 'next/image';
import type { JackpotItemData } from './types';

export function JackpotItem({ amount, currency, icon }: JackpotItemData) {
  const isXl = useXlSize();

  return (
    <div className="grow flex lg:px-5 px-3 w-full py-2 border-r-3 border-white/15 even:border-0 even:lg:border-r-3 last:lg:border-0! nth-1:border-b-3 nth-2:border-b-3 nth-1:lg:border-b-0 nth-2:lg:border-b-0">
      <div>
        <Image src={icon} alt={'jackpot'} width={isXl ? 64 : 40} height={isXl ? 64 : 40} />
      </div>
      <div className={'xl:ml-4 ml-3 flex flex-col xl:gap-1 relative pt-1'}>
        <Counter initial={amount} step={Math.floor(Math.random() * 24) + 1}>
          <sup className={'text-xs font-normal xl:pl-2 pl-1 absolute top-0'}>{currency}</sup>
        </Counter>

        <span className={'text-muted-foreground text-sm xl:text-base'}>Some text</span>
      </div>
    </div>
  );
}
