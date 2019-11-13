import React from 'react'
import { Button, Modal, Container, Row, Col, Image, Card } from 'react-bootstrap'
import Header from '../headers/header';
import { Link } from 'react-router-dom'






class NewGroups extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            setShow: false
        }
    }

    handleClose = () => this.setState({ setShow: !this.state.setShow });
    handleShow = () => this.setState({ setShow: !this.state.setShow });

    render() {
        return <div>
            <Header />
            <Container>
                <>
                    <Button variant="primary" onClick={this.handleShow}>
                        Launch demo modal
      </Button>

                    <Modal show={this.state.setShow} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
          </Button>
                            <Button variant="primary" onClick={this.handleClose}>
                                Save Changes
          </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            </Container>

        </div >
    }
}

export default NewGroups