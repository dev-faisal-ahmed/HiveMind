import { TUser } from '../../user/user.interface';
import { TUpvoteType } from '../upvote.interface';
import { Upvote } from '../upvote.model';
import { TAddOrUpdateUpvotePayload } from '../upvote.validation';

export const AddOrUpdateUpvote = async (
  user: TUser,
  payload: TAddOrUpdateUpvotePayload
) => {
  /* 
    This Service allows user to create upvote downvote and update upvote to downvote. 
  */
  // checking if the upvote already exist
  const isUpvoteExist = await Upvote.findOne({
    userId: user._id,
    pcId: payload.pcId,
  });

  if (!isUpvoteExist) {
    // creating new upvote
    const newUpvote = await Upvote.create({ ...payload, userId: user._id });
    return newUpvote;
  }

  isUpvoteExist.type = payload.type as TUpvoteType;
  await isUpvoteExist.save();

  return isUpvoteExist;
};
