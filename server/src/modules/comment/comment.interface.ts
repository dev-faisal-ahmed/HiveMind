import { Schema } from 'mongoose';

export type TComment = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  postId: Schema.Types.ObjectId;
  description: string;
  image: string;
  date: Date;
};
