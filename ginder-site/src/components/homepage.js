import React from 'react'
import Logo from "../images/grinder.jpg";

class Homepage extends React.Component {
    render(){
        return (
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <h1>Where grinders meet</h1>
                    <img src={Logo}/>
                </div>
            </div>
        );
    }
}

export default Homepage