import { Schema } from 'mongoose';

export type TPostStatus = 'PENDING' | 'APPROVED' | 'DELETED';

export type TPost = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  communityId: Schema.Types.ObjectId;
  title: string;
  description: string;
  image: string;
  postStatus: TPostStatus;
  publishedAt: Date;
};
