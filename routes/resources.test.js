const app = require("../app");
const request = require("supertest");
const pool = require("../db/index.js");

describe("GET /api/v1/resources tests", function () {
  it("responds with json", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000)); //Solution came from: https://stackoverflow.com/questions/69976411/jest-tlswrap-open-handle-error-using-simple-node-postgres-pool-query-fixed-wit
    const response = await request(app)
      .get("/api/v1/resources")
      .set("Accept", "application/json");
    // console.log(response.headers)
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });

  it("response with success: true and payload: array", async function () {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app)
      .get("/api/v1/resources")
      .set("Accept", "application/json");
    //console.log(response.body);
    expect(response.body).toStrictEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        payload: expect.any(Array),
      })
    );
  });

  it("response with an existing category", async function () {
    const chosenCategory = "React";
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app)
      .get(`/api/v1/resources?category=${chosenCategory}`)
      .set("Accept", "application/json");
    // console.log(response.body);
    expect(response.body).toStrictEqual(
      expect.objectContaining({
        success: expect.any(Boolean),
        payload: expect.arrayContaining([
          expect.objectContaining({ category: chosenCategory }),
        ]),
      })
    );
  });
});

describe("Post request handler tests", function () {
  it.only("posts a new resource", async function () {
    const newResource = {
      headline: "React - don't do it! ",
      description: "React goes to Hollywood",
      url: "https://www.youtube.com/watch?v=eZJOSK4gXl4&t=757s",
      category: "React",
      format: "Video",
    };

    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app)
      .post("/api/v1/resources")
      .send(newResource);
    // .expect(201);
    console.log(response.body);
    //   .set("Accept", "application/json");

    // expect(response.headers["content-type"]).toMatch(/json/);
    // expect(response.body).toStrictEqual(
    //   expect.objectContaining({
    //     success: expect.any(Boolean),
    //     payload: expect.arrayContaining([
    //       expect.objectContaining({ newResource }),
    //     ]),
    //   })
    // );
  });
});

afterAll(async () => {
  await pool.end();
});
