import { AppRoutes } from '@3win/config';
import { UserBadge } from './UserBadge';
import { useAuthQuery } from '@3win/query-client';

export function AuthLinks() {
  const { isAuthenticated } = useAuthQuery();

  return (
    <>
      {isAuthenticated ? (
        <div>
          <UserBadge />
        </div>
      ) : (
        <div className="flex gap-4 lg:ms-0 ms-auto">
          <a
            className="h-[50px] text-sm 2xl:text-base whitespace-nowrap bg-black/15 dark:bg-white/15 md:px-[32px] px-[14px] text-black dark:text-white flex items-center rounded-[30px] font-black"
            href={AppRoutes.Auth.Login}
          >
            LOG IN
          </a>
          <a
            className="h-[50px] text-sm 2xl:text-base whitespace-nowrap bg-primary md:px-[32px] px-[14px] text-white flex items-center rounded-[30px] font-black"
            href={AppRoutes.Auth.Signup}
          >
            SIGN UP
          </a>
        </div>
      )}
    </>
  );
}
