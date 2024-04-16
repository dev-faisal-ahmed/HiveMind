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

const Login = TryCatch(async (req, res) => {
  const token = await UserServices.Login(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Login Successful',
    data: { token },
  });
});

export const UserController = { Register, Login };
