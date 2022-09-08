import { Router } from "express";
import { productController } from "../controllers/index.js";

const router = Router();

router.get("/", productController.getProducts);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

export default router;
