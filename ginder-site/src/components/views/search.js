import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Header from '../utils/header'

import searchPage from '../../images/SearchPage.png'

class Search extends React.Component {

    render() {
        return (
        <div>
            <Header isGuest="false" />
            <Container>
                <Image src={searchPage} width="100%"></Image>
            </Container>
        </div>
        )
    }
}

export default Search