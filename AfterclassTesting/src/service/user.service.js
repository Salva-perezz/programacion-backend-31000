import UserDTO from "../dto/user.dto.js";
import User from "../models/user.model.js";
import CustomError from "../utils/CustimError.js";
import bcrypt from "bcrypt";
import jwt from "../utils/jwt.js";

const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(hashedPassword, plainPassword);
};

const getUserOneByFilter = async (filters) => {
  const user = User.findOne(filters);

  return new UserDTO(user);
};

const createUser = async ({ email, password, username }) => {
  const filters = { email };
  const existingUser = await User.findOne(filters);

  if (existingUser) {
    throw new CustomError(false, "Email already in use", true, 400);
  }

  const hashedPassword = hashPassword(password);

  const createdUser = await User.create({
    email,
    password: hashedPassword,
    username,
  });

  return new UserDTO(createdUser);
};

const login = async ({ email, password }) => {
  const filters = { email };
  const user = await User.findOne(filters);

  if (!user || isValidPassword(password, user.password)) {
    throw "Error";
  }

  const authToken = jwt.generateToken(user);

  return authToken;
};

export default { getUserOneByFilter, createUser, login };
