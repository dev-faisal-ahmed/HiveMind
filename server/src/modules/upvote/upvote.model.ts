import { Schema, model } from 'mongoose';
import { TUpvote } from './upvote.interface';
import { UpvoteTypes } from './upvote.constants';

const UpvoteSchema = new Schema<TUpvote>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  pcId: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  type: { type: String, enum: UpvoteTypes, required: true },
});

export const Upvote = model('upvote', UpvoteSchema);
