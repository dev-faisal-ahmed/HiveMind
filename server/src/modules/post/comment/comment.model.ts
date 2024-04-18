import { Schema, model } from 'mongoose';
import { TComment } from './comment.interface';

const CommentSchema = new Schema<TComment>({
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  postId: { type: Schema.Types.ObjectId, ref: 'post', required: true },
  description: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now() },
});

export const Comment = model('comment', CommentSchema);
