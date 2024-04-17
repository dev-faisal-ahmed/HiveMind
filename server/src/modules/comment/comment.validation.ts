import { z } from 'zod';

const AddComment = z.object({
  postId: z.string({ required_error: 'Post Id is required' }),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const CommentValidations = { AddComment };

export type TAddCommentPayload = z.infer<typeof AddComment>;
