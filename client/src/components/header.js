import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Link }  from "react-router-dom";

function Header() {
  return (
    <Navbar sticky="top" bg="primary" variant="dark" className="justify-content-left">
        <Router>
        <Link to="/">
            <Navbar.Brand>Google Books</Navbar.Brand>
        </Link>
        <Nav className="mr-auto">
            <Link to="/search">
                <Nav.Link>Search</Nav.Link>
            </Link>
            <Link to="/saved">
                <Nav.Link>Saved</Nav.Link>
            </Link>
        </Nav>
        </Router>
    </Navbar>
  )
}

export default Header;