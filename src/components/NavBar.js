import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo.jpg';

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg" fixed="top" style={{minHeight: 80}}>
                    <Container>
                        <div>
                            <Navbar.Brand href="#home">
                                <img src={logo} width="50" height="50" className="d-inline-block mx-2" alt="Logo"/>
                                Logo
                            </Navbar.Brand>
                        </div>
                        <div>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home" className="active">Incio</Nav.Link>
                                    <Nav.Link href="#link">¿Quiénes somos?</Nav.Link>
                                    <Nav.Link href="#link">Tienda</Nav.Link>
                                    <Nav.Link href="#link">Contacto</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default NavBar