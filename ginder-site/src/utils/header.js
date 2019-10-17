import React from 'react';
import { Navbar } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return <><Navbar bg="light">
            <Navbar.Brand href="#home">Ginder</Navbar.Brand>
        </Navbar>
        </>
    }
}

export default Header;