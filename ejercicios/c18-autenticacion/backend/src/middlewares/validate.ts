import type { Request, Response, NextFunction } from "express";
import type { ZodType } from "zod";

export function validate(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.body);

    if (!resultado.success) {
      return res.status(400).json({
        error: "Datos inválidos",
        details: resultado.error.issues,
      });
    }

    req.body = resultado.data;
    next();
  };
}

export function validateParams(schema: ZodType) {
  return (req: Request, res: Response, next: NextFunction) => {
    const resultado = schema.safeParse(req.params);

    if (!resultado.success) {
      return res.status(400).json({
        error: "Parámetros inválidos",
        details: resultado.error.issues,
      });
    }

    req.params = resultado.data as any;
    next();
  };
}