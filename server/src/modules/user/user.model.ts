import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dp: { type: String },
  cover: { type: String },
  bio: { type: String },
});

export const User = model('user', UserSchema);
