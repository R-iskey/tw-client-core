import { Avatar, Plus, UserFemale, UserMale } from '@tw/icons';
import { Button } from '@tw/ui/components/button';
// import { useAuthQuery } from '@3win/query-client';

export function UserBadge() {
  // const {
  //   authUserQuery: { data: user },
  //   userBalanceQuery: { data: userBalance },
  // } = useAuthQuery();

  return (
    <div className="bg-white dark:bg-white/15 rounded-full  p-1 flex items-stretch gap-2 md:gap-6">
      <div className="flex flex-1 items-center">
        <div className={'w-11 h-11 rounded-full flex items-center justify-center bg-userIcon mr-2'}>
          {/*{user.avatar ? (*/}
          {/*  <img src={user.avatar} alt={'profile-img'} className={'w-full h-full'} />*/}
          {/*) : user.gender === 'NA' ? (*/}
          {/*  <UserMale className="w-9 h-9" />*/}
          {/*) : (*/}
          {/*  <UserFemale className="w-9 h-9" />*/}
          {/*)}*/}
        </div>
        <span className="font-bold hidden md:block uppercase max-w-28 2xl:max-w-52 overflow-hidden text-ellipsis">
          {/*{user.username}*/}
        </span>
      </div>
      <div className="flex flex-1 items-center">
        <div className="font-bold flex flex-col me-3">
          <span className="whitespace-nowrap text-base font-bold">{/*{user.currency} {user.balance}*/}</span>
          <span className="whitespace-nowrap font-normal text-sm">
            Bonus
            {/*{userBalance?.data.balance}*/}
          </span>
        </div>
        <Button className="rounded-full w-11 h-11 flex items-center justify-center p-0">
          <Plus />
        </Button>
      </div>
    </div>
  );
}
