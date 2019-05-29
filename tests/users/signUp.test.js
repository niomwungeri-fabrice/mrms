import request from "supertest";
import app from "../../server/app";
import models from "../../db/models";
import serverResponses from "../../server/middlewares/serverResponses";

const { UNAUTHORIZED, ACCEPTED } = serverResponses.statusCode;
const { User } = models;

describe("signUp()", () => {
  test("should should create a user", async () => {
    expect.assertions(2);
    const res = await request(app)
      .post(`/api/v1/users/auth`)
      .send({
        username: "niomwungeri",
        email: "email@email.rw",
        password: "85669954wecj"
      });
    expect(res.status).toBe(ACCEPTED);
    expect(res.body.message).toBe("Account created successfully");
  });

  test("should should return user already exist", async () => {
    expect.assertions(2);
    const res = await request(app)
      .post(`/api/v1/users/auth`)
      .send({
        username: "niomwungeri",
        email: "email@email.rw",
        password: "85669954wecj"
      });
    expect(res.status).toBe(UNAUTHORIZED);
    expect(res.body.message).toBe("Account already exist");
  });

  afterAll(async () => {
    await User.destroy({
      where: {},
      truncate: true,
      cascade: true
    });
  });
});
