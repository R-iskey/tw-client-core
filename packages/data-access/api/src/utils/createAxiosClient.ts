import type { AxiosInstance } from 'axios';
import axios from 'axios';

export type CreateAxiosClientOptions = {
  baseUrl: string;
  onUnauthorized?: () => void;
  getAuthToken: () => string | undefined;
}

export function createAxiosClient(options: CreateAxiosClientOptions): AxiosInstance {
  const client = axios.create({ baseURL: options.baseUrl })

  // Auth interceptor
  if (options.getAuthToken) {
    client.interceptors.request.use(config => {
      const token = options.getAuthToken!()
      if (token && !config.headers['Authorization']) {
        config.headers['Authorization'] = `Bearer ${token}`
      }
      return config
    })
  }

  // 401 interceptor
  if (options.onUnauthorized) {
    client.interceptors.response.use(
      res => res,
      err => {
        if (err?.response?.status === 401) {
          options.onUnauthorized!()
        }
        return Promise.reject(err)
      }
    )
  }

  return client
}
