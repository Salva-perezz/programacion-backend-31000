import { Router } from "express";
import productRouter from "./product.route.js";

const router = Router();

router.get("/", (req, res) => res.send("test-api"));
router.use("/products", productRouter);

export default router;
