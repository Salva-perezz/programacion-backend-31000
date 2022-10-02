import { Router } from "express";
import productRouter from "./product.route.js";
import userRouter from "./user.route.js";

const router = Router();

router.use("/product", productRouter);
router.use("/user", userRouter);

export default router;
