import React from "react";

import {
  Container,
  Col,
  Carousel,
  Form,
  Button,
  Card,
  Tab,
  Tabs,
  Image
} from "react-bootstrap";

import logo from "../../images/logo.png"

const tabStyle = {
  backgroundColor: "#e6e6e6",
  margin: 0,
  height: '100%'
}

class Home extends React.Component {
  render() {
    return (
      <div style={{height: '100vh', overflow: 'hidden'}}>
       
        <br></br>
        <div style={{zIndex: 99999999, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0}}></div>
        <Container fluid>
              <Carousel controls={false} indicators={false} interval={2000} className="custom-carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images8.alphacoders.com/532/thumb-1920-532407.jpg"
                    alt="Last of Us"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="https://images.everyeye.it/img-notizie/nba-2k20-demo-gratuita-pubblicata-21-agosto-ps4-xbox-one-switch-v4-390542.jpg" alt="NBA 2K20" />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://steamcdn-a.akamaihd.net/steam/apps/442010/ss_27397db724cfd5648655c1056ff5d184147a4c50.1920x1080.jpg?t=1472055435"
                    alt="Dark Souls"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="https://i.pinimg.com/originals/8d/bc/e3/8dbce31c799d1093017741ce70e04a05.jpg" alt="FIFA 19" />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp3538012.jpg"
                    alt="Super Smash Bros Brawl"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://assets1.ignimgs.com/2017/07/17/old-school-runescape-mobile-21-1500316802736.jpg"
                    alt="Super Smash Bros Brawl"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTcqEduvPwqDOjSHxH2q4jCQ3v8blQ_tdV3l5AT8_pKd25GdsTcYN5TRZyRQ_9XuatKxdHvJD3CUlkpuUtvIIZnSrb8ZWwpH4G2SVAMGQ96KPPGfDWSFw7f4N8IKuHufahmmA6tzta85yeRoxOhmCo_nFCNvTRWk_euIpkNEPdNxsI-&h=1080&w=1920&format=jpg" alt="Halo" />
                </Carousel.Item>

                <Carousel.Item>
                  <img className="d-block w-100" src="https://stmed.net/sites/default/files/call-of-duty%3A-modern-warfare-remastered-hd-wallpapers-32862-3539296.jpg" alt="Call of Duty" />
                </Carousel.Item>
              </Carousel>


            <Col style={{margin: '0 auto', zIndex: 9999999999}} sm="4">
              <br></br> <br></br>
              <Tabs defaultActiveKey="Login" id="home-tab" style={tabStyle}>
                
                <Tab eventKey="Login" title="Login">
                  <Card bg="light">
                    <Card.Body>
                      <div style={{textAlign: 'center'}}>
                      <Image src={logo} thumbnail></Image>
                      </div>
                      <hr></hr>
                      <Form>
                        <Form.Group controlId="formUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>

                        <div style={{ textAlign: "center" }}>
                          <Button
                            variant="outline-success"
                            type="submit"
                            text="white"
                            href="/homepage"
                          >
                            Log in
                          </Button>
                          <br></br>
                          <br></br>

                          <Button variant="outline-warning" type="submit">
                            Forgot Username or Password
                          </Button>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab>

                <Tab eventKey="Signup" title="Signup">
                  <Card bg="light">
                    <Card.Body>
                    <div style={{textAlign: 'center'}}>
                    <Image src={logo} thumbnail></Image>
                    </div>
                    <hr></hr>
                      <Form>
                        <Form.Row>
                          <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                            />
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
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>

                        <Form.Group id="formGridCheckbox">
                          <Form.Check
                            type="checkbox"
                            label="I confirm that I am over the age of 13"
                          />
                        </Form.Group>

                        <Button
                          variant="outline-primary"
                          type="submit"
                          text="white"
                        >
                          Sign me up!
                        </Button>
                      </Form>
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </Col>

        </Container>
        <br></br>
      </div>
    );
  }
}

export default Home;
