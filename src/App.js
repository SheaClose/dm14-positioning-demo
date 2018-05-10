import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Button from './components/Button';
import phone from './static/phone.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <div className="text-container">
            <h1 className="main-tag">The all new iCode 14!</h1>
            <h3>Learning the latest and greatest CSS Styles!</h3>
            <Button />
          </div>
          <img className="img" src={phone} alt="phone" />
        </main>
      </div>
    );
  }
}

export default App;
