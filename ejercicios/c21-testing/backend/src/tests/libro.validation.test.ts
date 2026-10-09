import { describe, it, expect } from "vitest";
import { libroCreateSchema } from "../validations/libro.validation";

describe("Validación de libros con Zod", () => {
  const libroValido = {
    titulo: "El Principito",
    precio: 15000,
    imagen: "principito.jpg",
    autorId: 1,
  };

  it("acepta un libro con datos válidos", () => {
    const resultado = libroCreateSchema.safeParse(libroValido);

    expect(resultado.success).toBe(true);
  });

  it("rechaza un libro con precio negativo", () => {
    const resultado = libroCreateSchema.safeParse({
      ...libroValido,
      precio: -100,
    });

    expect(resultado.success).toBe(false);
  });

  it("rechaza un libro sin título", () => {
    const resultado = libroCreateSchema.safeParse({
      ...libroValido,
      titulo: "",
    });

    expect(resultado.success).toBe(false);
  });
});
