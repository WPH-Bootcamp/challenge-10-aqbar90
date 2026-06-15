import { z } from 'zod';

export const reviewSchema = z.object({
  star: z.number().min(1).max(5),

  comment: z.string().min(3).max(500),
});
