import { Router } from "express";
import productController from "../controllers/product.controller.js";
import jwt from "../utils/jwt.js";

const router = Router();

router
  .route("/")
  .get(productController.getAllProduct)
  .post(jwt.authMiddleware, productController.createProduct);

router.get("/:id", productController.getOneProduct);

export default router;
