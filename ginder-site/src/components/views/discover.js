import React from 'react'
import { Button, Container, Row, Col, Card, Pagination, Navbar, NavDropdown, Nav, FormControl, Form  } from 'react-bootstrap'
import Header from '../headers/header';

class Discover extends React.Component {
    render() {
        return <div>
            <Header />

            <Navbar className="justify-content-between">
        <NavDropdown title="Filter" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Newest</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Most Popular</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Most Events</NavDropdown.Item>
        </NavDropdown>
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>

            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/uODKrZnGk7g/maxresdefault.jpg" />
                            <Card.Body>
                                <Card.Title>Jumanji!</Card.Title>
                                <Card.Text>
                                    Join the Jumanji club to get connected with thousands of fellow Jumanji players across the globe.
    </Card.Text>
                                <Row>
                                    <Col>
                                        <Button variant="secondary">Details</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="primary">Join Group</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Pagination style={{ margin: '25px auto' }}>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Row>
            </Container>

        </div>
    }
}

export default Discover