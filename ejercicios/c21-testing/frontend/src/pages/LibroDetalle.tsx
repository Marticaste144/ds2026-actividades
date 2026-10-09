import { Alert, Spinner } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import type { Libro } from "../data/libros";

type Categoria = {
  id: number;
  nombre: string;
};

type LibroDetalleApi = Libro & {
  categorias: Categoria[];
};

function LibroDetalle() {
  const { id } = useParams<{ id: string }>();

  const {
    data: libro,
    loading,
    error,
  } = useFetch<LibroDetalleApi>(`/libros/${id}`);

  if (loading) {
    return (
      <div className="container mt-5">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <Alert variant="danger">{error}</Alert>

        <Link to="/" className="btn btn-secondary">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  if (!libro) {
    return null;
  }

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={libro.imagen}
            alt={libro.titulo}
            className="detalle-img rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{libro.titulo}</h2>

          <p className="text-muted">
            {libro.autor.nombre}
          </p>

          <h4>${libro.precio}</h4>

          <p>
            {libro.disponible ? "Disponible" : "No disponible"}
          </p>

          <button
            className="btn btn-success mb-2"
            disabled={!libro.disponible}
          >
            Comprar
          </button>

          <br />

          <Link to="/" className="btn btn-secondary mt-2">
            Volver al catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LibroDetalle;