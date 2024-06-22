import { z } from "zod"

export const usernameValidation = z.string().min(5,"Username must contain 5 characters.").max(15,"Maximum allowed 15 characters.").regex(/^[a-zA-Z0-9_]+$+-/,"Enter a valid username")
const emailValidation = z.string().email({message:"Invalid email address"})
const passwordValidation = z.string().min(5,{message:"Password must contain 5 characters"})


export const signUpSchema = z.object({
    username:usernameValidation,
    email:emailValidation,
    password:passwordValidation,
})