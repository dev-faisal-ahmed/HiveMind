import { z } from 'zod';

const CreateCommunity = z.object({
  name: z.string({ required_error: 'Community Name is required' }),
  about_community: z.string({
    required_error: 'Description of community is required',
  }),
  dp: z.string().optional(),
  cover: z.string().optional(),
  tags: z
    .string({
      required_error: 'Tags is required',
      invalid_type_error: 'Each tag has to be an string',
    })
    .array(),
});

export const CommunityValidation = { CreateCommunity };

export type TCrateCommunityPayload = z.infer<typeof CreateCommunity>;
