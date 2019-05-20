import { Router } from "express";
import errorHandler from "../middlewares/errorHandler";
import AuthController from "../controllers/auth/authController";
import { inputValidator } from "../middlewares/inputValidator";

const authRouters = Router();

authRouters.post(
  "/users/auth",
  inputValidator("signup"),
  errorHandler(AuthController.signUp)
);

export default authRouters;
