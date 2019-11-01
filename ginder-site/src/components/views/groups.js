import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class Groups extends React.Component{
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <div style={wallPaper}>
                    <div style={loginForm}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{color: "red"}}>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                    We'll never share your username with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{color: "red"}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>

                            <div style={{textAlign: 'center'}}>
                                <Button variant="primary" type="submit" className="btn btn-danger">
                                Link on
                                </Button>
                            </div>
                        </Form>
                    </div>

                </div>
            </div>
        );
    }
}

export default Groups

const wallPaper = {
    backgroundImage: 'url(' + require('../../images/androidBackground.png') + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%'
};

const loginForm = {
    width: '40%',
    paddingTop: '130px',
    paddingLeft: '150px'
}