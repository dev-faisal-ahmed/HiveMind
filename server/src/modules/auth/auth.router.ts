import { Router } from 'express';
import { AuthValidation } from './auth.validation';
import { ValidationHandler } from '../../middleware/validation.handler';
import { AuthController } from './auth.controller';

export const AuthRouter = Router();

AuthRouter.post(
  '/register',
  ValidationHandler(AuthValidation.Register),
  AuthController.Register
);

AuthRouter.post(
  '/login',
  ValidationHandler(AuthValidation.Login),
  AuthController.Login
);
