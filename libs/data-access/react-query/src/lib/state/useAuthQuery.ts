import { AuthApi, ProfileApi, SignupResponseError } from '@3win/rest-api';
import { cookies } from '@3win/helpers';
import { COOKIE_AUTH_TOKEN_KEY } from '@3win/config';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { CurrentUser } from '@3win/types/current-user';

export const AUTH_USER_QK = 'AUTH_USER_QK';
export const USER_BALANCE_QK = 'USER_BALANCE_QK';
export const USER_SETTINGS_QK = 'USER_SETTINGS_QK';

export const useAuthQuery = () => {
  const queryClient = useQueryClient();

  const authToken = cookies.get(COOKIE_AUTH_TOKEN_KEY) as string;

  const authUserQuery = useQuery({
    queryKey: [AUTH_USER_QK],
    enabled: Boolean(authToken),
    queryFn: () => ProfileApi.fetchCurrentUser(),
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
    queryFn: () => ProfileApi.fetchBalance(),
  });

  const userSettingsQuery = useQuery({
    queryKey: [USER_SETTINGS_QK],
    enabled: Boolean(authToken),
    queryFn: () => ProfileApi.fetchSettings(),
  });

  const loginMutation = useMutation({
    mutationFn: AuthApi.login,
    onSuccess: ({ data }) => {
      const token = data.token;

      if (token) {
        cookies.set(COOKIE_AUTH_TOKEN_KEY, token);
        queryClient.invalidateQueries({
          queryKey: [AUTH_USER_QK, USER_BALANCE_QK, USER_SETTINGS_QK],
        });
      }
    },
  });

  const registerMutation = useMutation({
    mutationFn: AuthApi.signup,
    onSuccess: ({ data }) => {
      const token = data.token;

      if (token) {
        cookies.set(COOKIE_AUTH_TOKEN_KEY, token);
        queryClient.invalidateQueries({
          queryKey: [AUTH_USER_QK, USER_BALANCE_QK, USER_SETTINGS_QK],
        });
      }
    },

    onError: (error: SignupResponseError, variables, context) => {
      toast.error(error?.response?.data?.[0]?.errorMessage || 'Something went wrong.');
    },
  });

  async function logout() {
    cookies.delete(COOKIE_AUTH_TOKEN_KEY);
    queryClient.invalidateQueries({
      queryKey: [AUTH_USER_QK, USER_BALANCE_QK, USER_SETTINGS_QK],
    });
  }

  return {
    isAuthenticated: Boolean(authToken),
    authUserQuery,
    loginMutation,
    registerMutation,
    userBalanceQuery,
    userSettingsQuery,
    logout,
  };
};
