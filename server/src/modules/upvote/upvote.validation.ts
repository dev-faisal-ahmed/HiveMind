import { z } from 'zod';
import { UpvoteTypes } from './upvote.constants';

const AddOrUpdateUpvote = z.object({
  pcId: z.string({ required_error: 'PostId or CommentId is required' }),
  type: z.enum([...(UpvoteTypes as [string, ...string[]])], {
    required_error: 'Upvote Type is Required',
    invalid_type_error: 'It has to be Either "UPVOTE" or "DOWNVOTE"',
  }),
});

export const UpvoteValidation = { AddOrUpdateUpvote };

export type TAddOrUpdateUpvotePayload = z.infer<typeof AddOrUpdateUpvote>;
