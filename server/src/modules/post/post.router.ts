import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { PostValidation } from './post.validation';
import { PostController } from './post.controller';

export const PostRouter = Router();

PostRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(PostValidation.CreatePost),
  PostController.CreatePost
);
