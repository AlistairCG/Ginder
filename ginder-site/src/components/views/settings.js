import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Header from '../utils/header'

import settingsPage from '../../images/SettingsPage.png'

class Settings extends React.Component {

    render() {
        return (
        <div>
            <Header isGuest="false" />
            <Container>
                <Image src={settingsPage} width="100%"></Image>
            </Container>
        </div>
        )
    }
}

export default Settings