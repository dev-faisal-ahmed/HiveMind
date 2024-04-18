import { Schema, model } from 'mongoose';
import { TMember } from './member.interface';
import { MemberRoles } from './member.constants';

const MemberSchema = new Schema<TMember>({
  userId: { type: Schema.Types.ObjectId, required: true },
  communityId: { type: Schema.Types.ObjectId, required: true },
  role: { type: String, enum: MemberRoles, default: 'MEMBER' },
});

export const Member = model('member', MemberSchema);
