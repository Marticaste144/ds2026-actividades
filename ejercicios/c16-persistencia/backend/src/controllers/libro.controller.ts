import type { Request, Response } from "express";
import * as libroService from "../services/libros.service";

export async function getAll(req: Request, res: Response) {
  try {
    const disponible =
      req.query.disponible !== undefined
        ? req.query.disponible === "true"
        : undefined;

    const libros = await libroService.findAll(disponible);
    return res.json(libros);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener los libros" });
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const libro = await libroService.findById(Number(req.params.id));

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.json(libro);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al obtener el libro" });
  }
}

export async function create(req: Request, res: Response) {
  try {
    const nuevo = await libroService.create(req.body);
    return res.status(201).json(nuevo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear el libro" });
  }
}

export async function update(req: Request, res: Response) {
  try {
    const libro = await libroService.update(
      Number(req.params.id),
      req.body
    );

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.json(libro);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al actualizar el libro" });
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const ok = await libroService.remove(Number(req.params.id));

    if (!ok) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al eliminar el libro" });
  }
}