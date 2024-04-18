import { Schema, model } from 'mongoose';
import { TCommunity } from './community.interface';

const CommunitySchema = new Schema<TCommunity>({
  name: { type: String, required: true, unique: true },
  aboutCommunity: { type: String, required: true },
  cover: { type: String },
  tags: [{ type: String, required: true }],
});

export const Community = model('community', CommunitySchema);
