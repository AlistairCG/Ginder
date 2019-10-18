import React from 'react';
import Header from './utils/header';
import Home from './components/homepage';
import Logo from "./images/grinder.jpg";
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <div>
            <h1>Where grinders meet</h1>
            <img src={Logo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
