import { Link } from "react-router-dom";
import LibroCard from "../components/LibroCard";
import { libros } from "../data/libros";

function Home() {
  return (
    <>
      <section className="hero text-center">

        <div className="container">

          <h1 className="display-5">
            Librería "La Olivia"
          </h1>

          <p className="lead">
            Encontrá los mejores libros
          </p>

          <Link
            to="/catalogo"
            className="btn btn-light btn-lg"
          >
            Ver catálogo
          </Link>

        </div>

      </section>

      <div className="container mt-5">

        <div className="row g-4">

          {libros.map((libro) => (
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
    </>
  );
}

export default Home;