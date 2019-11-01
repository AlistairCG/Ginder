import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Ginder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="/login">Home</Nav.Link>
            <Nav.Link href="/registration">About us</Nav.Link>
            <Nav.Link href="/login">Partners</Nav.Link>
            <Nav.Link href="/groups">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
