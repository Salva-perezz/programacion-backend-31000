import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const productModel = model("product", productSchema);

export const Product = productModel;
