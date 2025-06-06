import { Button } from '@triple-win/ui';
import Link from 'next/link';
import type { AuthActions } from './types';

export const AuthLinks = ({ loginHref, signUpHref }: AuthActions) => (
  <div className={'flex space-x-4 rounded-full p-2 dark:bg-white/15 bg-white/75 w-80 justify-around'}>
    <Button className={'uppercase'} variant={'ghost'} size={'lg'} asChild>
      <Link href={loginHref}>Log In</Link>
    </Button>
    <Button className={'uppercase'} size={'lg'} asChild>
      <Link href={signUpHref}>Join now</Link>
    </Button>
  </div>
);
