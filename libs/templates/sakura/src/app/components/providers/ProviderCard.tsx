import { GameProvider } from '@3win/types/game-provider';

interface ProviderCardProps {
  provider: GameProvider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div
      className={
        'h-12 h-16 text-sm flex flex-1 items-center justify-center rounded-2xl px-4 bg-black/15 dark:bg-white/15'
      }
    >
      <div className={'me-2'}>
        {provider.icon && (
          <img className={'grayscale dark:brightness-100 brightness-0'} src={provider.icon} alt={provider.name} />
        )}
      </div>
      {/*{Boolean(count) && <span>{count}</span>}*/}
    </div>
  );
}
