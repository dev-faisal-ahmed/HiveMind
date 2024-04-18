import { Schema } from 'mongoose';

export type TCommunity = {
  _id: Schema.Types.ObjectId;
  name: string;
  about_community: string;
  dp: string;
  cover: string;
  tags: Schema.Types.ObjectId[];
};
