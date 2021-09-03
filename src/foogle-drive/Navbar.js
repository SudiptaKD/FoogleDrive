import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar bg = "secondary" expand = "sm" >
            <Container>
            <Navbar.Brand as={Link} to="/" >
                Foogle Drive
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user" >
                    Profile
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}
