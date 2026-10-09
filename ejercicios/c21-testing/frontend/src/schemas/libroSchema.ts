import { z } from "zod";

export const libroSchema = z.object({
  titulo: z.string().trim().min(1, "El título es obligatorio"),

  precio: z.coerce
    .number()
    .int("El precio debe ser un número entero")
    .positive("El precio debe ser mayor a 0"),

  imagen: z.string().trim(),

  disponible: z.boolean(),

  autorId: z.coerce
    .number()
    .int()
    .positive("El autor es obligatorio"),
});

export type LibroValidado = z.infer<typeof libroSchema>;