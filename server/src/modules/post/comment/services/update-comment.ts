import { AppError } from '../../../../utils/app-error';
import { TUser } from '../../../user/user.interface';
import { Comment } from '../comment.model';
import { TUpdateCommentPayload } from '../comment.validation';

export const UpdateComment = async (
  user: TUser,
  payload: TUpdateCommentPayload
) => {
  // checking if that comment exist or not
  const isCommentExist = await Comment.findOne({
    _id: payload._id,
    userId: user._id,
  });

  if (!isCommentExist) throw new AppError(404, 'Comment Not Found!');

  const updatedComment = await Comment.updateOne(
    { _id: payload._id },
    { ...payload }
  );

  return updatedComment;
};
