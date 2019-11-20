import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Image
} from "react-bootstrap";

import logo_ns from "../../images/logo_noSlogan.png"

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
      <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Brand style={GinderStyle} href="/">
        <Image src={logo_ns} thumbnail></Image>
        </Navbar.Brand>
      </Navbar>
    )
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand style={GinderStyle} href="/homepage">
        <Image src={logo_ns} width="70%" thumbnail></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="text-center" style={LoginStyle}>
            <Button variant="danger" href="/">
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
