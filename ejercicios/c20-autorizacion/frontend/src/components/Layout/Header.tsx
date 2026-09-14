import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const navigate = useNavigate();
  const { usuario, logout, tieneRol } = useAuth();

  function manejarSesion() {
    if (usuario) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link
          to="/"
          className="navbar-brand fw-bold text-decoration-none text-white"
        >
          Librería
        </Link>

        <div className="d-flex justify-content-end align-items-center">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/catalogo" className="nav-link text-white">
                Catálogo
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contacto" className="nav-link text-white">
                Contacto
              </Link>
            </li>

            {tieneRol("ADMIN") && (
              <li className="nav-item">
                <Link
                  to="/libros/nuevo"
                  className="nav-link text-white"
                >
                  Nuevo libro
                </Link>
              </li>
            )}

            {usuario && (
              <li className="nav-item">
                <span className="navbar-text text-white px-2">
                  Hola, {usuario.nombre}
                </span>
              </li>
            )}

            <li className="nav-item">
              <button
                type="button"
                className="btn btn-link nav-link text-white"
                onClick={manejarSesion}
              >
                {usuario ? "Salir" : "Ingresar"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
