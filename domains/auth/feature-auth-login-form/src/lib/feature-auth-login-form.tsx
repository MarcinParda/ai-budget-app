'use client';

import { Button } from '@ai-budget-app/ui-shared-button';
import { Input } from '@ai-budget-app/ui-shared-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ai-budget-app/ui-shared-form';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '@ai-budget-app/auth/data-access-auth/src';
import { LoginPayload } from '@ai-budget-app/auth/data-access-auth/src/lib/types/login';
import { loginPayloadSchema } from '@ai-budget-app/auth/data-access-auth/src/lib/schemas/loginPayloadSchema';

export function FeatureAuthLoginForm() {
  const form = useForm<LoginPayload>({
    resolver: zodResolver(loginPayloadSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function loginUser(values: LoginPayload) {
    const token = await login(values);
  }

  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email and password below to login to your account
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(loginUser)} className="grid gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="m@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="#" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default FeatureAuthLoginForm;
