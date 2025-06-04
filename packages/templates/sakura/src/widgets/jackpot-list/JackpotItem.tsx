'use client';

import { Counter } from '@triple-win/ui';
import Image from 'next/image';

export interface JackpotItemProps {
  id: string;
  amount: number;
  currency: string;
  icon: string;
}

export function JackpotItem({ amount, currency, icon }: JackpotItemProps) {
  return (
    <div className="grow flex border-r-3 border-white/15 last:border-none 2xl:px-5 px-3 w-full pt-3.5 pb-2">
      <div>
        <Image src={icon} alt={'jackpot'} width={64} height={64} />
      </div>
      <div className={'2xl:ml-4 ml-2 flex flex-col gap-1 relative'}>
        <Counter initial={amount} step={Math.floor(Math.random() * 24) + 1}>
          <sup className={'text-xs font-normal 2xl:pl-2 pl-1 absolute top-0'}>{currency}</sup>
        </Counter>
        <div>
          <span className={'text-muted-foreground'}>Some text</span>
        </div>
      </div>
    </div>
  );
}
