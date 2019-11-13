import React from "react";
import Header from "../utils/header";

import { Container, Col, Row, Image, Button } from "react-bootstrap";

function Discover(props) {
  return (
    <div>
      <Header isGuest="false"></Header>
      <br></br>
      <Container>
        <Row>
          <Col sm="6" style={{ borderRight: "3px solid grey" }}>
            <h3 style={{ textAlign: "center" }}>Your Groups</h3>
            <table style={{ width: "100%", textAlign: "left" }}>
              <tbody>
                <tr>
                  <td>
                    <a href="/groups">
                      <Image
                        src="https://ih1.redbubble.net/image.724324398.8696/pp,650x642-pad,750x1000,f8f8f8.u5.jpg"
                        rounded="true"
                        width="100px"
                        height="100px"
                      ></Image>
                    </a>
                  </td>
                  <td>
                    <a href="/groups">Traverse Townfolks</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/groups">
                      <Image
                        src="https://vignette.wikia.nocookie.net/logopedia/images/9/9b/Super-Smash-Bros-Brawl-Logo-SSBB.png/revision/latest?cb=20190418215035"
                        rounded="true"
                        width="100px"
                        height="100px"
                        style={{ backgroundColor: "white" }}
                      ></Image>
                    </a>
                  </td>
                  <td>
                    <a href="/groups">SSB Brawlers</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr></hr>
          </Col>

          <Col sm="6">
          <div style={{textAlign:'center'}}>
          <Button variant="success" href="/addGroup">Create Group</Button>
          </div>
          <hr></hr>
          <h3 style={{ textAlign: "center" }}>Popular Groups</h3>
            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <a href="/groups">
                      <Image
                        src="https://ih0.redbubble.net/image.604708931.0354/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg"
                        rounded="true"
                        width="100px"
                        height="100px"
                      ></Image>
                    </a>
                  </td>
                  <td>
                    <a href="/groups">Counter Strike Official</a>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <a href="/groups">
                      <Image
                        src="https://i.pinimg.com/originals/3e/ce/2a/3ece2a1e5a5e5f430f5a530ba1104a14.jpg"
                        rounded="true"
                        width="100px"
                        height="100px"
                      ></Image>
                    </a>
                  </td>
                  <td>
                    <a href="/groups">Minecrafters</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr></hr>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Discover;
