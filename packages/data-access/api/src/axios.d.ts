import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    meta?: {
      isPublic?: boolean;
    };
  }
}
