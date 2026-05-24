import { useState } from "react";

import LibroCard from "./components/LibroCard";
import Catalogo from "./components/Catalogo";

function App() {

  const [pagina, setPagina] = useState("inicio");

  const [libroSeleccionado, setLibroSeleccionado] = useState<any>(null);

  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark">

        <div className="container">

          <a className="navbar-brand fw-bold">
            Librería
          </a>

          <div className="collapse navbar-collapse justify-content-end">

            <ul className="navbar-nav">

              <li className="nav-item">

                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => setPagina("inicio")}
                >
                  Inicio
                </button>

              </li>

              <li className="nav-item">

                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => setPagina("catalogo")}
                >
                  Catálogo
                </button>

              </li>

              <li className="nav-item">

                <button
                  className="nav-link btn btn-link text-white"
                  onClick={() => setPagina("contacto")}
                >
                  Contacto
                </button>

              </li>

            </ul>

          </div>

        </div>

      </nav>

      {pagina === "inicio" && (

        <>

          <section className="hero text-center">

            <div className="container">

              <h1 className="display-5">
                Librería "La Olivia"
              </h1>

              <p className="lead">
                Encontrá los mejores libros
              </p>

              <button
                className="btn btn-light btn-lg"
                onClick={() => setPagina("catalogo")}
              >
                Ver catálogo
              </button>

            </div>

          </section>

          <div className="container mt-5">

            <div className="row g-4">

              <LibroCard
                titulo="Nos conocimos en el mar"
                autor="Jenny Han"
                imagen="https://marketplace.canva.com/EAFKQkM-QPw/1/0/1003w/canva-portada-de-libro-o-ebook-novela-de-amor-fotograf%C3%ADa-color-rosa-A1D_Pq8DFoI.jpg"
                onVerMas={() => {

                  setPagina("detalle");

                  setLibroSeleccionado({
                    titulo: "Nos conocimos en el mar",
                    autor: "Jenny Han",
                    imagen: "https://marketplace.canva.com/EAFKQkM-QPw/1/0/1003w/canva-portada-de-libro-o-ebook-novela-de-amor-fotograf%C3%ADa-color-rosa-A1D_Pq8DFoI.jpg",
                    descripcion:
                      "Una novela romántica llena de emociones y momentos inolvidables junto al mar.",
                    precio: "$4500"
                  });

                }}
              />

              <LibroCard
                titulo="No tengas miedo"
                autor="Stephen King"
                imagen="https://images.cdn2.buscalibre.com/fit-in/360x360/76/28/76285bb379bca6410f16c52510b13944.jpg"
                onVerMas={() => {

                  setPagina("detalle");

                  setLibroSeleccionado({
                    titulo: "No tengas miedo",
                    autor: "Stephen King",
                    imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/76/28/76285bb379bca6410f16c52510b13944.jpg",
                    descripcion:
                      "Un libro de terror lleno de misterio y tensión que te mantiene atrapado desde la primera página. Ideal para los amantes del suspenso.",
                    precio: "$5000"
                  });

                }}
              />

              <LibroCard
                titulo="Lo que esconde el bosque"
                autor="Mercedes Ron"
                imagen="https://marketplace.canva.com/EAFpYu-k3tQ/2/0/1003w/canva-tapa-de-libro-de-terror-tipogr%C3%A1fico-blanco-y-negro-Lq-PT-PGQS8.jpg"
                onVerMas={() => {

                  setPagina("detalle");

                  setLibroSeleccionado({
                    titulo: "Lo que esconde el bosque",
                    autor: "Mercedes Ron",
                    imagen: "https://marketplace.canva.com/EAFpYu-k3tQ/2/0/1003w/canva-tapa-de-libro-de-terror-tipogr%C3%A1fico-blanco-y-negro-Lq-PT-PGQS8.jpg",
                    descripcion:
                      "Una historia oscura llena de secretos, suspenso y misterio.",
                    precio: "$5200"
                  });

                }}
              />

              <LibroCard
                titulo="La daga sin nombre"
                autor="Mercedes Ron"
                imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRqxxfgEJj5EFeo65HrfvL4Y3ckP8BlAjHw&s"
                onVerMas={() => {

                  setPagina("detalle");

                  setLibroSeleccionado({
                    titulo: "La daga sin nombre",
                    autor: "Mercedes Ron",
                    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRqxxfgEJj5EFeo65HrfvL4Y3ckP8BlAjHw&s",
                    descripcion:
                      "Una aventura de fantasía llena de magia y peligros.",
                    precio: "$6000"
                  });

                }}
              />

              <LibroCard
                titulo="Reyes caidos"
                autor="Pablo Cesar"
                imagen="https://marketplace.canva.com/EAFjNCKkDPI/2/0/1003w/canva-portada-de-libro-de-fantas%C3%ADa-dram%C3%A1tico-verde-vrb3LHyOaXg.jpg"
                onVerMas={() => {

                  setPagina("detalle");

                  setLibroSeleccionado({
                    titulo: "Reyes caidos",
                    autor: "Pablo Cesar",
                    imagen: "https://marketplace.canva.com/EAFjNCKkDPI/2/0/1003w/canva-portada-de-libro-de-fantas%C3%ADa-dram%C3%A1tico-verde-vrb3LHyOaXg.jpg",
                    descripcion:
                      "Una historia épica de reinos, traiciones y batallas.",
                    precio: "$7000"
                  });

                }}
              />

              <LibroCard
                titulo="Cruce de camino"
                autor="Victoria"
                imagen="https://marketplace.canva.com/EAFutLMZJKs/1/0/1003w/canva-portada-libro-novela-suspenso-elegante-negro-wxuYB_sJtMw.jpg"
                onVerMas={() => {

                  setPagina("detalle");

                  setLibroSeleccionado({
                    titulo: "Cruce de camino",
                    autor: "Victoria",
                    imagen: "https://marketplace.canva.com/EAFutLMZJKs/1/0/1003w/canva-portada-libro-novela-suspenso-elegante-negro-wxuYB_sJtMw.jpg",
                    descripcion:
                      "Una novela de suspenso con decisiones que cambian destinos.",
                    precio: "$4800"
                  });

                }}
              />

            </div>

          </div>

        </>

      )}

      {pagina === "catalogo" && (

        <Catalogo />

      )}

      {pagina === "detalle" && libroSeleccionado && (

        <div className="container mt-5">

          <div className="row align-items-center">

            <div className="col-md-6">

              <img
                src={libroSeleccionado.imagen}
                className="detalle-img rounded"
              />

            </div>

            <div className="col-md-6">

              <h2>
                {libroSeleccionado.titulo}
              </h2>

              <p className="text-muted">
                {libroSeleccionado.autor}
              </p>

              <p>
                {libroSeleccionado.descripcion}
              </p>

              <h4>
                {libroSeleccionado.precio}
              </h4>

              <button className="btn btn-success mb-2">
                Comprar
              </button>

              <br />

              <button
                className="btn btn-secondary"
                onClick={() => setPagina("inicio")}
              >
                Volver al catálogo
              </button>

            </div>

          </div>

        </div>

      )}

      {pagina === "contacto" && (

        <div className="container mt-5">

          <h2>
            Contacto
          </h2>

          <form>

            <div className="mb-3">

              <label className="form-label">
                Nombre
              </label>

              <input
                type="text"
                className="form-control"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                className="form-control"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Mensaje
              </label>

              <textarea
                className="form-control"
                rows={4}
              />

            </div>

            <button className="btn btn-primary">
              Enviar
            </button>

          </form>

        </div>

      )}

   {pagina === "inicio" && (

  <footer className="footer bg-dark text-white text-center">

    <p>
      Librería La Olivia - 2026
    </p>

  </footer>

)}

    </>
  );
}

export default App;