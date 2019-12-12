import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Header from '../utils/header'

import chatsPage from '../../images/chatsPage.png'

class Chats extends React.Component {

    render() {
        return (
        <div>
            <Header isGuest="false" />
            <Container>
                <Image src={chatsPage} width="100%"></Image>
            </Container>
        </div>
        )
    }
}

export default Chats