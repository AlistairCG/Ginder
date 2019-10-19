import React from "react";
import GuestHeader from "../utils/header";

import { Container, Row, Col, Carousel } from "react-bootstrap";

import nintendoLogo from "../../images/carousel-nintendo-switch.jpg";
import pcImage from "../../images/carousel-pc.jpg";
import computerImage from "../../images/carousel-pc2.jpg"
import ps4Logo from "../../images/carousel-playstation-logo.jpg"
import ps4Controller from "../../images/carousel-ps4-controller.jpg"


class Home extends React.Component {
  render() {
    return (
      <div>
        <GuestHeader />
        <br></br>
        <Container>
          <Row>
            <Col sm="8">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={nintendoLogo}
                    alt="Nintendo Logo"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={pcImage}
                    alt="PC Image"
                  />
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={computerImage}
                    alt="Computer Image"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ps4Logo}
                    alt="PS4 Logo"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ps4Controller}
                    alt="PS4 Controller"
                  />
                </Carousel.Item>

              </Carousel>
            </Col>
            <Col sm="4">
                Sign up Form!
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
