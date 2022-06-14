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
        <Nav.Link href="/categoryId">Catalogo</Nav.Link>
        <NavDropdown title="Cervezas" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/categoryId/ipa">IPA</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/wipa">WIPA</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/especial">ESPECIAL</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/hemp">HEMP</NavDropdown.Item>
          <NavDropdown.Item href="/categoryId/apa">APA</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
        <Nav.Link href="/" Disable>
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