import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  name: { type: String },
  author: { type: String },
});

const Book = model("book", bookSchema);

export default Book;
