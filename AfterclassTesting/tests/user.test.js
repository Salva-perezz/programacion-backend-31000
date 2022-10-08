import { expect } from "chai";
import supertest from "supertest";
import userFactory from "./factory/user.factory.js";

let request;
let userId;

describe("Testing user routes", () => {
  before(() => {
    request = supertest("http://localhost:3000");
  });

  describe("- POST /api/user", () => {
    const userToCreate = userFactory.generateUser();
    let response;

    it("Should return 201", async () => {
      response = await request
        .post("/api/user")
        .send({ ...userToCreate, password: "salva" });
      expect(response.status).to.eql(201);
    });

    it("Should return the created user", () => {
      expect(response.body.email).to.eql(userToCreate.email);
      expect(response.body.username).to.eql(userToCreate.username);
      expect(response.body).to.keys("email", "id", "username");
      userId = response.body.id;
    });
  });
});
