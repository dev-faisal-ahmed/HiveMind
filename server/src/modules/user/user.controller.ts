import { SendSuccessResponse } from '../../utils/response.helper';
import { TryCatch } from '../../utils/try-catch';
import { UserServices } from './services';

const Register = TryCatch(async (req, res) => {
  const newUser = await UserServices.Register(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'User Created Successfully',
    data: newUser,
  });
});

export const UserController = { Register };
