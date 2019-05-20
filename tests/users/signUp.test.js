import request from "supertest";
import app from "../../server/app";
import models from "../../db/models";

const { User } = models;

describe("signUp()", () => {
  test("should should create a user", async () => {
    expect.assertions(1);
    const res = await request(app)
      .post(`/api/v1/users/auth`)
      .send({
        username: "niomwungerii",
        email: "email@email.rw",
        password: "85669954wecj"
      });
    expect(res.body.message).toBe("Account created successfully");
  });
  afterAll(async () => {
    await User.destroy({
      where: {},
      truncate: true,
      cascade: true
    });
  });
});
