import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authorize } from "../middlewares/auth.middleware";

describe("Middleware de autorización", () => {
  function crearRespuestaMock() {
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    } as unknown as Response;

    return res;
  }

  it("permite el acceso a un ADMIN", () => {
    const req = {
      usuario: { id: 1, rol: "ADMIN" },
    } as Request;

    const res = crearRespuestaMock();
    const next = vi.fn();

    authorize("ADMIN")(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(res.status).not.toHaveBeenCalled();
  });

  it("rechaza a un CLIENTE con error 403", () => {
    const req = {
      usuario: { id: 2, rol: "CLIENTE" },
    } as Request;

    const res = crearRespuestaMock();
    const next = vi.fn();

    authorize("ADMIN")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(next).not.toHaveBeenCalled();
  });

  it("rechaza a un usuario sin sesión con error 401", () => {
    const req = {} as Request;

    const res = crearRespuestaMock();
    const next = vi.fn();

    authorize("ADMIN")(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });
});
