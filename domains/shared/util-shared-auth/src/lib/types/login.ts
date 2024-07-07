import { z } from 'zod';
import { loginPayloadSchema } from '../schemas/login-payload-schema';

export type LoginPayload = z.infer<typeof loginPayloadSchema>;
export interface LoginResponseData {
  token: string;
}
