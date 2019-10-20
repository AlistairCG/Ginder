import React from 'react'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Header from '../headers/header';
import imgtheme from '../../images/gindertheme.png';
import img from '../../images/ginderhomev4.png';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <SectionWipesStyled>
                    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                        <Scene pin>
                            <div className="panel wallpaper"></div>
                        </Scene>
                        <Scene pin>
                            <div className="panel wallpapertheme"><span>Panel</span></div>
                        </Scene>
                        <Scene pin>
                            <div className="panel green"><span>Panel</span></div>
                        </Scene>
                        <Scene pin>
                            <div className="panel bordeaux"><span>Panel</span></div>
                        </Scene>
                    </Controller>
                </SectionWipesStyled>
            </div>

        );
    }
}

export default Home

const SectionWipesStyled = styled.div`
  overflow: hidden;
  .panel {
    height: 90vh;
    width: 100vw;
    text-align: center;
  }
  
  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 80px;
  }
  
  .panel.wallpapertheme { 
    background-image: url(${imgtheme});
  }

  .panel.wallpaper {
    background-image: url(${img});
  }
  
  .panel.turqoise {
    background-color: #38ced7;
  }
  
  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }
  
  .panel.bordeaux {
    background-color: #953543;
  }
`;