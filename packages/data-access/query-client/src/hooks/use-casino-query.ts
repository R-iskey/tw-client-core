import type { GetCasinoGamesRequestParams, CasinoGame } from '@triple-win/api';
import { CasinoApi } from '@triple-win/api';
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';

export const CASINO_GAMES_QK = 'casinoGamesKey';
export const GAMES_PROVIDERS_QK = 'gamesProvidersKey';

type CasinoQueryParams = Omit<GetCasinoGamesRequestParams, 'count' | 'page'>;

export const useCasinoQuery = (params?: CasinoQueryParams) => {
  const { providerFilter = [], filter = [] } = params || {};

  const casinoGamesQuery = useInfiniteQuery({
    queryKey: [CASINO_GAMES_QK],
    queryFn: ({ pageParam }) =>
      CasinoApi.getCasinoGames({
        page: pageParam,
        count: 13,
        filter,
        providerFilter,
      }),
    select: ({ pages }) => {
      const gamesList: CasinoGame[] = [];
      pages.forEach(({ data }) => {
        data.data.forEach((game) => {
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
    queryFn: () => CasinoApi.getProviders(),
    select: ({ data }) => data.data,
  });

  const initCasinoGameMutation = useMutation({
    mutationFn: CasinoApi.initCasinoGame,
  });

  return {
    casinoGamesQuery,
    providersQuery,
    initCasinoGameMutation,
  };
};
