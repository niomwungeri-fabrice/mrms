/* eslint-disable import/no-mutable-exports */
import dotenv from "dotenv";
import "@babel/polyfill";
import models from "../../db/models";
import { hashedPassword } from "./helpers";

let user;
dotenv.config();
const { User } = models;

export const dummyUser = {
  firstName: "Fabrice",
  lastName: "NIYOMWUNGERI",
  password: "123456MRMS",
  email: "niomwungeri@email.com",
  username: "niomwungeri"
};

export const createUser = async () => {
  user = await User.create({
    ...dummyUser,
    password: await hashedPassword(dummyUser.password)
  });
  return user;
};

export const deleteUser = async () => {
  await User.destroy({
    where: {},
    truncate: true,
    cascade: true
  });
};

export { user };
