import { z } from 'zod';

const CreateCommunity = z.object({
  name: z.string({ required_error: 'Community Name is required' }),
  aboutCommunity: z.string({
    required_error: 'Description of community is required',
  }),
  cover: z.string().optional(),
  tags: z
    .string({
      required_error: 'Tags is required',
      invalid_type_error: 'Each tag has to be an string',
    })
    .array()
    .transform((values) => {
      values.map((value) => value.toLowerCase());
    }),
});

export const CommunityValidation = { CreateCommunity };

export type TCrateCommunityPayload = z.infer<typeof CreateCommunity>;
