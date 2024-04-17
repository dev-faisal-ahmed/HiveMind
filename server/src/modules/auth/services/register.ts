import { AppError } from '../../../utils/app-error';
import { User } from '../../user/user.model';
import { TRegisterPayload } from '../../user/user.validation';

export const Register = async (payload: TRegisterPayload) => {
  // checking if user already exist or not
  const isUserExist = await User.findOne({ email: payload.email });
  if (isUserExist) throw new AppError(400, 'User Already Exists');

  // creating new user
  const newUser = await User.create(payload);
  return newUser;
};
