import { Router } from 'express';
import { AuthRouter } from '../modules/user/auth/auth.router';
import { PostRouter } from '../modules/post/post.router';
import { UpvoteRouter } from '../modules/post/upvote/upvote.router';
import { CommentRouter } from '../modules/post/comment/comment.router';
import { CommunityRouter } from '../modules/community/community.router';

export const AppRouter = Router();

AppRouter.use('/auth', AuthRouter);
AppRouter.use('/post', PostRouter);
AppRouter.use('/upvote', UpvoteRouter);
AppRouter.use('/comment', CommentRouter);
AppRouter.use('/community', CommunityRouter);
