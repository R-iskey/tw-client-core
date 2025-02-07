import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, isAxiosError } from 'axios';
import Cookies from 'js-cookie';

interface TwinClientOptions {
  baseUrl: string;
  logoutUrl?: string;
  cookieAuthToken?: string;
}

export class TwinAxiosClient {
  client: AxiosInstance;

  constructor(options: TwinClientOptions) {
    const { logoutUrl, cookieAuthToken, baseUrl } = options;

    this.client = axios.create({
      baseURL: baseUrl,
    });

    if (cookieAuthToken) {
      this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        if (!config.meta?.isPublic) {
          const authToken = Cookies.get(cookieAuthToken);

          config.headers['Authorization'] = config.headers['Authorization'] || `${authToken}`;
        }

        return config;
      });
    }

    if (logoutUrl) {
      this.client.interceptors.response.use(
        (response: AxiosResponse) => response,
        (error: AxiosError | Error) => {
          if (isAxiosError(error) && error?.response?.status === 401) {
            window.location.replace(logoutUrl);
          }

          return Promise.reject(error);
        }
      );
    }
  }
}
