import { Application, config } from "../depts.ts";
import userRouter from "./routes/user.routes.ts";
import loggerMiddleware from "./middleware/logger.middleware.ts";

const app: Application = new Application();
const { PORT } = await config();

app.use(loggerMiddleware);
app.use(userRouter.routes());

app.listen({ port: Number(PORT) });
console.log("Server listening http://127.0.0.1:3000");
