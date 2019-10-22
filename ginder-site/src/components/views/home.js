import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import logo from '../../assets/logo.png'

class Home extends React.Component {
    render() {
        return (
            <div style={container}>
                <div style={innerContainer}>
                    <img src={logo}></img>
                    <h2>Connect with gamers around the world.</h2>
                    <Form style={loginForm}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control style={formInput} type="email" placeholder="cooldog@ginder.com" />
                            <Form.Text className="text-muted">
                                We'll never share your username with anyone else.
                                </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control style={formInput} type="password" placeholder="********" />
                        </Form.Group>

                        <div>
                            <Button style={loginButton} variant="primary" type="submit" className="btn">
                                Sign On
                                </Button>
                            <a style={forgotPass}>
                                Forgot your password?
                               </a>
                        </div>
                    </Form>
                    <Row style={footer}>
                        <a>Don't have an account? Sign up.</a>
                    </Row>
                </div>
            </div>
        )
    }


}
const container = {
    backgroundColor: '#07374b',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const innerContainer = {
    textAlign: 'center',
    color: 'white'
}

const loginForm = {
    textAlign: 'left'
}

const formInput = {
    backgroundColor: '#07374b',
    border: 'none',
    borderBottom: '2px solid white',
    borderRadius: 0
}

const loginButton = {
    backgroundColor: '#ffcc61',
    height: 50,
    float: 'left',
    border: 'none'
}

const forgotPass = {
    float: 'right',
    marginTop: 10
}

const footer = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#123341',
    color: 'white',
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    height: 50,
}
export default Home