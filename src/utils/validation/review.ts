import * as z from "zod";

export const ReviewSchema = z.object({
  product_id: z.number(),
  rating: z.number().min(1, { message: "Rating is required" }),
  review: z.string().min(1, { message: "Review is required" }),
});
