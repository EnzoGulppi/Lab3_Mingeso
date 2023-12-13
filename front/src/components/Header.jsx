import React from "react";
import { Button, Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login"); // Navega a la ruta /login
    };
    
    return (
        <Navbar style={{ backgroundColor: '#00a499' }} variant="dark" expand="lg" sticky="top">
        <Container>
            <Navbar.Brand href="/home">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Escudo_USACH.svg/1200px-Escudo_USACH.svg.png"
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Logo de Universidad de Santiago de Chile"
                />
                LOA USACH
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Button variant="outline-info" href="/home" className="text-white mx-1">Inicio</Button>
                    <Button variant="outline-info" href="/subjects" className="text-white mx-1">Inscripción asignaturas</Button>
                    <Button variant="outline-info" href="/curriculum" className="text-white mx-1">Malla curricular</Button>
                    <Button variant="outline-info" href="/schedule" className="text-white mx-1">Mi horario</Button>
                    <Button variant="outline-info" href="/historial" className="text-white mx-1">Historial académico</Button>
                    <Button variant="outline-info" href="/soporte" className="text-white mx-1">Ayuda y soporte</Button>
                </Nav>
                <Button variant="btn btn-light" style={{ borderRadius: '20px' }} onClick={handleLoginClick}>
                    Iniciar sesión
                </Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;

