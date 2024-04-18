import { z } from 'zod';

const AddInvitation = z.object({
  communityId: z.string({ required_error: 'Community Id is required' }),
  userId: z.string({ required_error: 'Community Id is required' }),
});

export const InvitationValidation = { AddInvitation };

export type TAddInvitationPayload = z.infer<typeof AddInvitation>;
