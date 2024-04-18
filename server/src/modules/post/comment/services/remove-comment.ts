//
import { AppError } from '../../../../utils/app-error';
import { TUser } from '../../../user/user.interface';
import { Comment } from '../comment.model';

export const RemoveComment = async (user: TUser, commentId: string) => {
  const isCommentExist = await Comment.findOne({
    _id: commentId,
    userId: user._id,
  });

  if (!isCommentExist) throw new AppError(404, 'Comment Not Found!');

  const deletedStatus = await Comment.deleteOne({ _id: commentId });
  return deletedStatus;
};
