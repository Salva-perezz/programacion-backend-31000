import { Router } from "express";
import DaoFactory from "../dao/daoFactory.js";

const database = process.argv[2] || "MONGO";
const daoFactory = new DaoFactory();
const productDao = daoFactory.createDao(database);
const router = Router();

router.route("/").get(productDao.getAll).post(productDao.create);

export default router;
