import { useState } from "react";

function Catalogo() {

  const [busqueda, setBusqueda] = useState("");
  const [libros, setLibros] = useState<any[]>([]);

  async function buscarLibros() {

    const respuesta = await fetch(
      `https://openlibrary.org/search.json?q=${busqueda}`
    );

    const data = await respuesta.json();

    setLibros(data.docs.slice(0, 8));
  }

  return (

        <div className="container mt-5 catalogo-container">
            
      <h2>
        Buscar libros
      </h2>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Ej: harry potter"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={buscarLibros}
      >
        Buscar
      </button>

      <div className="row mt-4">

        {libros.map((libro, index) => (

          <div className="col-md-3 mb-4" key={index}>

            <div className="card h-100">

              {libro.cover_i && (

                <img
                  src={`https://covers.openlibrary.org/b/id/${libro.cover_i}-L.jpg`}
                  className="card-img-top"
                />

              )}

              <div className="card-body">

                <h5 className="card-title">
                  {libro.title}
                </h5>

                <p className="text-muted">

                  {libro.author_name
                    ? libro.author_name[0]
                    : "Autor desconocido"}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Catalogo;