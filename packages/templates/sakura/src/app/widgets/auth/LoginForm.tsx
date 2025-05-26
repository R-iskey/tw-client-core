'use client';

import {
  Button,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputPassword,
  Link,
} from '@triple-win/ui';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import type { LoginRequest } from '@triple-win/api';
import { useAuthQuery } from '@triple-win/query-client';
import type { ZodType } from 'zod';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema: ZodType<LoginRequest> = z.object({
  userName: z.string().min(6, {
    message: 'Username must be at least 6 characters.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  rememberMe: z.boolean(),
});

export const LoginForm = () => {
  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      userName: '',
      password: '',
      rememberMe: true,
    },
  });

  const {
    loginMutation: { mutate: tryLogin, isPending, error },
  } = useAuthQuery();

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    tryLogin(data);
  };

  return (
    <div className={'rounded-[44px] bg-white dark:bg-white/15 w-full'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={'flex flex-col gap-13'}>
          <div className={'gap-5 flex flex-col p-6'}>
            <p className={'text-center font-bold text-2xl uppercase pb-5'}>Log in</p>
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'ml-6'}>Username</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className={'ml-6'} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={'ml-6'}>Password</FormLabel>
                  <FormControl>
                    <InputPassword containerClass={'w-full'} {...field} />
                  </FormControl>
                  <FormMessage className={'ml-6'} />
                </FormItem>
              )}
            />
            <Link href="/" className={cn('text-muted-foreground text-center')}>
              Restore Password
            </Link>
          </div>
          <div className={'flex flex-col mx-auto gap-5 items-center pb-14'}>
            <Button type={'submit'} size={'lg'} className={'uppercase w-[320px]'} disabled={isPending}>
              log in
            </Button>
            <Link animated href={'/'} className={'uppercase font-bold text-center'}>
              register
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
