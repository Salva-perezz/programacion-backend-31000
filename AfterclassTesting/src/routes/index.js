import { Router } from "express";
import userRoute from "./user.route.js";
import productRoute from "./product.route.js";

const router = Router();

router.use("/user", userRoute);
router.use("/product", productRoute);

export default router;
