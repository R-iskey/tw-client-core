import { JackpotCounter } from './JackpotCounter';
export function JackpotList() {
  const jackpotList = [
    { id: 1, icon: 'spade', count: 1380037894 },
    { id: 2, icon: 'heart', count: 1380037894 },
    { id: 3, icon: 'diamond', count: 1380037894 },
    { id: 4, icon: 'club', count: 1380037894 },
  ];
  return (
    <div className="w-full">
      <h1
        className={
          'text-black dark:text-white uppercase font-bold text-center text-2xl lg:text-3xl 2xl:text-[40px] mb-6 2xl:mb-10'
        }
      >
        EGT / AMUSET<span className={'ms-4 text-primary'}>Jackpot</span>
      </h1>
      <div className="flex items-stretch overflow-x-auto scrollbar-hide rounded-[32px] bg-black/15 dark:bg-white/15">
        {jackpotList.map((elem, index) => (
          <div className="flex-1 flex justify-center items-center border-r-2 border-white/15 last:border-none">
            <JackpotCounter key={index} item={elem} />
          </div>
        ))}
      </div>
    </div>
  );
}
