import type { AxiosResponse } from 'axios';
import type {
  GetCasinoGamesRequestParams,
  GetCasinoGamesResponse,
  GetProvidersResponse,
  InitCasinoGamesRequestParams,
  InitCasinoGamesResponse,
} from './casino.types';
import { BaseApi } from '../utils/base.api';

export class CasinoApi extends BaseApi {
  async getProviders() {
    return this.axiosClient.get<void, AxiosResponse<GetProvidersResponse>>(`/Casino/providers`, {
      meta: BaseApi.PUBLIC_API_TOKEN,
    });
  }

  async getCasinoGames(payload: GetCasinoGamesRequestParams) {
    return this.axiosClient.post<GetCasinoGamesRequestParams, AxiosResponse<GetCasinoGamesResponse>>(
      `/Casino/getCasinoGames`,
      payload,
      { meta: BaseApi.PUBLIC_API_TOKEN }
    );
  }

  async initCasinoGame(payload: InitCasinoGamesRequestParams) {
    return this.axiosClient.post<GetCasinoGamesRequestParams, AxiosResponse<InitCasinoGamesResponse>>(
      `/Casino/initCasinoGame`,
      payload
    );
  }
}
