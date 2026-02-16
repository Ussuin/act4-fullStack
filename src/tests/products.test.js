const request = require("supertest");
const app = require("../../server");

describe("Productos API", () => {
  it("Debe obtener lista de productos", async () => {
    const res = await request(app).get("/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
