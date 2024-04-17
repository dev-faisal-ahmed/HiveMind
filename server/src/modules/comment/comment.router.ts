import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { CommentValidations } from './comment.validation';
import { CommentController } from './comment.controller';

export const CommentRouter = Router();

CommentRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(CommentValidations.AddComment),
  CommentController.AddComment
);

CommentRouter.patch(
  '/',
  AuthGuard,
  ValidationHandler(CommentValidations.UpdateComment),
  CommentController.UpdateComment
);
