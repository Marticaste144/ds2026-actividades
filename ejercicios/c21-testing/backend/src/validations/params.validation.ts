import { z } from "zod";

export const idParamsSchema = z.object({
  id: z.coerce.number().int().positive("El id debe ser válido"),
});