import { cors } from 'hono/cors'
import { Hono } from "hono";
import { userRouter } from './router/user';
import { propertyRouter } from './router/proparty';


const app = new Hono<{
  Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
  }
}>();
 
app.use('/*', cors())
  app.route("/api/v1/user", userRouter)
  app.route("/api/v1/blog", propertyRouter)


export default app