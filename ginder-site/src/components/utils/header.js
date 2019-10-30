import React from "react";
import {
  Navbar,
  Nav,
  Button
} from "react-bootstrap";

const GinderStyle = {
  paddingLeft: "3%",
  fontSize: "200%",
  fontFamily: "'Montserrat', sans-serif"
};

const LoginStyle = {
  paddingRight: "3%"
};

function Header(props) {
  if (props.isGuest === "true") {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={GinderStyle} href="/">
          Ginder
        </Navbar.Brand>
      </Navbar>
    )
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={GinderStyle} href="/">
          Ginder
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="text-center" style={LoginStyle}>
            <Button variant="outline-danger" href="/">
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
