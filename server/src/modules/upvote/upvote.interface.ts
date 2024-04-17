import { Schema } from 'mongoose';

export type TUpvoteType = 'UPVOTE' | 'DOWNVOTE';

export type TUpvote = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  pcId: Schema.Types.ObjectId;
  type: TUpvoteType;
};
