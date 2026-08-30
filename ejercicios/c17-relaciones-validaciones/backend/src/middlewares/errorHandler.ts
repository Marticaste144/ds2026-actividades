import type {
  Request,
  Response,
  NextFunction,
} from "express";
import { Prisma } from "../generated/prisma/client";

export function errorHandler(
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return res.status(409).json({
        error: "Ya existe un registro con esos datos",
      });
    }

    if (error.code === "P2025") {
      return res.status(404).json({
        error: "Registro no encontrado",
      });
    }

    if (error.code === "P2003") {
      return res.status(409).json({
        error: "El registro está relacionado con otros datos",
      });
    }
  }

  console.error(error);

  return res.status(500).json({
    error: "Error interno del servidor",
  });
}