import React from 'react'
import {Container, Image} from 'react-bootstrap'

import Header from '../utils/header.js'
import QuestionnairePage from '../../images/QuestionnairePage.png'

class Questionnaire extends React.Component {
    render() {
        return (
        <div>
            <Header isGuest="false" />
            <Container>
                <Image src={QuestionnairePage} width="100%"></Image>
            </Container>
        </div>
        )
    }
}

export default Questionnaire