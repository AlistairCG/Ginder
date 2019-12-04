import React from 'react'
import { Button, ListGroup, Container, Row, Col, Image, Card } from 'react-bootstrap'
import Header from '../utils/header';

class Profile extends React.Component {
    render() {
        return <div>
            <Header />
            <Container>
                <Row>
                    <Col xs lg="3">
                        <Row>
                            <Image style={{ width: '80%', margin: 25 }} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HvOnhCFw3xBzmeWyI5am1AHaHa%26pid%3DApi&f=1" roundedCircle />
                            <h1 style={{ margin: '0 auto' }}>Cameron</h1>
                        </Row>
                        <Row>
                            <a style={{ margin: '0 auto' }} href="#">Edit Profile</a>
                        </Row>
                        <Row>
                            <h2 style={{ fontWeight: 'bold', margin: '10 25' }}>BIO</h2>
                        </Row>
                        <Row>
                            <p style={{ margin: '10 25' }}>Video games have always been a part of my life. The first console I ever had was given to me by my grandmother. A translucent purple Gameboy Color packaged with Pokemon Gold. 10 years later, on my 18th birthday, I bought my final handheld console (for now) game, Pokemon Heart Gold for DS. Within that time I have enjoyed a plethora of console, pc and online games.</p>
                        </Row>
                    </Col>
                    <Col xs lg="1">

                    </Col>
                    <Col md="8">
                        <Row style={{ marginTop: 25 }}>
                            <Card border="primary" style={{ width: '100%' }}>
                                <Card.Header>Games</Card.Header>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row style={{ marginTop: 25 }}>
                            <Card border="success" style={{ width: '100%' }}>
                                <Card.Header>Groups</Card.Header>
                                <Card.Body>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </Card.Body>
                            </Card>
                        </Row>

                        <Row style={{ marginTop: 25 }}>
                            <Card border="danger" style={{ width: '100%' }}>
                                <Card.Header>Events</Card.Header>
                                <Card.Body>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </Card.Body>
                            </Card>
                        </Row>





                    </Col>
                </Row>
            </Container>

        </div >
    }
}

export default Profile