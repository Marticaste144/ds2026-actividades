import { useState } from "react";

type LibroCardProps = {
  titulo: string;
  autor: string;
  imagen: string;
  onVerMas: () => void;
};

function LibroCard({
  titulo,
  autor,
  imagen,
  onVerMas
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

          <button
            className="btn btn-primary btn-sm"
            onClick={onVerMas}
          >
            Ver más
          </button>

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