import { z } from 'zod';
import { loginPayloadSchema } from '../schemas/loginPayloadSchema';

export type LoginPayload = z.infer<typeof loginPayloadSchema>;
export interface LoginResponseData {
  token: string;
}
