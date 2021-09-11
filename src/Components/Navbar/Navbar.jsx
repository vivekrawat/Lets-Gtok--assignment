import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import './Styles.css'

const navbar = () => {
    return (
        <Navbar collapseOnSelect expand="sm">
        <Container fluid>
            <Navbar.Brand className="text-primary">
                <span className="circle">G</span>
                Lets Gtok</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Blogs</Nav.Link>
                <Nav.Link>Careers</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default navbar
