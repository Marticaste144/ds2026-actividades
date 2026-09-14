import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function SinPermiso() {
  return (
    <div className="container mt-5">
      <Alert variant="warning">
        No tenés permiso para acceder a esta página.
      </Alert>

      <Link to="/catalogo" className="btn btn-secondary">
        Volver al catálogo
      </Link>
    </div>
  );
}

export default SinPermiso;
