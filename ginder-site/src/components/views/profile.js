import React from "react";
import Header from "../utils/header";

import {
  Card,
  Button,
  Container,
  Row,
  Image,
  Col,
  Table
} from "react-bootstrap";

import profilePic from "../../images/profile.png";

const cardStyle = {
  width: "100%",
  textAlign: "center"
};

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "2%",
  width: "50%"
};

function Profile(props) {
  return (
    <div>
      <Header isGuest="false" href="/userHomepage" />
      <Container style={{ margin: "2%" }}>
        <Row>
          <Col sm="4"></Col>
          <Col sm="6">
            <Card border="secondary" style={cardStyle}>
              <Image
                src={profilePic}
                height="200"
                width="200"
                style={imageStyle}
                roundedCircle
              />
              <Card.Body>
              <Button variant="outline-dark" href="/profile">
                  Change Profile Picture
                </Button>
                <br></br> <br></br>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Member since</td>
                        <td>Oct 21, 2019</td>
                      </tr>
                      <tr>
                        <td>Group sessions joined</td>
                        <td>972</td>
                      </tr>
                      <tr>
                        <td>Favourite Genres</td>
                        <td>FPS, Adventure RPG</td>
                      </tr>
                      <tr>
                        <td>Favourite Games</td>
                        <td>Call of Duty: Modern Warfare, Fallout 4, Kingdom Hearts</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-secondary" href="/profile">Edit Profile</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="4"></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
