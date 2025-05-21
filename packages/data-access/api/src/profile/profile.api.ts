import type { AxiosResponse } from 'axios';
import type { ProfileBalanceResponse } from './profile.types';
import { BaseApi } from '../utils/base.api';

export class ProfileApi extends BaseApi {
  async fetchCurrentUser() {
    return this.axiosClient.get<void, AxiosResponse>(`/Profile/getUserInfo`);
  }

  async fetchBalance() {
    return this.axiosClient.get<void, AxiosResponse<ProfileBalanceResponse>>(`/Profile/getUserBalance`);
  }

  async fetchSettings() {
    return this.axiosClient.get<void, AxiosResponse<void>>(`/Profile/getUserSettings`);
  }
}
