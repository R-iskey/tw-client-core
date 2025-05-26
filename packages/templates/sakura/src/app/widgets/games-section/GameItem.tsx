import type { CasinoGame } from '@triple-win/api';
import Link from 'next/link';

interface GameItemProps {
  game: CasinoGame;
}

export function GameItem({ game }: GameItemProps) {
  return (
    <Link href={`/casino/${game.provider}/${game.url.slice(1)}`}>
      <div className={'relative'}>
        <div className={'z-10 rounded-2xl overflow-hidden flex flex-col items-center relative hover:cursor-pointer'}>
          <img src={game.imageUrl} alt={game.name} />
        </div>
      </div>
    </Link>
  );
}
