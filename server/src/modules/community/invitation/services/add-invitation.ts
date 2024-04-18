import { AppError } from '../../../../utils/app-error';
import { TUser } from '../../../user/user.interface';
import { Member } from '../../members/member.model';
import { Invitation } from '../invitation.model';
import { TAddInvitationPayload } from '../invitation.validation';

export const AddInvitation = async (
  user: TUser,
  payload: TAddInvitationPayload
) => {
  // checking if inviter is member of the community or not
  const isMember = await Member.findOne({ userId: user._id });
  if (!isMember)
    throw new AppError(400, 'You are not the member of this community');

  // checking if the user is already a member of community
  const isAlreadyMember = await Member.findOne({ userId: payload.userId });
  if (isAlreadyMember) throw new AppError(400, 'User is already a member');

  // checking if already invited or not
  const isAlreadyInvited = await Invitation.findOne({ ...payload });
  if (isAlreadyInvited)
    throw new AppError(400, 'User is already invited this user');

  const newInvitation = await Invitation.create({
    ...payload,
    inviterId: user._id,
  });

  return newInvitation;
};
