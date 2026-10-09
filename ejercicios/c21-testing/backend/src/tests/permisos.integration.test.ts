import { describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";

describe("Integración - permisos de libros", () => {
  const crearToken = (rol: "ADMIN" | "CLIENTE") =>
    jwt.sign({ id: 1, rol }, JWT_SECRET);

  it("rechaza una escritura sin token con 401", async () => {
    const respuesta = await request(app)
      .post("/api/libros")
      .send({});

    expect(respuesta.status).toBe(401);
  });

  it("rechaza una escritura de CLIENTE con 403", async () => {
    const token = crearToken("CLIENTE");

    const respuesta = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${token}`)
      .send({});

    expect(respuesta.status).toBe(403);
  });

  it("permite pasar la autorización a ADMIN", async () => {
    const token = crearToken("ADMIN");

    const respuesta = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${token}`)
      .send({});

    expect(respuesta.status).toBe(400);
  });
});
