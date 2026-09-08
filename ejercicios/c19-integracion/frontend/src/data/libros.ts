export type Autor = {
  id: number;
  nombre: string;
};

export type Libro = {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  disponible: boolean;
  autorId: number;
  autor: Autor;
};