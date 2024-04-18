import mongoose from 'mongoose';
import { AppError } from '../../../utils/app-error';
import { TUser } from '../../user/user.interface';
import { Community } from '../community.model';
import { TCrateCommunityPayload } from '../community.validation';

export const CreateCommunity = async (
  user: TUser,
  payload: TCrateCommunityPayload
) => {
  // checking if any community exist with the same name

  const isCommunityExist = await Community.findOne({ name: payload.name });

  if (isCommunityExist)
    throw new AppError(400, 'A Community exist with the same name');

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    // creating a new community
    const [newCommunity] = await Community.create([{ ...payload }], {
      session,
    });

    if (!newCommunity) throw new AppError(400, 'Community creation failed');

    await session.commitTransaction();
  } catch (err) {
    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};
