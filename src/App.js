import React, { Component } from 'react';
import BurgerMenu from './BurgerMenu.js';
import logo from './logo.png';
import './App.css';

let movieFile = "movies/Bambi.mp4"
let movieURL =  process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT + "/movies/"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Living Room Cloud</h1>
        </header> */}
        <BurgerMenu></BurgerMenu>
        <p className="App-intro">
          <video id="videoPlayer" width="1080" controls>
            <source src={movieURL + "?filePath="+movieFile} type="video/mp4"></source>
          </video>
        </p>
      </div>
    );
  }
}

export default App;
