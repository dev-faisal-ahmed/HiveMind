import { Schema } from 'mongoose';

export type TMemberRole = 'ADMIN' | 'MODERATOR' | 'MEMBER';

export type TMember = {
  _id: Schema.Types.ObjectId;
  communityId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  role: TMemberRole;
};
