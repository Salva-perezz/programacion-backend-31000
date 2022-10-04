import { Schema, model } from "mongoose";

const newsSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  email: { type: String, required: true },
  viewed: { type: Boolean, required: true },
});

const News = model("new", newsSchema);

export default News;
