import { Router } from "../../depts.ts";
import userHandler from "../handlers/user.handler.ts";

const router: Router = new Router();

router.get("/api/user/:userId", userHandler.findUser);
router.delete("/api/user/:userId", userHandler.deleteUser);
router.post("/api/user", userHandler.createUser);
router.patch("/api/user", userHandler.updateUser);

export default router;
