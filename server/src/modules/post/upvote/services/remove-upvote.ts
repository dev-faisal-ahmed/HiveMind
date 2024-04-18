import { AppError } from '../../../../utils/app-error';
import { TUser } from '../../../user/user.interface';
import { Upvote } from '../upvote.model';

export const RemoveUpvote = async (user: TUser, upvoteId: string) => {
  // checking if the upvote exist or not
  const isUpvoteExist = await Upvote.findOne({
    userId: user._id,
    _id: upvoteId,
  });

  if (!isUpvoteExist) throw new AppError(404, 'Upvote does not exist');

  const deletedStatus = await Upvote.deleteOne({ _id: upvoteId });

  return deletedStatus;
};
