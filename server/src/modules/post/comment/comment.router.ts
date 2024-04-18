import { Router } from 'express';

import { CommentValidations } from './comment.validation';
import { CommentController } from './comment.controller';
import { ValidationHandler } from '../../../middleware/validation.handler';
import { AuthGuard } from '../../../middleware/auth-guard';

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

CommentRouter.delete('/:commentId', AuthGuard, CommentController.RemoveComment);
