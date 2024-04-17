import { SendSuccessResponse } from '../../utils/response.helper';
import { TryCatch } from '../../utils/try-catch';
import { CommentServices } from './services';

const AddComment = TryCatch(async (req, res) => {
  const newComment = await CommentServices.AddComment(req.user, req.body);

  SendSuccessResponse(res, {
    status: 200,
    message: 'Comment Successfully added!',
    data: newComment,
  });
});

export const CommentController = { AddComment };
