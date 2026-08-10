import { Autor } from "../types/autor.types";

const autores: Autor[] = [
  {
    id: 1,
    nombre: "Antoine de Saint-Exupéry",
  },
  {
    id: 2,
    nombre: "George Orwell",
  },
  {
    id: 3,
    nombre: "Robert C. Martin",
  },
];

let proximoId = 4;

export function findAll(): Autor[] {
  return autores;
}

export function findById(id: number): Autor | undefined {
  return autores.find((autor) => autor.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = {
    id: proximoId++,
    ...datos,
  };

  autores.push(nuevo);
  return nuevo;
}

export function update(
  id: number,
  datos: Omit<Autor, "id">
): Autor | undefined {
  const indice = autores.findIndex((autor) => autor.id === id);

  if (indice === -1) return undefined;

  autores[indice] = {
    id,
    ...datos,
  };

  return autores[indice];
}

export function remove(id: number): boolean {
  const indice = autores.findIndex((autor) => autor.id === id);

  if (indice === -1) return false;

  autores.splice(indice, 1);
  return true;
}