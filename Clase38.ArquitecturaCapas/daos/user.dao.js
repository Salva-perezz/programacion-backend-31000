import { User } from "../models/user.model.js";

const createUser = async (userToCreate) => {
  const createdUser = await User.create({ ...userToCreate, role: "USER" });

  return createdUser;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);

  return user;
};

export const userDao = { createUser, getUserById };
