import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: false },
  role: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

export default User;
