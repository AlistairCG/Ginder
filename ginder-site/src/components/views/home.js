import React from 'react'
import Header from '../headers/header';
import { Jumbotron, Image} from 'react-bootstrap';

import controller from "../../images/controller.png"
const myStyle = {
    color: '#4b0b0b',
    backgroundColor: '#8EADF4',
    fontFamily: 'Krungthep',
    fontSize: '200%'        
}

const myStyle2 = {
    color: '#4b0b0b',
    backgroundColor: '#8EADF4',
    fontFamily: 'Krungthep',
    fontSize: '100%'     
}

    
const divStyle = {
    display: 'flex',
    alignItems: 'center'
  };



class Home extends React.Component{
    render(){
        return(
            <div style={myStyle2}>
                <Header isGuest="true" /> 
                <div style={divStyle}>

                <div>
                <Jumbotron style={myStyle}>
                    <h1 style={myStyle}  align="center"> Meet other gamers</h1>
                    <p class="text-justify" align="center">
                    Tired of playing games by yourself?<br/>
                    Ginder provides suggestions to <br/>you’ll
                    never have to play alone again.
    
                    </p>

        
                </Jumbotron>

                </div>
                <div style={myStyle}>

                    <Image 
                    style = {{
                        width: '100%',
                        height: '100%'
                    }}
                    src={controller}
                >
                    </Image>
                </div>
                
                </div>
                </div>
            
            )
        }
    }

export default Home