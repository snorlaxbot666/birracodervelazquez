import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container , NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import CartIcon from '../CartWidget/CartWidget'



const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
  <Container fluid>
    
    <Navbar.Brand href="/">Artesanal Birra Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="#action2">Catalogo</Nav.Link>
        <NavDropdown title="Cervezas" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Fabricas</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Estilos</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Sobre Nosotros
        </Nav.Link>
        <CartIcon className="cart-widget__icon" />
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Buscar"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
                    

    )
}

export default NavBar