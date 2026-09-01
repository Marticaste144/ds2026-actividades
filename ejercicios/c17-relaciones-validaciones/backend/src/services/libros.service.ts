import { prisma } from "../config/prisma";
import type { Prisma } from "../generated/prisma/client";

export type LibroConAutor = Prisma.LibroGetPayload<{
  include: {
    autor: true;
  };
}>;

export type LibroDetalle = Prisma.LibroGetPayload<{
  include: {
    autor: true;
    categorias: true;
  };
}>;

export interface LibroCreateData {
  titulo: string;
  precio: number;
  imagen: string;
  disponible?: boolean;
  autorId: number;
  categoriaIds?: number[];
}

export interface LibroUpdateData {
  titulo?: string;
  precio?: number;
  imagen?: string;
  disponible?: boolean;
  autorId?: number;
  categoriaIds?: number[];
}

export async function findAll(
  disponible?: boolean
): Promise<LibroConAutor[]> {
  return prisma.libro.findMany({
    where: disponible === undefined ? undefined : { disponible },
    include: {
      autor: true,
    },
  });
}

export async function findById(
  id: number
): Promise<LibroDetalle | null> {
  return prisma.libro.findUnique({
    where: { id },
    include: {
      autor: true,
      categorias: true,
    },
  });
}

export async function create(
  datos: LibroCreateData
): Promise<LibroDetalle> {
  const {
    autorId,
    categoriaIds = [],
    ...datosLibro
  } = datos;

  return prisma.libro.create({
    data: {
      ...datosLibro,
      autor: {
        connect: { id: autorId },
      },
      categorias: {
        connect: categoriaIds.map((id) => ({ id })),
      },
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
}

export async function update(
  id: number,
  datos: LibroUpdateData
): Promise<LibroDetalle> {
  const {
    autorId,
    categoriaIds,
    ...datosLibro
  } = datos;

  return prisma.libro.update({
    where: { id },
    data: {
      ...datosLibro,

      ...(autorId !== undefined && {
        autor: {
          connect: { id: autorId },
        },
      }),

      ...(categoriaIds !== undefined && {
        categorias: {
          set: categoriaIds.map((categoriaId) => ({
            id: categoriaId,
          })),
        },
      }),
    },
    include: {
      autor: true,
      categorias: true,
    },
  });
}

export async function remove(id: number): Promise<void> {
  await prisma.libro.delete({
    where: { id },
  });
}