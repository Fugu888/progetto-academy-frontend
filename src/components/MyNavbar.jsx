import React from "react";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav} from 'react-bootstrap';
import './MyNavbar.css';


const MyNavbar = () => {
    return(
        <>
            <Navbar sticky="top" className="myNavbarBackground" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link style={{"textDecoration":"none"}} to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link style={{"textDecoration":"none"}} to="/login"><Nav.Link href="#features">Login</Nav.Link></Link>
                        <Link style={{"textDecoration":"none"}} to="/find"><Nav.Link href="#features">Cerca</Nav.Link></Link> 
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNavbar;