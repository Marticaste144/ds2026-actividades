import { useState } from "react";
import { Link } from "react-router-dom";

type LibroCardProps = {
  id: number;
  titulo: string;
  autor: string;
  imagen: string;
};

function LibroCard({
  id,
  titulo,
  autor,
  imagen
}: LibroCardProps) {

  const [likes, setLikes] = useState(0);

  return (

    <div className="col-md-3">

      <div className="card">

        <img
          src={imagen}
          className="card-img-top"
        />

        <div className="card-body text-center">

          <h5 className="card-title">
            {titulo}
          </h5>

          <p className="text-muted">
            {autor}
          </p>

          <Link
            to={`/libros/${id}`}
            className="btn btn-primary btn-sm"
          >
            Ver más
          </Link>

          <br />
          <br />

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => setLikes(likes + 1)}
          >
            ❤ {likes}
          </button>

        </div>

      </div>

    </div>

  );
}

export default LibroCard;