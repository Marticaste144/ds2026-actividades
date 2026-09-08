import { z } from "zod";

export const libroCreateSchema = z.object({
  titulo: z.string().min(1, "El título es obligatorio"),
  precio: z.number().int().positive("El precio debe ser mayor a 0"),
  imagen: z.string(),
  disponible: z.boolean().optional(),
  autorId: z.number().int().positive("autorId debe ser válido"),
  categoriaIds: z.array(z.number().int().positive()).optional(),
});

export const libroUpdateSchema = libroCreateSchema.partial();