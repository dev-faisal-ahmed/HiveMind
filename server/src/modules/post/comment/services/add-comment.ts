import { AppError } from '../../../../utils/app-error';
import { TUser } from '../../../user/user.interface';
import { Post } from '../../post.model';
import { Comment } from '../comment.model';
import { TAddCommentPayload } from '../comment.validation';

export const AddComment = async (user: TUser, payload: TAddCommentPayload) => {
  // checking if that post exist or not
  const isPostExist = await Post.findOne({ _id: payload.postId });
  if (!isPostExist) throw new AppError(404, 'Post Not Found');

  const newComment = await Comment.create({ ...payload, userId: user._id });
  return newComment;
};
