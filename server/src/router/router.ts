import { Router } from 'express';
import { AuthRouter } from '../modules/auth/auth.router';
import { PostRouter } from '../modules/post/post.router';
import { UpvoteRouter } from '../modules/upvote/upvote.router';
import { CommentRouter } from '../modules/comment/comment.router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/post', PostRouter);
AppRouter.use('/upvote', UpvoteRouter);
AppRouter.use('/comment', CommentRouter);
