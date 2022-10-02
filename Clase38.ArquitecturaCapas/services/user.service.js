import { userDao } from "../daos/user.dao.js";

const createUser = async ({ username, password, email }) => {
  if (typeof username !== "string")
    throw "El nombre de usuario debe ser un string";

  if (typeof password !== "string") throw "La contraseña debe ser un string";

  if (typeof email !== "string") throw "El email debe ser un string";

  await userDao.createUser({ username, password, email });

  return { username, email };
};

export const userService = { createUser };
