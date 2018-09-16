import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu.js';
// import VideoPlayer from './VideoPlayer.js';
import './App.css';
import { height } from 'window-size';

class App extends Component {
  constructor(){
    super();
    this.state = {
      playMovie: ""
    }
  }
  render() {
    return (
      
      <div className="App">
        <BurgerMenu></BurgerMenu>
          <h1>Soot Cloud</h1>
      </div>
    );
  }
}

export default App;


        /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Living Room Cloud</h1>
        </header> */