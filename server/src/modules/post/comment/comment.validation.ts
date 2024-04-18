import { z } from 'zod';

const AddComment = z.object({
  postId: z.string({ required_error: 'Post Id is required' }),
  description: z.string().optional(),
  image: z.string().optional(),
});

const UpdateComment = z.object({
  _id: z.string({ required_error: 'Comment id is required' }),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const CommentValidations = { AddComment, UpdateComment };

export type TAddCommentPayload = z.infer<typeof AddComment>;
export type TUpdateCommentPayload = z.infer<typeof UpdateComment>;
