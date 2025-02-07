import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { Search } from '@tw/icons';
import { Label } from '@tw/ui/components/label';
import { Input } from '@tw/ui/components/input';

export function GamesSection() {
  const [filter, setFilter] = useState('');

  const [searchValue, setSearchValue] = useState('');

  // const {
  //   casinoGamesQuery: { data: gamesList, isLoading, fetchNextPage },
  // } = useCasinoQuery({ filter: [filter] });

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setFilter(searchValue);
    }
  };

  return (
    <>
      <div className={'relative mb-4'}>
        <Label className={'ms-4 opacity-50'}>Search by game</Label>
        <Input
          placeholder="Search..."
          rightIcon={<Search />}
          value={searchValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
          onKeyDown={handleSubmit}
        />
      </div>
      {/*<div className={'grid grid-cols-2 lg:grid-cols-4 gap-5 2xl:gap-10'}>*/}
      {/*  {gamesList?.map((game) => (*/}
      {/*    <GameItem key={game.url} game={game} />*/}
      {/*  ))}*/}
      {/*</div>*/}
      {/*<div className={'flex justify-center mt-8'}>*/}
      {/*  <Button*/}
      {/*    disabled={isLoading}*/}
      {/*    onClick={() => fetchNextPage()}*/}
      {/*    className={'bg-secondary-foreground max-w-44 text-white px-4 py-2 uppercase rounded-full transition'}*/}
      {/*  >*/}
      {/*    Load More*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </>
  );
}
