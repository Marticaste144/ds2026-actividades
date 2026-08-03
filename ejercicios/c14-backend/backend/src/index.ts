import express from "express";

const app = express();
const PORT = 3000;

const libros = [
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

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería — ¡hola desde un contenedor! 🐳" });
});

app.get("/libros", (_req, res) => {
  res.json(libros);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});