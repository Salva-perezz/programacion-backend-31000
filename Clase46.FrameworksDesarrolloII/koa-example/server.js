import Koa from "koa";
import koaBody from "koa-body";
import router from "./routes/index.js";
import mongoose from "mongoose";

const app = new Koa();

mongoose.connect(
  "mongodb+srv://salvax:salva@cluster0.uriryq6.mongodb.net/?retryWrites=true&w=majority"
);

app.use(koaBody());

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found :(",
    message: "Route not found",
  };
});

app.listen(3000);
console.log("Serlver listening http://127.0.0.1:3000");
