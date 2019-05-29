import passport from "passport";
import jwt from "jsonwebtoken";
import "@babel/polyfill";
import { Strategy as TwitterStrategy } from "passport-twitter";

import { OAuth2Strategy as GoogleStrategy } from "passport-google-oauth";
import "dotenv/config";
import models from "../../db/models";

const { User } = models;

const {
  JWT_SECRET,
  GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
  GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET
} = process.env;

passport.serializeUser((user, callback) => {
  callback(null, user);
});

passport.deserializeUser(async (user, callback) => {
  const foundUser = await User.findOne({ where: { id: user.id } });
  callback(null, foundUser);
});

const generateToken = async user => {
  const token = jwt.sign({ id: user.id }, JWT_SECRET);
  return token;
};
const extension = Math.floor(Math.random() * (999 - 100 + 1) + 100);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
      clientSecret: GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/v1/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const data = profile._json;
        const user = await User.findOrCreate({
          where: { email: data.email },
          defaults: {
            username: data.given_name.toLowerCase() + extension,
            email: data.email || null,
            firstName: data.given_name,
            password: data.given_name,
            socialId: profile.id,
            profileImage: data.picture || null,
            isVerified: true
          }
        });
        const token = await generateToken(user[0].get());
        return done(null, { ...user[0].get(), token });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

export default passport;
