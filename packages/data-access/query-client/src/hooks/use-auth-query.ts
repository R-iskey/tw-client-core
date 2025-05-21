import type { CurrentUser, LoginRequest } from '@triple-win/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCookie, setCookie } from 'cookies-next';
import { useMainApi } from '../providers/MainApiProvider';

export const AUTH_USER_QK = 'AUTH_USER_QK';
export const USER_BALANCE_QK = 'USER_BALANCE_QK';
export const USER_SETTINGS_QK = 'USER_SETTINGS_QK';

export const useAuthQuery = () => {
  const queryClient = useQueryClient();
  const {
    authApi,
    profileApi,
    clientConfig: { authTokenCookieName, getAuthToken },
  } = useMainApi();

  const authToken = getAuthToken() as string;

  const authUserQuery = useQuery({
    queryKey: [AUTH_USER_QK],
    enabled: Boolean(authToken),
    queryFn: () => profileApi.fetchCurrentUser(),
    initialData: () => ({
      data: {} as CurrentUser,
    }),
    select(data) {
      return data.data;
    },
  });

  const userBalanceQuery = useQuery({
    queryKey: [USER_BALANCE_QK],
    enabled: Boolean(authToken),
    queryFn: () => profileApi.fetchBalance(),
  });

  const userSettingsQuery = useQuery({
    queryKey: [USER_SETTINGS_QK],
    enabled: Boolean(authToken),
    queryFn: () => profileApi.fetchSettings(),
  });

  const loginMutation = useMutation({
    mutationFn: (args: LoginRequest) => authApi.login(args),
    onSuccess: ({ data }) => {
      const token = data.token;

      if (token) {
        setCookie(authTokenCookieName, token);
        queryClient.invalidateQueries({
          queryKey: [AUTH_USER_QK, USER_BALANCE_QK, USER_SETTINGS_QK],
        });
      }
    },
  });

  async function logout() {
    deleteCookie(authTokenCookieName);
    queryClient.invalidateQueries({
      queryKey: [AUTH_USER_QK, USER_BALANCE_QK, USER_SETTINGS_QK],
    });
  }

  return {
    isAuthenticated: Boolean(authToken),
    authUserQuery,
    loginMutation,
    userBalanceQuery,
    userSettingsQuery,
    logout,
  };
};
