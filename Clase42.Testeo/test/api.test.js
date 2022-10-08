import supertest from "supertest";
import { expect } from "chai";
import userFactory from "./factory/user.factory.js";

let request;
let createdUser;

describe("Test over API REST FULL", () => {
  before(() => {
    request = supertest("http://localhost:3000");
  });

  describe("- POST /api/user", () => {
    const userToCreate = userFactory.generateUser();
    it("Should return status 201", async () => {
      const response = await request.post("/api/user").send(userToCreate);

      createdUser = response.body.data;
      expect(response.status).to.eql(201);
    });

    it("Response should have name, email and id properties", () => {
      expect(createdUser).to.keys("name", "email", "id");
    });

    it("Should return created user", () => {
      expect(createdUser.name).to.eql(userToCreate.name);
      expect(createdUser.email).to.eql(userToCreate.email);
    });
  });

  describe("- GET /api/user", () => {
    it("Should return status 200", async () => {
      const response = await request
        .get("/api/user")
        .set({ userId: createdUser.id });

      expect(response.status).to.eql(200);
    });

    it("Response should have name, email and id properties", () => {
      expect(createdUser).to.keys("name", "email", "id");
    });
  });

  describe("- GET Unknown", () => {
    it("Should return 404", async () => {
      const response = await request.get("/asdasd");

      expect(response.status).to.eql(404);
    });
  });
});
