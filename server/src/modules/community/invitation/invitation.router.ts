import { Router } from 'express';
import { AuthGuard } from '../../../middleware/auth-guard';
import { ValidationHandler } from '../../../middleware/validation.handler';
import { InvitationValidation } from './invitation.validation';
import { InvitationController } from './invitation.controller';

export const InvitationRouter = Router();

InvitationRouter.post(
  '/',
  AuthGuard,
  ValidationHandler(InvitationValidation.AddInvitation),
  InvitationController.AddInvitation
);
