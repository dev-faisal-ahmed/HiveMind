import { AnyZodObject } from 'zod';
import { TryCatch } from '../utils/try-catch';

export const ValidationHandler = (schema: AnyZodObject) => {
  return TryCatch(async (req, _, next) => {
    await schema.parseAsync(req.body);
    next();
  });
};
