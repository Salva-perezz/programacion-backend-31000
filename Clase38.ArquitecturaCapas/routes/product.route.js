import { Router } from "express";
import { productController } from "../controllers/index.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

export default router;
