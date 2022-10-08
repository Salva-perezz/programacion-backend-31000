import UserDTO from "../dto/user.dto.js";
import User from "../models/user.model.js";

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);

    return user;
  } catch (err) {
    console.log(err);

    throw "Error getting user";
  }
};

const createUser = async ({ name, email }) => {
  try {
    if (typeof name !== "string") throw "Name must be a string";
    if (typeof email !== "string") throw "Email must be a string";

    const createdUser = await User.create({ name, email });
    return new UserDTO(createdUser);
  } catch (err) {
    console.log(err);

    throw err;
  }
};

export default { getUserById, createUser };
