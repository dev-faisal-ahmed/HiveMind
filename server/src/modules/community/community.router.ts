import { Router } from 'express';
import { AuthGuard } from '../../middleware/auth-guard';
import { ValidationHandler } from '../../middleware/validation.handler';
import { CommunityValidation } from './community.validation';
import { CommunityController } from './community.controller';
import { InvitationRouter } from './invitation/invitation.router';

export const CommunityRouter = Router();

CommunityRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(CommunityValidation.CreateCommunity),
  CommunityController.CreateCommunity
);

CommunityRouter.use('/invitation', InvitationRouter);
