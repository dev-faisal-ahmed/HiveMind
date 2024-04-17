import { Router } from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { PostRouter } from '../modules/post/post.router';
import { UpvoteRouter } from '../modules/upvote/upvote.router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/post', PostRouter);
AppRouter.use('/upvote', UpvoteRouter);
