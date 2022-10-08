import UserDTO from "../dto/user.dto.js";
import userService from "../services/user.service.js";
import WSresponse from "../utils/WSresponse.js";

const getOneUser = async (req, res) => {
  try {
    const userId = req.header("userId");
    console.log("ACAAAAAA", req.session);
    const response = await userService.getUserById(userId);
    const userDto = new UserDTO(response);

    res.json(new WSresponse(userDto, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, "Error", err, 500));
  }
};

const createUser = async (req, res) => {
  try {
    const createdUser = await userService.createUser(req.body);

    res.status(201).json(new WSresponse(createdUser, "Succes"));
  } catch (err) {
    console.log(err);
    res.json(new WSresponse(null, "Error", err, 500));
  }
};

export default { getOneUser, createUser };
