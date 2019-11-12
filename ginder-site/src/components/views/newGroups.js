import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class NewGroups extends React.Component {
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <div style={wallPaper}>
                    <div style={loginForm}>
                        <Form>
                            <h1 style={{ textAlign: 'center', color: 'red', paddingBottom: '50px' }}>Create your group</h1>
                            <Form.Group>
                                <Form.Label style={{ color: "red" }}>Group name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ color: "red" }}>Group introduction</Form.Label>
                                <Form.Control as="textarea" rows="5" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ color: "red" }}>Group status</Form.Label>
                                <Form.Control as="select">
                                    <option>Public</option>
                                    <option>Private</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ color: "red" }}>Group level</Form.Label>
                                <Form.Control as="select">
                                    <option>Free</option>
                                    <option>Moderate</option>
                                    <option>Competitive</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ color: "red" }}>Required age</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <div style={{ textAlign: 'center' }}>
                                <Button variant="primary" type="submit" className="btn btn-danger">
                                    Create
                            </Button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
}

export default NewGroups;

const wallPaper = {
    backgroundImage: 'url(' + require('../../images/newgroupsbackground.png') + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
};

const loginForm = {
    width: '40%',
    margin: 'auto',
    paddingTop: '50px'
}