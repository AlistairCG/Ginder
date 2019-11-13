import React from 'react'
import { Button, Badge, Toast, Container, Row, Col, Form, Modal, Card } from 'react-bootstrap'
import Header from '../headers/header';
import { Link } from 'react-router-dom'

class MyGroups extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            setShow: false,
            newGroupShow: false,
            groupDis: 'none',
            groupDescription: '',
            groupTitle: ''

        }
    }

    handleClose = () => this.setState({ setShow: !this.state.setShow });
    handleShow = () => this.setState({ setShow: !this.state.setShow });
    handleCreate = () => this.setState({ setShow: !this.state.setShow, newGroupShow: true, groupDis: 'block' });


    render() {
        return <div>
            <Header />
            <Container>
                <br />
                <Row>
                    <>
                        <Toast  style={{
      position: 'absolute',
      bottom: 25,
      zIndex: 99999999,
      right: 25,
    }} onClose={() => this.setState({newGroupShow: false})} show={this.state.newGroupShow} animation={true}>
                            <Toast.Header>
                               
                                <strong className="mr-auto">New Group</strong>
                     
                            </Toast.Header>
                            <Toast.Body>Woohoo, you created a new group!</Toast.Body>
                        </Toast>
                        <Modal show={this.state.setShow} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Create New Group</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>                        <Form>
                                <Form.Group>
                                    <Form.Label>Group name</Form.Label>
                                    <Form.Control onChange={(title) => {this.setState({groupTitle: title.target.value})}} type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label >Group introduction</Form.Label>
                                    <Form.Control  onChange={(title) => {this.setState({groupDescription: title.target.value})}} as="textarea" rows="5" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label >Group status</Form.Label>
                                    <Form.Control as="select">
                                        <option>Public</option>
                                        <option>Private</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label >Group culture</Form.Label>
                                    <Form.Control as="select">
                                        <option>Free</option>
                                        <option>Moderate</option>
                                        <option>Competitive</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Required age</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>


                            </Form></Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
          </Button>
                                <Button variant="primary" onClick={this.handleCreate}>
                                    Create
          </Button>
                            </Modal.Footer>
                        </Modal>
                    </>

                    <Col xs lg='10'>               <h1>My Groups</h1></Col>
                    <Col xs lg='2'> <Button onClick={this.handleShow} style={{ marginTop: 10 }} variant="warning">Create New Group</Button></Col>

                </Row>
                <br />
                <Row style={{display: this.state.groupDis}} xs lg='12'>
                    <Card className="bg-dark text-white" style={{ width: '100%' }}>
                        <Card.Img style={{ width: '100%', opacity: '0.5', overflow: 'hidden', height: 300 }} src="https://i.imgur.com/eTukKUB.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{this.state.groupTitle}</Card.Title>
                            <Card.Text>
                               {this.state.groupDescription}
    </Card.Text>
                            <Card.Text>1 Members</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
                <br />
                <Row xs lg='12'>
                    <Card className="bg-dark text-white" style={{ width: '100%' }}>
                        <Card.Img style={{ width: '100%', opacity: '0.5', overflow: 'hidden', height: 300 }} src="https://coverfiles.alphacoders.com/387/38728.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Legend of Zelda Game Lovers <Badge variant="danger">2</Badge></Card.Title>
                            <Card.Text>
                                The Legend of Zelda is a 1986 action-adventure video game developed and published by Nintendo and designed by Shigeru Miyamoto and Takashi Tezuka. Set in the fantasy land of Hyrule, the plot centers on a boy named Link, the playable protagonist, who aims to collect the eight fragments of the Triforce of Wisdom in order to rescue Princess Zelda from the antagonist, Ganon.
    </Card.Text>
                            <Card.Text>819 Members</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
                <br />
                <Row  style={{marginBottom: 25}} xs lg='12'>
                    <Card className="bg-dark text-white" style={{ width: '100%' }}>
                        <Card.Img style={{ width: '100%', opacity: '0.5', overflow: 'hidden', height: 300 }} src="https://coverfiles.alphacoders.com/768/76881.png" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Legend of Zelda Game Fans</Card.Title>
                            <Card.Text>
                                The first game of The Legend of Zelda series, it was originally released in Japan as a launch game for the Family Computer Disk System peripheral in 1986.  </Card.Text>
                            <Card.Text>120 Members</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <br />
                    <br />
                </Row>
            </Container>

        </div >
    }
}

export default MyGroups