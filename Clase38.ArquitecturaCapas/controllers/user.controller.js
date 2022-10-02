import { WSresponse } from "../libs/WSresponse.js";
import { userService } from "../services/user.service.js";

const createUser = async (req, res) => {
  try {
    const response = userService.createUser(req.body);

    res.json(new WSresponse(response, "User created"));
  } catch (err) {
    res.json(new WSresponse(null, "Error creating user", err, 500));
  }
};

export default { createUser };
