import { z } from "zod"

export const messageSchema = z.object({
        content:z.string().min(10,{message:"Message must contain characters more than 10"}).max(200,{message:"Maximum 200 characters allowed"})

}) 