import { Hono } from "hono";
import { c } from "vite/dist/node/types.d-aGj9QkWt";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    }
}>();

userRouter.post("/signup", async (c) => {
    const body = await c.req.json();
     const sucess = signUpinput.safeParse(body);
    if (sucess) {
        c.status(411)
        return c.json({
            Error: "inputs are not correct"
        })
    }
})

userRouter.post("/signin", async (c) => {
    
})