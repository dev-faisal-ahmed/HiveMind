import { AppError } from '../utils';
import { catchAsync } from './catchAsync';

const BEARER = 'Bearer';

export const authGuard = catchAsync(async (req, _, next) => {
  const token = req.headers.authorization;
  if (!token) throw new AppError('No Token Found!', 404);

  const [bearer, authToken] = token.split(' ');
  if (bearer.toLocaleLowerCase() !== BEARER.toLowerCase())
    throw new AppError('Invalid token formate', 400);

  next();
});
