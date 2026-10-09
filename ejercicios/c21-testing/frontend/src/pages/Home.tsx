import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";
import LibroCard from "../components/LibroCard";
import { useFetch } from "../hooks/useFetch";
import type { Libro } from "../data/libros";

function Home() {
  const { data: libros, loading, error } = useFetch<Libro[]>("/libros");

  useEffect(() => {
    document.title = "Librería La Olivia";
  }, []);

  return (
    <>
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-5">Librería "La Olivia"</h1>
          <p className="lead">Encontrá los mejores libros</p>

          <Link to="/catalogo" className="btn btn-light btn-lg">
            Ver catálogo
          </Link>
        </div>
      </section>

      <div className="container mt-5">
        {loading && <Spinner animation="border" />}

        {error && <Alert variant="danger">{error}</Alert>}

        <div className="row g-4">
          {(libros ?? []).map((libro) => (
            <LibroCard
              key={libro.id}
              id={libro.id}
              titulo={libro.titulo}
              autor={libro.autor.nombre}
              imagen={libro.imagen}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;