import { Club, Diamond, Heart, Spade } from '@tw/icons';
import CountUp from 'react-countup';

export function JackpotCounter({ item }: any) {
  const icons: any = {
    club: <Club className={'text-primary'}></Club>,
    heart: <Heart className={'dark:white black'}></Heart>,
    diamond: <Diamond className={'dark:white black'}></Diamond>,
    spade: <Spade className={'text-primary'}></Spade>,
  };

  return (
    <div className="flex items-center justify-center w-full min-w-60 lg:min-w-full py-5 2xl:py-6">
      <div className={'w-8 2xl:w-12 me-2 2xl:me-4'}>{icons[item.icon]}</div>
      <div className={'font-bold text-black dark:text-white relative'}>
        <CountUp
          className={'block text-xl lg:text-[20px] 2xl:text-2xl w-[120px] lg:w-[135px] 2xl:w-[160px]'}
          duration={5}
          end={item.count}
        />
        <span className={'text-xs font-normal absolute bottom-6 -right-7 lg:-right-3'}>TZS</span>
      </div>
    </div>
  );
}
