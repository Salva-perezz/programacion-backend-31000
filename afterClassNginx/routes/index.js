import { Router } from "express";

const router = Router();

router.get("/datos", (req, res) => {
  res.send(`Server fork`);
});

export default router;
