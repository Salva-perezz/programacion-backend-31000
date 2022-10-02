import { Router } from "express";
import { productController } from "../controllers/index.js";
import roleChecker from "../middlewares/roleChecker.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProducts)
  .post(roleChecker.checkIfUserIsAdmin, productController.createProduct);

router
  .route("/:id")
  .get(productController.getOneProduct)
  .put(roleChecker.checkIfUserIsAdmin, productController.updateProduct)
  .delete(roleChecker.checkIfUserIsAdmin, productController.deleteProduct);

export default router;
