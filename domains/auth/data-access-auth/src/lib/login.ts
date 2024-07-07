import type { LoginPayload, LoginResponseData } from './types/login';

export async function login(formData: LoginPayload): Promise<string> {
  const { email, password } = formData;
  const response = await fetch(`http://localhost:8000/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = (await response.json()) as LoginResponseData;

  return data.token;
}
