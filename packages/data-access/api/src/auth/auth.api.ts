import type { LoginRequest, LoginResponse, SignupRequest, SignupResponse } from './auth.types';
import type { AxiosResponse } from 'axios';
import { BaseApi } from '../utils/base.api';

export class AuthApi extends BaseApi {
  async login(payload: LoginRequest) {
    return this.axiosClient.post<LoginRequest, AxiosResponse<LoginResponse>>(`/Auth/signin`, payload, {
      meta: BaseApi.PUBLIC_API_TOKEN,
    });
  }

  async signup(payload: SignupRequest) {
    return this.axiosClient.post<SignupRequest, AxiosResponse<SignupResponse>>(`/Auth/signup`, payload, {
      meta: BaseApi.PUBLIC_API_TOKEN,
    });
  }
}
