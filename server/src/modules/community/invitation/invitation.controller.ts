import { SendSuccessResponse } from '../../../utils/response.helper';
import { TryCatch } from '../../../utils/try-catch';
import { InvitationServices } from './services';

const AddInvitation = TryCatch(async (req, res) => {
  const newInvitation = await InvitationServices.AddInvitation(
    req.user,
    req.body
  );

  SendSuccessResponse(res, {
    status: 200,
    message: 'Invitation was successful',
    data: newInvitation,
  });
});

export const InvitationController = { AddInvitation };
