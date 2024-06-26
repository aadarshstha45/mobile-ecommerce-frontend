import * as z from "zod";

const ProfileSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Enter a valid email address" })
    .min(1, { message: "Email is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  dob: z.string().optional(),
  country: z.string().min(1, { message: "Country is required" }),
  city: z.string().min(1, { message: "City is required" }),
  street: z.string().optional(),
  landmark: z.string().optional(),
});

export { ProfileSchema };
