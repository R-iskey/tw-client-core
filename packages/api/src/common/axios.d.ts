import { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    meta?: {
      isPublic?: boolean;
    };
  }
}
