import Router from "koa-router";
import bookRouter from "./book.router.js";

const router = new Router({
  prefix: "/api",
});

router.use(bookRouter.routes());

export default router;
