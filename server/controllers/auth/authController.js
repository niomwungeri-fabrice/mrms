import { Op } from "sequelize";
import serverResponses from "../../middlewares/serverResponses";
import models from "../../../db/models";
import { hashedPassword } from "../../utils/helpers";

const { ACCEPTED, UNAUTHORIZED } = serverResponses.statusCode;
const { FRONTEND_URL } = process.env;
const { User } = models;
class AuthController {
  static async signUp(req, res) {
    const {
      body: { password, username, email }
    } = req;
    const response = await User.findOne({
      where: {
        [Op.or]: [
          { email: email.toLowerCase() },
          { username: username.toLowerCase() }
        ]
      }
    });
    if (response) {
      return res
        .status(UNAUTHORIZED)
        .json({ message: "Account already exist" });
    }
    await User.create({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: await hashedPassword(password)
    });
    return res
      .status(ACCEPTED)
      .json({ message: "Account created successfully" });
  }

  static async socialLogin(req, res) {
    res.redirect(`${FRONTEND_URL}?token=${req.user.token}`);
  }
}

export default AuthController;
