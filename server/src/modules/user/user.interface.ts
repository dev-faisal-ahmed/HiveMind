import { Schema } from 'mongoose';

export type TUser = {
  _id: Schema.Types.ObjectId;
  name: string;
  email: string;
  dp: string;
  cover: string;
  bio: string;
};
