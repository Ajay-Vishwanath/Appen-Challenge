import React, { Component } from 'react';
import './App.css';
import Weatherbot from './components/Weatherbot'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Weatherbot />
      </div>
    );
  }
}

export default App;
