import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Header from "../utils/header";

class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <Header isGuest="false" />
        <Tab.Container defaultActiveKey="profile">
          <Row>
            <Col sm={3}>
              <Nav fill variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="profile" >Profile</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="findFriends">Find Friends</Nav.Link>
                  
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="chats">Chats</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="questionnaire">Questionnaire</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="linkAccounts">Link Accounts</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="settings">Settings</Nav.Link>
                </Nav.Item>

              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="profile">
                  <h3>Profile section</h3>
                </Tab.Pane>

                <Tab.Pane eventKey="findFriends">
                  <h3>Find Friends section</h3>
                </Tab.Pane>

                <Tab.Pane eventKey="chats">
                  <h3>Chats section</h3>
                </Tab.Pane>

                <Tab.Pane eventKey="questionnaire">
                  <h3>Questionnaire section</h3>
                </Tab.Pane>

                <Tab.Pane eventKey="linkAccounts">
                  <h3>Link Accounts section</h3>
                </Tab.Pane>

                <Tab.Pane eventKey="settings">
                  <h3>Settings section</h3>
                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default UserHomePage;
