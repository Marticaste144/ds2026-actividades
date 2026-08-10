import type { Request, Response } from "express";
import * as libroService from "../services/libros.service";

export function getAll(_req: Request, res: Response) {
  return res.json(libroService.findAll());
}

export function getById(req: Request, res: Response) {
  const libro = libroService.findById(Number(req.params.id));

  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  return res.json(libro);
}

export function create(req: Request, res: Response) {
  const nuevo = libroService.create(req.body);
  return res.status(201).json(nuevo);
}

export function update(req: Request, res: Response) {
  const libro = libroService.update(Number(req.params.id), req.body);

  if (!libro) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  return res.json(libro);
}

export function remove(req: Request, res: Response) {
  const ok = libroService.remove(Number(req.params.id));

  if (!ok) {
    return res.status(404).json({ error: "Libro no encontrado" });
  }

  return res.status(204).send();
}