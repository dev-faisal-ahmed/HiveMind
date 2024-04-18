import JWT, { Secret } from 'jsonwebtoken';
import { TLoginPayload } from '../auth.validation';
import { User } from '../../user.model';
import { AppError } from '../../../../utils/app-error';
import { JWT_SECRET } from '../../../../config';

export const Login = async (payload: TLoginPayload) => {
  const user = await User.findOne({ email: payload.email });

  // checking if user exist or not
  if (!user) throw new AppError(404, 'User Not Found!');

  const token = JWT.sign(
    { _id: user._id, email: user.email },
    JWT_SECRET as Secret,
    { expiresIn: '30d' }
  );

  return token;
};
