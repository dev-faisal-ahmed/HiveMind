import { Schema } from 'mongoose';

export type TInvitationStatus = 'PENDING' | 'ACCEPTED' | 'REJECTED';

export type TInvitation = {
  _id: Schema.Types.ObjectId;
  communityId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  inviterId: Schema.Types.ObjectId;
  status: TInvitationStatus;
};
