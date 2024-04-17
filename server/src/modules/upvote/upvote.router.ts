import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { UpvoteValidation } from './upvote.validation';
import { UpvoteController } from './upvote.controller';

export const UpvoteRouter = Router();

UpvoteRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(UpvoteValidation.AddOrUpdateUpvote),
  UpvoteController.AddOrUpdateUpvote
);

UpvoteRouter.delete('/:upvoteId', AuthGuard, UpvoteController.RemoveUpvote);
