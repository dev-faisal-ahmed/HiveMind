import { Schema, model } from 'mongoose';
import { TCommunity } from './community.interface';

const CommunitySchema = new Schema<TCommunity>({
  name: { type: String, required: true, unique: true },
  about_community: { type: String, required: true },
  cover: { type: String },
  dp: { type: String },
  tags: [{ type: Schema.Types.ObjectId, required: true, ref: 'tag' }],
});

export const Community = model('community', CommunitySchema);
