import { SendSuccessResponse } from '../../../utils/response.helper';
import { TryCatch } from '../../../utils/try-catch';
import { CommentServices } from './services';

const AddComment = TryCatch(async (req, res) => {
  const newComment = await CommentServices.AddComment(req.user, req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Comment Successfully added!',
    data: newComment,
  });
});

const UpdateComment = TryCatch(async (req, res) => {
  const updatedComment = await CommentServices.UpdateComment(
    req.user,
    req.body
  );

  SendSuccessResponse(res, {
    status: 200,
    message: 'Comment Updated Successfully',
    data: updatedComment,
  });
});

const RemoveComment = TryCatch(async (req, res) => {
  const { commentId } = req.params;
  const deletedStatus = await CommentServices.RemoveComment(
    req.user,
    commentId
  );

  SendSuccessResponse(res, {
    status: 200,
    message: 'Comment Deleted Successfully',
    data: deletedStatus,
  });
});

export const CommentController = { AddComment, UpdateComment, RemoveComment };
