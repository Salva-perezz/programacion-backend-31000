import { Router } from "express";
import mealController from "../controller/meal.controller.js";

const router = Router();

router.get("/menu", mealController.getMeals);
router.get("/menu-data", mealController.getMealsData);

export default router;
