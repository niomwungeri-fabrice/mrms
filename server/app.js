import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import "./middlewares/passportStrategies";
import "@babel/polyfill";
import expressValidator from "express-validator";
import routers from "./routes";
import serverResponses from "./middlewares/serverResponses";

const { NOT_FOUND, OK } = serverResponses.statusCode;

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) =>
  res.status(OK).send({ message: "Welcome to home of mrms API v1" })
);
app.use(expressValidator());
app.use("/api/v1", routers);
app.use((req, resp, next) => {
  const err = new Error(
    "We are sorry we cannot find the page you are looking for , Please check the url and retry"
  );
  err.status = NOT_FOUND;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status);
  res.json({
    message: err.message
  });
});

export default app;
