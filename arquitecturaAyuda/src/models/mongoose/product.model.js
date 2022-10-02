import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  stock: { type: String, required: true },
});

const Product = model("product", productSchema);

export default Product;
