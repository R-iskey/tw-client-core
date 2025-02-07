import { Avatar } from '@tw/icons';

export function WinnerCard({ id, amount }: any) {
  return (
    <div className={'flex items-center gap-5 px-4'}>
      <div
        className={
          'w-16 h-16 2xl:w-20 2xl:h-20 md:p-2 2xl:p-3 rounded-full flex items-center justify-center bg-userIcon'
        }
      >
        <Avatar className={'w-14 h-14 2xl:w-20 2xl:h-20'} />
      </div>
      <div>
        <div className={'font-bold relative md:text-lg lg:text-[20px] 2xl:text-2xl'}>
          {amount}
          <span className="text-xs font-normal absolute bottom-4 2xl:bottom-6 left-full translate-x-1 2xl:translate-x-2">
            TZS
          </span>
        </div>
        <div className="text-base">ID: {id}</div>
      </div>
    </div>
  );
}
