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
})

userRouter.post("/signin", async (c) => {
    
})