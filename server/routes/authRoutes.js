import { Router } from "express";
import passport from "passport";
import errorHandler from "../middlewares/errorHandler";
import AuthController from "../controllers/auth/authController";
import { inputValidator } from "../middlewares/inputValidator";

const authRouters = Router();

authRouters.post(
  "/users/auth",
  inputValidator("signup"),
  errorHandler(AuthController.signUp)
);

authRouters.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authRouters.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  AuthController.socialLogin
);

export default authRouters;
