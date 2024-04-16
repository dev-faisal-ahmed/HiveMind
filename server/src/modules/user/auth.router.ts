import { Router } from 'express';
import { UserController } from './user.controller';
import { ValidationHandler } from '../../middleware/validation.handler';
import { UserValidation } from './user.validation';

export const AuthRouter = Router();

AuthRouter.post(
  '/register',
  ValidationHandler(UserValidation.Register),
  UserController.Register
);
