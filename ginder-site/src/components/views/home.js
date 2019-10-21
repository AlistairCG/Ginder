import React from "react";
import GuestHeader from "../utils/header";

import { Container, Row, Col, Carousel } from "react-bootstrap";

import lastOfUs from "../../images/LastOfUs.jpg";
import doom from "../../images/Doom.jpg";
import portal from "../../images/portal.jpg";
import darkSouls from "../../images/darkSouls.jpg";
import streetFighter from "../../images/streetFighter.jpg";
import marioKart from "../../images/marioKart.jpg";


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
                    src={lastOfUs}
                    alt="Last of Us"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={doom}
                    alt="Doom"
                  />
                </Carousel.Item>
                
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={portal}
                    alt="Portal"
                  />
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
