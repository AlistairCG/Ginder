import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import Header from "../utils/header";

//Style for Card columns
const cardDeckStyle = {
  margin: '2%'
}

class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <Header isGuest="false" />
        <CardDeck style={cardDeckStyle}>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/10x10" width="250" height="250"/>
            <Card.Body>
              <Card.Title>Profile</Card.Title>
              <Card.Text>
                Check your profile.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/10x10" width="250" height="250"/>
            <Card.Body>
              <Card.Title>Find Friends</Card.Title>
              <Card.Text>
                Find other gamers that share your interests.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/10x10" width="250" height="250" />
            <Card.Body>
              <Card.Title>Chats</Card.Title>
              <Card.Text>
                Check your messages.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

        </CardDeck>

        <CardDeck style={cardDeckStyle}>
          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/10x10" width="250" height="250"/>
            <Card.Body>
              <Card.Title>Questionnaire</Card.Title>
              <Card.Text>
                Answer some questions for accurate pairing with other users.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

          <Card className="h-100">
            <Card.Img variant="top" src="holder.js/10x10" width="250" height="250" />
            <Card.Body>
              <Card.Title>Link Accounts</Card.Title>
              <Card.Text>
                Link to your other accounts (like Steam, etc.)
              </Card.Text>
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
