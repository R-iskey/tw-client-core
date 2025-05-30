'use client';

import { useEffect } from 'react';
import { useCasinoQuery } from '@triple-win/query-client';

interface PlayGameIframeProps {
  gameUrl: string;
  provider: string;
}
export const PlayGameIframe = ({ gameUrl, provider }: PlayGameIframeProps) => {
  const {
    initCasinoGameMutation: { mutate: fetchGameUrl, data, isPending },
  } = useCasinoQuery();

  useEffect(() => {
    if (gameUrl && provider) {
      fetchGameUrl({
        aggregator: provider,
        demo: true,
        mobile: false,
        url: '/' + gameUrl,
        locale: 'en',
      });
    }
  }, [gameUrl, provider]);

  if (!data?.data.url && !isPending) {
    // @FIXME: game not loaded
    return null;
  }

  if (isPending) {
    // @Fixme: add loader
    return null;
  }

  return <iframe src={data.data.url} className={'w-full h-[100vh]'} allowFullScreen />;
};
