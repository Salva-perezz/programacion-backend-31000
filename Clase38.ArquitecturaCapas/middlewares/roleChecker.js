import { userDao } from "../daos/user.dao.js";
import { WSresponse } from "../libs/WSresponse.js";

const checkIfUserIsAdmin = async (req, res, next) => {
  const userId = req.header("userId");
  const user = await userDao.getUserById(userId);

  if (user.role !== "ADMIN") {
    res
      .status(401)
      .json(
        new WSresponse(
          null,
          "You dont hace permission to acces this resource",
          true,
          401
        )
      );
  } else {
    next();
  }
};

export default {
  checkIfUserIsAdmin,
};
