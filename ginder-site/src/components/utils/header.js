import React from "react";
import { Navbar, NavDropdown, Nav, Form, InputGroup, FormControl, Button } from "react-bootstrap";

function GuestHeader() {
    return (
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">Ginder</Navbar.Brand>

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
          <Button variant="success">Log In</Button>
        </Form>

      </Navbar>
    );
}

export default GuestHeader;
