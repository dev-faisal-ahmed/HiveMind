import mongoose from 'mongoose';
import { AppError } from '../../../utils/app-error';
import { TUser } from '../../user/user.interface';
import { Community } from '../community.model';
import { TCrateCommunityPayload } from '../community.validation';
import { Member } from '../members/member.model';

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

    newCommunity.toObject();

    // adding the user as admin
    const [newMember] = await Member.create(
      [{ userId: user._id, communityId: newCommunity._id, role: 'ADMIN' }],
      { session }
    );

    if (!newMember) throw new AppError(400, 'Failed to add user as admin');

    await session.commitTransaction();

    return newCommunity;
  } catch (err: any) {
    await session.abortTransaction();

    throw new AppError(
      err.status || 400,
      err.message || 'Something went wrong'
    );
  } finally {
    await session.endSession();
  }
};
