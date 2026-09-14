import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand as={Link} to="/">
          Librería
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/catalogo">Catálogo</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/libros/nuevo">+ Agregar libro</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;