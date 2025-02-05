import { AxiosResponse } from 'axios';
import { ProfileBalanceResponse } from './profile.types';
import { BaseApi } from '../common/base.api';

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
