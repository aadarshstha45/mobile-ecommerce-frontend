import * as z from "zod";

const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .email({ message: "Enter a valid email address" })
      .min(1, { message: "Email is required" }),

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

const ChangePasswordSchema = z
  .object({
    current_password: z
      .string()
      .min(1, { message: "Old password is required" }),
    new_password: z
      .string()
      .min(1, { message: "New password is required" })
      .min(6, { message: "Password must be at least 8 characters" }),
    c_new_password: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.new_password === data.c_new_password, {
    message: "Passwords did not match",
    path: ["c_new_password"],
  });

export { ChangePasswordSchema, LoginSchema, RegisterSchema };
