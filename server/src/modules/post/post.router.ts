import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { PostValidation } from './post.validation';
import { PostController } from './post.controller';
import { UpvoteRouter } from './upvote/upvote.router';
import { CommentRouter } from './comment/comment.router';

export const PostRouter = Router();

PostRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(PostValidation.CreatePost),
  PostController.CreatePost
);

PostRouter.use('/upvote', UpvoteRouter);
PostRouter.use('/comment', CommentRouter);
