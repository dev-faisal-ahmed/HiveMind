import { Router } from 'express';
import { AuthRouter } from '../modules/user/router/auth.router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
