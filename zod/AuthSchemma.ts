import { z } from "zod";

// register schemma
export const registerSchema = z.object({
  firstName: z.string().min(2, { message: "Enter your firstname" }).trim(),
  lastName: z.string().min(2, { message: "Enter your lastname" }).trim(),
  email: z.string().includes("@", { message: "Enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Enter at least 8 characters" })
    .trim(),
});

// login schemma
export const LoginSchema = z.object({
  email: z.string().email({ message: "Enter your email address" }).trim(),
  password: z.string().min(8, { message: "Enter your password" }).trim(),
});
