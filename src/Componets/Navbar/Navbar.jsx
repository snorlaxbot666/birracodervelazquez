
   
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, Container } from "react-bootstrap"
import CartIcon from '../CartWidget/CartWidget'


const NavBar = () => {
    return <>
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <CartIcon className="cart-widget__icon" />
                    <Navbar.Brand href="#home">BirraCoder</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Fermentando las promos</Nav.Link>
                        <Nav.Link href="#pricing">Madurando</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
}

export default NavBar