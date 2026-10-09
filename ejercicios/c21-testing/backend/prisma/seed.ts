import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";

async function main() {
  // Usuarios iniciales para autenticación
  const usuarios = [
    {
      email: "admin@libreria.test",
      nombre: "Admin",
      rol: "ADMIN" as const,
      password: "Admin1234",
    },
    {
      email: "cliente@libreria.test",
      nombre: "Cliente",
      rol: "CLIENTE" as const,
      password: "Cliente1234",
    },
  ];

  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: {
        ...datos,
        passwordHash: await bcrypt.hash(password, 10),
      },
    });
  }

  // Limpiamos primero las entidades dependientes
  await prisma.libro.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.autor.deleteMany();

  // Primero se crean los autores
  const saintExupery = await prisma.autor.create({
    data: {
      nombre: "Antoine de Saint-Exupéry",
      nacionalidad: "Francia",
    },
  });

  const georgeOrwell = await prisma.autor.create({
    data: {
      nombre: "George Orwell",
      nacionalidad: "Reino Unido",
    },
  });

  const robertMartin = await prisma.autor.create({
    data: {
      nombre: "Robert C. Martin",
      nacionalidad: "Estados Unidos",
    },
  });

  // Después se crean las categorías
  const ficcion = await prisma.categoria.create({
    data: {
      nombre: "Ficción",
    },
  });

  const clasicos = await prisma.categoria.create({
    data: {
      nombre: "Clásicos",
    },
  });

  const programacion = await prisma.categoria.create({
    data: {
      nombre: "Programación",
    },
  });

  // Por último se crean los libros conectando las relaciones
  await prisma.libro.create({
    data: {
      titulo: "El Principito",
      precio: 15000,
      imagen: "",
      disponible: true,
      autor: {
        connect: { id: saintExupery.id },
      },
      categorias: {
        connect: [{ id: ficcion.id }, { id: clasicos.id }],
      },
    },
  });

  await prisma.libro.create({
    data: {
      titulo: "1984",
      precio: 18000,
      imagen: "",
      disponible: true,
      autor: {
        connect: { id: georgeOrwell.id },
      },
      categorias: {
        connect: [{ id: ficcion.id }, { id: clasicos.id }],
      },
    },
  });

  await prisma.libro.create({
    data: {
      titulo: "Clean Code",
      precio: 35000,
      imagen: "",
      disponible: true,
      autor: {
        connect: { id: robertMartin.id },
      },
      categorias: {
        connect: [{ id: programacion.id }],
      },
    },
  });

  console.log("Seed ejecutado correctamente");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });