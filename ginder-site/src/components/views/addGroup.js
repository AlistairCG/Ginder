import React from "react";
import Header from "../utils/header";

import { Col, Row, Card, Form, Button } from "react-bootstrap";

function addGroup(props) {
  return (
    <div>
      <Header isGuest="false" />
      <br></br>
      <Row>
        <Col sm="4"></Col>
        <Col sm="4">
          <br></br>
          <Card bg="light">
            <Card.Body>
              <div style={{ textAlign: "center" }}>
                <h3>Create Group</h3>
              </div>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control placeholder="Group Name" />
                </Form.Group>

                <Form.Group controlId="formIsPrivate">
                  <Form.Check type="checkbox" label="Private Group" />
                  <sub>Only your friends can join this group.</sub>
                </Form.Group>

                <Form.Group controlId="formGroupDescription">
                  <Form.Label>Group Description</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                {/* Add Friends */}
                <Form.Group controlId="formFriendsToInvite">
                  <Form.Label>Invite Friends</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>Kawhi Leonard</option>
                    <option>Larry Bird</option>
                    <option>Michael Jordan</option>
                    <option>Kobe Bryant</option>
                    <option>Lebron James</option>
                  </Form.Control>
                </Form.Group>

                <div style={{ textAlign: "center" }}>
                  <Button variant="outline-danger" text="white" href="/groups">
                    Cancel
                  </Button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Button
                    variant="outline-success"
                    type="submit"
                    text="white"
                    href="/groups"
                  >
                    Create
                  </Button>
                  <br></br>
                  <br></br>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col sm="4"></Col>
      </Row>
    </div>
  );
}

export default addGroup;
