import { SendSuccessResponse } from '../../../utils/response.helper';
import { TryCatch } from '../../../utils/try-catch';
import { AuthServices } from '../auth/services';

const Register = TryCatch(async (req, res) => {
  const newUser = await AuthServices.Register(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'User Created Successfully',
    data: newUser,
  });
});

const Login = TryCatch(async (req, res) => {
  const token = await AuthServices.Login(req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Login Successful',
    data: { token },
  });
});

export const AuthController = { Register, Login };
