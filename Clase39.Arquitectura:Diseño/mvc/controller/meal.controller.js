import Meal from "../models/meal.model.js";

const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();

    res.render("menu", { meals });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getMealsData = async (req, res) => {
  try {
    const meals = await Meal.find();

    res.json(meals);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default { getMeals, getMealsData };
