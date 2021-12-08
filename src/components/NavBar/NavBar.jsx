import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';

import logo from '../../assets/img/logo.jpg';


function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top" style={{minHeight: '20vh'}}>
                <Container>
                    <div>
                        <Navbar.Brand href="#home">
                            <img src={logo} width="50" height="50" className="d-inline-block mx-2" alt="Logo"/>
                            Logo
                        </Navbar.Brand>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home" className="active">Incio</Nav.Link>
                                <Nav.Link href="#link">¿Quiénes somos?</Nav.Link>
                                <Nav.Link href="#link">Tienda</Nav.Link>
                                <Nav.Link href="#link">Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <CartWidget />
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
