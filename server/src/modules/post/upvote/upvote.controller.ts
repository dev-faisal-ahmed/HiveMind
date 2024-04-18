import { SendSuccessResponse } from '../../../utils/response.helper';
import { TryCatch } from '../../../utils/try-catch';
import { UpvoteServices } from './services';

const AddOrUpdateUpvote = TryCatch(async (req, res) => {
  const upvoteInfo = await UpvoteServices.AddOrUpdateUpvote(req.user, req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: `successfully ${upvoteInfo.type}D`,
    data: upvoteInfo,
  });
});

const RemoveUpvote = TryCatch(async (req, res) => {
  const { upvoteId } = req.params;
  const deletedStatus = await UpvoteServices.RemoveUpvote(req.user, upvoteId);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Upvote or Downvote removed successfully',
    data: deletedStatus,
  });
});

export const UpvoteController = { AddOrUpdateUpvote, RemoveUpvote };
