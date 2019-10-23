import React from 'react'

import Header from '../utils/header'

class UserHomePage extends React.Component{
    render(){
        return (
            <div>
            <Header isGuest="false" />
            <h1>UserHomePage works</h1>
            </div>
        );
    }
}

export default UserHomePage