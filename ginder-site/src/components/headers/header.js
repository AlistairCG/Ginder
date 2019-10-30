import React from "react";
import { Navbar, Nav, Form, Button, Row, Col, Image } from "react-bootstrap";

import settings from "../../images/settings.png"
import inbox from "../../images/inbox.png"
import notif from "../../images/notification.png"


const myStyle = {
  color: '#4b0b0b',
  backgroundColor: '#f4ad3d',
  fontFamily: 'Krungthep',
  fontSize: '120%',
  padding: '10pt'
}

const myStyle2 = {
  color: 'white',
  backgroundColor: '#f4ad3d',
  fontFamily: 'Krungthep',
  fontSize: '40%'
}

const myStyle3 = {
  color: '#4b0b0b',
  backgroundColor: '#f4ad3d',
  fontFamily: 'Krungthep',
  fontSize: '200%'
}



function Header(props) {
    if(props.isGuest=="true") {
    return (
      <div style={myStyle}> 
      <Navbar  style={myStyle} expand="lg">
        <Navbar.Brand  style={myStyle3} href="/">GINDER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>

          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Form.Group>
          <Row>
              <Form.Label>username</Form.Label>
              <Col>
              <Form.Control type="username"></Form.Control>
              <Form.Text style={myStyle2 }>Need an account? Register</Form.Text>
              </Col>
          </Row>
          </Form.Group>

          <Form.Group>
              <Form.Label>password</Form.Label>
              <Col>
              <Form.Control type="password"></Form.Control>
              <Form.Text style={myStyle2 }>Forgot your password?</Form.Text>

              </Col>

          
          </Form.Group>
          

          
          <Button variant="success" href="/homepage">login</Button>
        </Form>
      </Navbar>
    
      </div>
      
    );
    
  } else{
    return (
      <div style={myStyle}> 
      <Navbar  style={myStyle} expand="lg">
        <Navbar.Brand  style={myStyle3} href="/">GINDER</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            {/* <Nav.Link href="/login">Login</Nav.Link> */}
            {/* <Nav.Link href="/groups">Sign out</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Form inline>
          <Form.Group>
          <Row>
              <Form.Label>username</Form.Label>
              <Col>
              <Form.Control type="username"></Form.Control>
              <Form.Text style={myStyle2 }>Need an account? Register</Form.Text>
              </Col>
          </Row>
          </Form.Group>

          <Form.Group>
              <Form.Label>password</Form.Label>
              <Col>
              <Form.Control type="password"></Form.Control>
              <Form.Text style={myStyle2 }>Forgot your password?</Form.Text>

              </Col>

          
          </Form.Group>

          
          <Button variant="success" href="/homepage">login</Button>
        </Form> */}
        <p>sample_user</p>
        <Image
        style = {{
                        width: '2%',
                        height: '2%',
                    }}
                    src={notif}>
        </Image>
        <Image
        style = {{
                        width: '2%',
                        height: '2%',
                    }}
                    src={inbox}>
        </Image>
        <Image
        style = {{
                        width: '2%',
                        height: '2%',
                    }}
                    src={settings}>
        </Image>
        
      </Navbar>
    
      </div>
    )

}
}
export default Header;
