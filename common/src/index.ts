import { password } from "bun";
import z from "zod";

export const signUpinput = z.object({
    username: z.string(),
    password: z.string().min(6),
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email()
})
export type SignUpInput = z.infer<typeof signUpinput>