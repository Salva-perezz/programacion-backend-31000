import userService from "../service/user.service.js";

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);

    res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const getOneUser = async (req, res) => {
  try {
    const filters = { _id: req.params.id };
    const user = await userService.getUserOneByFilter(filters);

    res.json(user);
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    console.log(token);
    res.json({ token });
  } catch (err) {
    console.log(err);
    if (err.statusCode) {
      return res.status(err.statusCode).send(err);
    }

    res.sendStatus(500);
  }
};

export default { createUser, getOneUser, login };
