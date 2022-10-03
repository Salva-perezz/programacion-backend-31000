import { Schema, model } from "mongoose";

const mealSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Meal = model("meal", mealSchema);

export default Meal;
