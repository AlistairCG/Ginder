import React from 'react'
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import Header from '../headers/header';
import imgtheme from '../../images/gindertheme.png';
import img from '../../images/ginderhomev5.png';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

class Home extends React.Component {

    render() {
        return (
            <div>
                <SectionWipesStyled>
                    <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
                        <Scene pin>
                            <div className="panel wallpaper"></div>
                        </Scene>
                        <Scene pin>
                            <div className="panel wallpapertheme">
                                <img style={{paddingTop: "80px"}} src={require("../../images/whyginder.png")}></img>
                                <div>
                                  Have you ever had trouble trying to rise up in the competitive scene, but can't do 
                                  it solo? Trying to finish in-game events that require you to be in a group, but also
                                  can't find a group? Ginder allows you to match up with other players that meet your
                                  requirements so that you can enjoy the game you love and make friends.
                                </div>

                                <div style={{paddingTop: "50px"}}>
                                </div>
                            </div>
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
    font-size: 20px;
  }
  
  .panel div { 
    position: relative;
    display: block;
    overflow: visible;
    top: 20%;
    left: 35%;
    font-size: 20px;
    color: white;
    width: 600px;
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

const SplitTextStyled = styled.div`
  overflow: hidden;
  text-align: center;
  
  .section {
    height: 100vh;
  }
  .textContainer {
    position: relative;
    display: inline-block;
    transform-origin: center;
  }
  .text, .text2 {
    position: relative;
    font-size: 80px;
    font-weight: bold;
    display: inline-block;
  }
`;