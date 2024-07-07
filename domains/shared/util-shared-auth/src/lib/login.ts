import { signIn } from 'next-auth/react';
import { LoginPayload } from './types/login';

export async function login(payload: LoginPayload) {
  const { email, password } = payload;
  const result = await signIn('credentials', {
    email,
    password,
    redirect: false,
  });
  return result;
}
