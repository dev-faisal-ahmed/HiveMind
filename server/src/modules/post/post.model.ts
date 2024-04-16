import { Schema, model } from 'mongoose';
import { TPost } from './post.interface';
import { PostStatus } from './post.constants';

const PostSchema = new Schema<TPost>({
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  communityId: { type: Schema.Types.ObjectId, ref: 'community' },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  publishedAt: { type: Date, default: Date.now() },
  postStatus: { type: String, enum: PostStatus, default: 'PENDING' },
});

export const Post = model('post', PostSchema);
