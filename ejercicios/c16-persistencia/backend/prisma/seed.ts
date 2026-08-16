import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 15000,
    imagen: "",
    disponible: true,
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    precio: 18000,
    imagen: "",
    disponible: true,
  },
  {
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    precio: 35000,
    imagen: "",
    disponible: true,
  },
];

const autores = [
  {
    nombre: "Antoine de Saint-Exupéry",
    nacionalidad: "Francia",
  },
  {
    nombre: "George Orwell",
    nacionalidad: "Reino Unido",
  },
  {
    nombre: "Robert C. Martin",
    nacionalidad: "Estados Unidos",
  },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
}

main();