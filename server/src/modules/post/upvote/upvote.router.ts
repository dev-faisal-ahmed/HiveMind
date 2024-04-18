import { Router } from 'express';

import { UpvoteValidation } from './upvote.validation';
import { UpvoteController } from './upvote.controller';
import { AuthGuard } from '../../../middleware/auth-guard';
import { ValidationHandler } from '../../../middleware/validation.handler';

export const UpvoteRouter = Router();

UpvoteRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(UpvoteValidation.AddOrUpdateUpvote),
  UpvoteController.AddOrUpdateUpvote
);

UpvoteRouter.delete('/:upvoteId', AuthGuard, UpvoteController.RemoveUpvote);
