import { Router } from "express";
import NewsController from "../controller/news.controller.js";

const router = Router();

class NewsRouter {
  constructor() {
    this.controller = new NewsController();
  }

  start() {
    router.get("/", this.controller.getNews);
    router.post("/", this.controller.create);

    return router;
  }
}

export default NewsRouter;
