import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
});

const Product = model("product", productSchema);

export default Product;
