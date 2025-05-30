import type { CasinoGame, GetCasinoGamesRequestParams } from '@triple-win/api';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { useMainApi } from '../providers/MainApiProvider';

export const CASINO_GAMES_QK = 'casinoGamesKey';
export const GAMES_PROVIDERS_QK = 'gamesProvidersKey';

type CasinoQueryParams = Omit<GetCasinoGamesRequestParams, 'count' | 'page'>;

export const useCasinoQuery = (params?: CasinoQueryParams) => {
  const { casinoApi } = useMainApi();

  const { providerFilter = [], filter = [] } = params || {};

  const casinoGamesQuery = useInfiniteQuery({
    queryKey: [CASINO_GAMES_QK],
    queryFn: ({ pageParam }) =>
      casinoApi.getCasinoGames({
        page: pageParam,
        count: 13,
        filter,
        providerFilter,
      }),
    select: ({ pages }) => {
      const gamesList: CasinoGame[] = [];
      pages.forEach(({ data }) => {
        data.data.forEach((game: CasinoGame) => {
          gamesList.push(game);
        });
      });

      return gamesList;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pageParma, page) => {
      return page + 1;
    },
  });

  const providersQuery = useQuery({
    queryKey: [GAMES_PROVIDERS_QK],
    queryFn: () => casinoApi.getProviders(),
    select: ({ data }) => data.data,
  });

  const initCasinoGameMutation = useMutation({
    mutationFn: casinoApi.initCasinoGame,
  });

  return {
    casinoGamesQuery,
    providersQuery,
    initCasinoGameMutation,
  };
};
