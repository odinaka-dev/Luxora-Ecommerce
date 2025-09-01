import { z } from "zod";

// register schemma
export const registerSchema = z.object({
  fullName: z.string().min(2, { message: "Enter your Fullname" }).trim(),
  email: z.string().email({ message: "Enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Enter at least 8 characters" })
    .trim(),
  agreement: z.boolean().refine((val) => val === true),
  phoneNumber: z.number().min(11, { message: "Enter phone Number" }).optional(),
});

// login schemma
export const LoginSchema = z.object({
  email: z.string().email({ message: "Enter your email address" }).trim(),
  password: z.string().min(8, { message: "Enter your password" }).trim(),
});
