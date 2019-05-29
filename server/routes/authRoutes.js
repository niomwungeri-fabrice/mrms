import { Router } from "express";
import errorHandler from "../middlewares/errorHandler";
import AuthController from "../controllers/auth/authController";
import { inputValidator } from "../middlewares/inputValidator";

const authRouters = Router();

authRouters.post(
  "/auth/signup",
  inputValidator("signup"),
  errorHandler(AuthController.signUp)
);

export default authRouters;
