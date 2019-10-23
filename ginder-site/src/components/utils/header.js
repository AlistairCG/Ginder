import React from "react";
import { Navbar, NavDropdown, Nav, Form, InputGroup, FormControl, Button } from "react-bootstrap";

const GinderStyle = {
  paddingLeft: '3%',
  fontSize: "200%",
  fontFamily: "'Montserrat', sans-serif;"
}

function Header(props) {
  if(props.isGuest=="true"){  
  return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand style={GinderStyle} href="/">Ginder</Navbar.Brand>

        <Form inline>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              className="mr-sm-2"
            />
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">**</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              className="mr-sm-2"
            />
          </InputGroup>
          
          <Button variant="success" href="/homepage">Log In</Button>
        </Form>

      </Navbar>
    );
  }
  else{
    return(
      <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand style={GinderStyle} href="/">Ginder</Navbar.Brand>

      <Form inline>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">&#x1F50E;</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            className="mr-sm-2"
          />
        </InputGroup>
        
        <Button variant="secondary" href="/">Log Out</Button>
      </Form>

    </Navbar>
    )
  }
}

export default Header;