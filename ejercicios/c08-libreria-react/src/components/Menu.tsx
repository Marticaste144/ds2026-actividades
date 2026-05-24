import { Container, Nav, Navbar } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand>
          Librería
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link>Inicio</Nav.Link>
            <Nav.Link>Catálogo</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;