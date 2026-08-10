import { Libro } from "../types/libro.types";

const libros: Libro[] = [
  {
    id: 1,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 15000,
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    precio: 18000,
  },
  {
    id: 3,
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    precio: 35000,
  },
];

let proximoId = 4;

export function findAll(): Libro[] {
  return libros;
}

export function findById(id: number): Libro | undefined {
  return libros.find((libro) => libro.id === id);
}

export function create(datos: Omit<Libro, "id">): Libro {
  const nuevo: Libro = {
    id: proximoId++,
    ...datos,
  };

  libros.push(nuevo);
  return nuevo;
}

export function update(
  id: number,
  datos: Omit<Libro, "id">
): Libro | undefined {
  const indice = libros.findIndex((libro) => libro.id === id);

  if (indice === -1) return undefined;

  libros[indice] = {
    id,
    ...datos,
  };

  return libros[indice];
}

export function remove(id: number): boolean {
  const indice = libros.findIndex((libro) => libro.id === id);

  if (indice === -1) return false;

  libros.splice(indice, 1);
  return true;
}