import { Schema } from 'mongoose';

export type TCommunity = {
  _id: Schema.Types.ObjectId;
  name: string;
  aboutCommunity: string;
  cover: string;
  tags: Schema.Types.ObjectId[];
};
