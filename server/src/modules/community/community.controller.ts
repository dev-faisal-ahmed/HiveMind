import { SendSuccessResponse } from '../../utils/response.helper';
import { TryCatch } from '../../utils/try-catch';
import { CommunityServices } from './services';

const CreateCommunity = TryCatch(async (req, res) => {
  const newCommunity = await CommunityServices.CreateCommunity(
    req.user,
    req.body
  );

  SendSuccessResponse(res, {
    status: 200,
    message: 'Community Created',
    data: newCommunity,
  });
});

export const CommunityController = { CreateCommunity };
