import { AuthApi } from '../auth/auth.api';
import { CasinoApi } from '../casino/casino.api';
import type { CreateAxiosClientOptions } from './createAxiosClient';
import { createAxiosClient } from './createAxiosClient';
import { ProfileApi } from '../profile/profile.api';

export type TwinClientOptions = CreateAxiosClientOptions & {
  authTokenCookieName: string;
};

export function createTwinClient(clientConfig: TwinClientOptions) {
  const client = createAxiosClient(clientConfig);
  return {
    authApi: new AuthApi(client),
    casinoApi: new CasinoApi(client),
    profileApi: new ProfileApi(client),
    clientConfig: clientConfig
  };
}
