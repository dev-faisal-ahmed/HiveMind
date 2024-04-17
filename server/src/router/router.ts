import { Router } from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { PostRouter } from '../modules/post/post.router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/post', PostRouter);
