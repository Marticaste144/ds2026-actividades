import { useParams, Link } from "react-router-dom";
import { libros } from "../data/libros";

function LibroDetalle() {

  const { id } = useParams<{ id: string }>();

  const libro = libros.find((l) => l.id === Number(id));

  if (!libro) {
    return (
      <div className="container mt-5">
        <h2>Libro no encontrado</h2>
        <Link to="/" className="btn btn-secondary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="row align-items-center">

        <div className="col-md-6">

          <img
            src={libro.imagen}
            className="detalle-img rounded"
          />

        </div>

        <div className="col-md-6">

          <h2>{libro.titulo}</h2>

          <p className="text-muted">{libro.autor}</p>

          <p>{libro.descripcion}</p>

          <h4>{libro.precio}</h4>

          <button className="btn btn-success mb-2">
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