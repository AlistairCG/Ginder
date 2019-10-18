import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import Logo from "../images/grinder.jpg";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/homepage">Ginder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/homepage">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
