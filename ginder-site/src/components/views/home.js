import React from "react";
import Header from "../utils/header";

import { Container, Row, Col, Carousel, Form, Button, Card } from "react-bootstrap";

import lastOfUs from "../../images/LastOfUs.jpg";
import doom from "../../images/Doom.jpg";
import portal from "../../images/portal.jpg";
import darkSouls from "../../images/darkSouls.jpg";
import streetFighter from "../../images/streetFighter.jpg";
import marioKart from "../../images/marioKart.jpg";
import halo from "../../images/halo.png";

const carouselStyle = {
  position: "auto",
  margin: "0",
  width: "auto",
  height: "300px",
  background: "transparent"
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header isGuest="true"/>
        <br></br>
        <Container>
          <Row>
            <Col sm="8">
              <Carousel style={carouselStyle}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={lastOfUs}
                    alt="Last of Us"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={doom} alt="Doom" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={portal} alt="Portal" />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={darkSouls}
                    alt="Dark Suls"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={streetFighter}
                    alt="Street Fighter"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={marioKart}
                    alt="Mario Kart"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src={halo} alt="Halo" />
                </Carousel.Item>
              </Carousel>
            </Col>
            
            <Col sm="4">
              <Card bg="light">
              <Card.Header>Sign Up</Card.Header>
              <Card.Body>
              <Card.Title>
                No Account? Make one!
              </Card.Title>
              <hr></hr>
              <Form>
                <Form.Row>
                  <Form.Group as={Col} controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formEmailAddress">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control placeholder="Email Address" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group id="formGridCheckbox">
                  <Form.Check type="checkbox" label="I confirm that I am over the age of 13" />
                </Form.Group>

                <Button variant="outline-primary" type="submit" text="white">
                  Sign me up!
                </Button>
              </Form>
              </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
