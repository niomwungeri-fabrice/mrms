import request from "supertest";
import app from "../../server/app";
import serverResponses from "../../server/middlewares/serverResponses";

const { OK, NOT_FOUND } = serverResponses.statusCode;

describe("app()", () => {
  test("should return Welcome note to the API", async () => {
    expect.assertions(2);
    const res = await request(app).get(`/`);
    expect(res.status).toBe(OK);
    expect(res.body.message).toBe("Welcome to home of mrms API v1");
  });

  test("should return Page not found", async () => {
    expect.assertions(2);
    const res = await request(app).get(`/api/v1/jls`);
    expect(res.status).toEqual(NOT_FOUND);
    expect(res.body.message).toEqual(
      "We are sorry we cannot find the page you are looking for , Please check the url and retry"
    );
  });
});
