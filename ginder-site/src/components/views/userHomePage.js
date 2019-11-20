import React from "react";
import { Card, CardDeck, Button, Image } from "react-bootstrap";
import Header from "../utils/header";
import profilePic from "../../images/profile.png"
import groupPic from "../../images/groups.png"
import chatsPic from "../../images/chats.png"
import questionnairePic from "../../images/questionnaire.png"
import searchPic from "../../images/search.png"

//Style for Card columns
const cardDeckStyle = {
  margin: '2%'
}

const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%"
};

class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <Header isGuest="false" />
        <CardDeck style={cardDeckStyle}>
          <Card border="primary" className="h-100">
            <Image src={profilePic} style={imageStyle} height="200" rounded/>
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                Check or manage your profile.
              </Card.Text>
              <Button variant="outline-primary" href="/profile">See Profile</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card border="warning" className="h-100">
            <Image src={groupPic} style={imageStyle} height="200" rounded/>
            <Card.Body>
              <Card.Title>Groups</Card.Title>
              <Card.Text>
                Create, join or manage groups.
              </Card.Text>
              <Button variant="outline-warning" href="/groups">Start Discovering</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card className="h-100" border="success">
          <Image src={chatsPic} style={imageStyle} height="200" rounded/>
            <Card.Body>
              <Card.Title>Chats</Card.Title>
              <Card.Text>
                Start and/or read your conversations
              </Card.Text>
              <Button variant="outline-success">Check Messages</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card className="h-100" border="info">
          <Image src={questionnairePic} style={imageStyle} height="200" rounded/>
            <Card.Body>
              <Card.Title>Questionnaire</Card.Title>
              <Card.Text>
                Answer questions for accurate pairing.
              </Card.Text>
              <Button variant="outline-info">Fill Questionnaire</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card border="light"className="h-100">
          <Image src={searchPic} style={imageStyle} height="200" rounded/>
            <Card.Body>
              <Card.Title>Search</Card.Title>
              <Card.Text>
                Looking for something?
              </Card.Text>
              <Button variant="outline-dark">Search</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/10x10" width="250" height="250"/>
            <Card.Body>
              <Card.Title>Settings</Card.Title>
              <Card.Text>
                Customize your experience.
              </Card.Text>
              <Button variant="outline-dark">Settings</Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default UserHomePage;
