import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
});

export default model("product", productSchema);
