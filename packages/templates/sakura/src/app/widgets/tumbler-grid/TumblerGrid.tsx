'use client';

export interface TrendingItemProps {
  id: string;
  src: string;
  gameUrl: string;
  alt: string;
}
interface TrendingListProps {
  items: TrendingItemProps[];
}

export const TumblerGrid = ({ items }: TrendingListProps) => {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full">
        <div className="row-span-1 col-span-1 rounded-xl ">
          <img src={items[0].src} alt="Tundra Wolf" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-2 col-span-1 rounded-xl">
          <img src={items[1].src} alt="Panda Blitz" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-1 col-span-1 rounded-xl ">
          <img src={items[2].src} alt="Space Hunter" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-1 col-span-1 rounded-xl">
          <img src={items[3].src} alt="Jumanji" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-1 col-span-1 rounded-xl  relative">
          <img src={items[4].src} alt="Cheltenham" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};
