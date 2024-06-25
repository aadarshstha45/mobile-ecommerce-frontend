import * as z from "zod";

const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .email({ message: "Enter a valid email address" })
      .min(1, { message: "Email is required" }),
    phone_number: z
      .string()
      .min(1, { message: "Phone number is required" })
      .min(6, { message: "Phone number must be at least 6 characters" }),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters" }),
    confirm_password: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords did not match",
    path: ["confirm_password"], // This specifies where the error should be attached
  });

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export { LoginSchema, RegisterSchema };
