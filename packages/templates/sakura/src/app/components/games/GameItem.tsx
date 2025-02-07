import { CasinoGame } from '@tw/api';

interface GameItemProps {
  game: CasinoGame;
}

export function GameItem({ game }: GameItemProps) {
  return (
    // <Link to={generatePath(AppRoutes.Casino.PlayGame, { provider: game.provider, gameUrl: game.url.slice(1) })}>
    <div className={'relative'}>
      <div className={'z-10 rounded-2xl overflow-hidden flex flex-col items-center relative hover:cursor-pointer'}>
        <img src={game.imageUrl} alt={game.name} />2
      </div>
    </div>
    // </Link>
  );
}
