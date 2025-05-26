'use client';

import Image from 'next/image';

export interface WinnerItemProps {
  winnerId: string;
  amount: number;
  currency: string;
  game: {
    id: string;
    image: string;
  };
}

export function WinnerItem({ winnerId, amount, currency, game }: WinnerItemProps) {
  return (
    <div className={'px-4 flex flex-col gap-1'}>
      <Image src={game.image} alt={game.id} width={170} height={70} />
      <div>
        <div className={'font-bold text-lg relative'}>
          <span className={'tracking-wide'}>{amount.toLocaleString()}</span><sup className={'text-xs font-normal pl-2'}>{currency}</sup>
        </div>
        <span className={'text-muted-foreground'}>ID: {winnerId}</span>
      </div>
    </div>
  );
}
