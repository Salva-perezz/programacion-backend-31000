import { Router } from "express";
import productRouter from "./product.route.js";

const router = Router();

router.use("/product", productRouter);

export default router;
