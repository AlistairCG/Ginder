import React from 'react';
import Header from './utils/header';
import Footer from './utils/footer';
import Home from './components/homepage';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
