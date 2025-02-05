import { CasinoGame } from '@3win/types/casino-game';
import { generatePath, Link } from 'react-router-dom';
import { AppRoutes } from '@3win/config';

interface GameItemProps {
  game: CasinoGame;
}

export function GameItem({ game }: GameItemProps) {
  return (
    <Link to={generatePath(AppRoutes.Casino.PlayGame, { provider: game.provider, gameUrl: game.url.slice(1) })}>
      <div className={'relative'}>
        <div className={'z-10 rounded-2xl overflow-hidden flex flex-col items-center relative hover:cursor-pointer'}>
          <img src={game.imageUrl} alt={game.name} />
        </div>
      </div>
    </Link>
  );
}
