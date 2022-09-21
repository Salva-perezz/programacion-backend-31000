import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, max: 100 },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

export default User;
