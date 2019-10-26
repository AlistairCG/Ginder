import React from "react";
import { Button, Form, Card, Row, Col } from "react-bootstrap";

import Header from "../utils/header";

class Login extends React.Component {
  render() {
    return (
      <div>
        <Header isGuest="true" />
        <Row>
          <Col />
          <Col xs={9} md={6}>
            <br></br>
            <Card bg="light">
              <Card.Body>
                  <Card.Title style={{textAlign: "center"}}>
                      L O G I N
                  </Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control placeholder="Username" />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div style={{ textAlign: "center" }}>
                    <Button
                      variant="outline-success"
                      type="submit"
                      text="white"
                    >
                      Log in
                    </Button>
                    <br></br>
                    <br></br>

                    <Button
                        variant="outline-primary"
                        type="submit"
                    >
                        Forgot Username/Password
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </div>
    );
  }
}

export default Login;
