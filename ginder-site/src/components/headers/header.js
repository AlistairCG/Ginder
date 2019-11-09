import React from "react";
import { Navbar, NavDropdown, Nav, FormControl, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

class Header extends React.Component {
  render() {
    return (
      <>
      <Navbar style={{ backgroundColor: '#07374b' }} variant="dark" expand="lg">
        <Navbar.Brand><img width="200" src={logo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ fontSize: 'x-large' }} className="ml-auto">
            <Nav.Link><Link to="/discover">Discover</Link></Nav.Link>
            <Nav.Link>My Groups</Nav.Link>
            <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

     
      </>
    );
  }
}

export default Header;
