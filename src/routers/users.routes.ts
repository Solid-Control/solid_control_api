import { Router } from "express";
import UsersControllers from "../controller/user.controller";
import { userCreateSchema, validateUserCreateMiddleware } from "../middleware/validateUserCreate.middleware";
import { userLoginSchema, validateUserLoginMiddleware } from "../middleware/validateUserLogin.middleware";
import { authUser } from "../middleware/authToken.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/register", validateUserCreateMiddleware(userCreateSchema), UsersControllers.create);
  routes.post("/login", validateUserLoginMiddleware(userLoginSchema), UsersControllers.login);
  routes.get("/:id", authUser, UsersControllers.retrieve);
  routes.patch("/:id", authUser, UsersControllers.update);
  routes.delete("/:id", authUser, UsersControllers.delete);
  routes.get("", authUser, UsersControllers.list);

  return routes
};
