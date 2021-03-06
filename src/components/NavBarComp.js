import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../logo.png';

function NavBarComp() {
    return (
        <Navbar bg="w3-white" expand="lg">
            <Navbar.Brand href="/"><img src={logo} style={{width: "4rem"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" className="w3-text-black w3-hover-opacity">Home</Nav.Link>
                    <Nav.Link href="/#/education" className="w3-text-teal w3-hover-opacity">Education</Nav.Link>
                    <Nav.Link href="/#/experience" className="w3-text-black w3-hover-opacity">Experience</Nav.Link>                    
                    <Nav.Link href="/#/extracurriculars" className="w3-text-teal w3-hover-opacity">Extracurriculars</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBarComp;