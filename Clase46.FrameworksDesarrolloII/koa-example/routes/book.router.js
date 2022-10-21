import Router from "koa-router";
import bookController from "../controllers/book.controller.js";

const router = new Router({
  prefix: "/book",
});

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBookById);

router.post("/", bookController.createBook);

router.put("/:id", bookController.updateBook);

router.delete("/:id", bookController.deleteBook);

export default router;
