import { AppError } from '../../../utils/app-error';
import { Picker, isEmptyObject } from '../../../utils/helper';
import { TUser } from '../../user/user.interface';
import { CommentFields } from '../comment.constants';
import { Comment } from '../comment.model';
import { TUpdateCommentPayload } from '../comment.validation';

export const UpdateComment = async (
  user: TUser,
  payload: TUpdateCommentPayload
) => {
  const updatedAblePayload = Picker(CommentFields.UpdateAbleFields, payload);
  console.log(isEmptyObject(updatedAblePayload));

  if (isEmptyObject(updatedAblePayload))
    throw new AppError(400, 'Nothing to be updated');

  // checking if that comment exist or not
  const isCommentExist = await Comment.findOne({
    _id: payload._id,
    userId: user._id,
  });

  if (!isCommentExist) throw new AppError(404, 'Comment Not Found!');

  const updatedComment = await Comment.updateOne(
    { _id: payload._id },
    { ...updatedAblePayload }
  );

  return updatedComment;
};
