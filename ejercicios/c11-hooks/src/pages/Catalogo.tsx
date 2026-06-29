import { Spinner, Alert } from "react-bootstrap";
import LibroCard from "../components/LibroCard";
import { useFetch } from "../hooks/useFetch";
import type { Libro } from "../data/libros";

function Catalogo() {
  const { data: libros, loading, error } = useFetch<Libro[]>("/libros.json");

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div className="container mt-5">
      <h2>Catálogo</h2>
      <div className="row g-4">
        {(libros ?? []).map((libro) => (
          <LibroCard
            key={libro.id}
            id={libro.id}
            titulo={libro.titulo}
            autor={libro.autor}
            imagen={libro.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;