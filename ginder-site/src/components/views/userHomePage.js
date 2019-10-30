import React from 'react';
import Header from "../headers/header.js"
import { Tab, Nav, Row, Col, Image, Form, FormControl, Button } from 'react-bootstrap';

import controller from "../../images/controller.png"
import friends from "../../images/friends.png"
import groups from "../../images/groups.png"
import global from "../../images/global.png"
import search from "../../images/loupe.png"


const myStyle = {
    color: '#4b0b0b',
    backgroundColor: '#8EADF4',
    fontFamily: 'Krungthep',
    
}
class UserHomePage extends React.Component{
    render(){
        return (
            <div style={myStyle}>
                <Header isGuest=""/>
                <Tab.Container defaultActiveKey="search" >
                    <Row >
                        <Col sm={3}>
                            <Nav fill variant="tabs" className="flex-column">
                            <Nav.Item>
                                    <Nav.Link eventKey="search">
                                    <Image
                                        style = {{
                                            width: '30%',
                                            height: '30%'
                                        }}
                                        src={search}
                                    >
                                    </Image> <br/> Search</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="friends">
                                    <Image
                                        style = {{
                                            width: '30%',
                                            height: '30%'
                                        }}
                                        src={friends}
                                    >
                                    </Image> <br/> Friends</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="games">
                                    <Image
                                        style = {{
                                            width: '30%',
                                            height: '30%'
                                        }}
                                        src={controller}
                                    >
                                    </Image> <br/> Games</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="groups">
                                    <Image
                                        style = {{
                                            width: '30%',
                                            height: '30%'
                                        }}
                                        src={groups}
                                    >
                                    </Image> <br/> Groups</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="discover">
                                    <Image
                                        style = {{
                                            width: '30%',
                                            height: '30%'
                                        }}
                                        src={global}
                                    >
                                    </Image> <br/> Discover</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="search">
                                    <div 
                                        style={{display:'flex', 
                                        justifyContent: 'center',
                                        transform: 'translate(-20%, 60%)'}}>
                                    <Form >
                                        <FormControl type="text" placeholder="Search friends, games, consoles" className="mr-sm-2" />
                                            <Button variant="outline-secondary" size="sm">
                                                <Image
                                                style = {{
                                                    width: '4%',
                                                    height: '4%'
                                                }}
                                                src={search}>
                                                </Image>
                                            </Button>
                                        </Form>
                                    </div>
                                    
                                </Tab.Pane>
                                <Tab.Pane eventKey="friends">
                                    <p>Friends</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="games">
                                    <p>Games</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="groups">
                                    <p>Groups</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="discover">
                                    <p>Discover</p>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Col>
                        
                    </Row>
                </Tab.Container>
            </div>
        )
        
    }
}

export default UserHomePage