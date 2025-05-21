'use client';

import { Button } from '@triple-win/ui';

export function HeaderProfile() {
  const isAuth = false;

  return (
    <div>
      {isAuth ? null : (
        <div className={'flex space-x-4 rounded-full p-2 dark:bg-white/15 bg-white/75 w-80 justify-around'}>
          <Button className={'uppercase'} variant={'ghost'} size={'lg'}>Log In</Button>
          <Button className={'uppercase'} size={'lg'}>Join now</Button>
        </div>
      )}
    </div>
  );
}
