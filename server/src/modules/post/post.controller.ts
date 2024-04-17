import { SendSuccessResponse } from '../../utils/response.helper';
import { TryCatch } from '../../utils/try-catch';
import { PostServices } from './services';

const CreatePost = TryCatch(async (req, res) => {
  const newPost = await PostServices.CreatePost(req.user, req.body);

  SendSuccessResponse(res, {
    status: 400,
    message: 'Post Created',
    data: newPost,
  });
});

export const PostController = { CreatePost };
