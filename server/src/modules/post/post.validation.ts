import { z } from 'zod';
import { PostStatus } from './post.constants';

const CreatePost = z.object({
  title: z
    .string()
    .min(2, { message: 'Title has to be more than one character' })
    .optional(),
  communityId: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  PostStatus: z.enum([...(PostStatus as [string, ...string[]])]),
});

export const PostValidation = { CreatePost };
export type TCreatePostPayload = z.infer<typeof CreatePost>;
