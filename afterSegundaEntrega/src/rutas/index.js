import { Router } from "express";
const router = Router();
import daos from "../daos/index.js";

router.get("/productos", async (req, res) => {
  const response = await daos.ProductoDao.listarAll();

  res.json(response);
});

router.get("/carritos", async (req, res) => {
  const response = await daos.CarritoDao.listarAll();

  res.json(response);
});

router.get("/productos/:id", async (req, res) => {
  const response = await daos.ProductoDao.listar(req.params.id);

  res.json(response);
});

router.get("/carritos/:id", async (req, res) => {
  const response = await daos.CarritoDao.listar(req.params.id);

  res.json(response);
});

export default router;
