import { Hono } from "hono";

export const propertyRouter = new Hono<{
     Bindings : {
        DATABASE_URL: string;
        JWT_SECRET: string;
     }

}>()