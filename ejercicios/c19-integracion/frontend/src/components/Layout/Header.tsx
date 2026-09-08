import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">

      <div className="container">

        <Link
          to="/"
          className="navbar-brand fw-bold text-decoration-none text-white"
        >
          Librería
        </Link>

        <div className="d-flex justify-content-end">

          <ul className="navbar-nav">

            <li className="nav-item">

              <Link
                to="/"
                className="nav-link text-white"
              >
                Inicio
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/catalogo"
                className="nav-link text-white"
              >
                Catálogo
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/contacto"
                className="nav-link text-white"
              >
                Contacto
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Header;