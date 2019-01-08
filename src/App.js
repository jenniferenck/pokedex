import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

export { App };
