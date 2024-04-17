import { TUser } from '../../user/user.interface';
import { Post } from '../post.model';
import { TCreatePostPayload } from '../post.validation';

export const CreatePost = async (user: TUser, payload: TCreatePostPayload) => {
  const newPost = await Post.create({ ...payload, userId: user._id });
  return newPost;
};
