import { Schema, model } from 'mongoose';
import { TInvitation } from './invitation.interface';
import { InvitationStatus } from './invitation.constants';

const InvitationSchema = new Schema<TInvitation>({
  communityId: {
    type: Schema.Types.ObjectId,
    ref: 'community',
    required: true,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  inviterId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  status: { type: String, enum: InvitationStatus, default: 'PENDING' },
});

export const Invitation = model('invitation', InvitationSchema);
