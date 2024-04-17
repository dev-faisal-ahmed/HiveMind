import { z } from 'zod';

const Register = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Name should contain at least 2 characters' }),

  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Provide a valid email' }),
});

const Login = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Provide a valid email' }),
});

export const AuthValidation = { Register, Login };

export type TRegisterPayload = z.infer<typeof Register>;
export type TLoginPayload = z.infer<typeof Login>;
