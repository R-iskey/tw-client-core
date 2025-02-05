import { AxiosInstance } from 'axios';

export class BaseApi {
  static PUBLIC_API_TOKEN = {
    isPublic : true
  }

  constructor(protected readonly axiosClient: AxiosInstance) {}
}
