'use client';

import type { AuthActions } from './types';
import { AuthLinks } from './AuthLinks';

interface HeaderProfileProps {
  authActions: AuthActions;
}

export function HeaderProfile({ authActions }: HeaderProfileProps) {
  const isAuth = false;

  return (
    isAuth ? null : <AuthLinks loginHref={authActions.loginHref} signUpHref={authActions.signUpHref} />
  )
}
