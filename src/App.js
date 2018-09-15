import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let videoFile = "Bambi.mp4"
let videoURL =  process.env.REACT_APP_API_URL + ":" + process.env.REACT_APP_API_PORT + "/videos/"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Living Room Cloud</h1>
        </header>
        <p className="App-intro">
          <video id="videoPlayer" width="1080" controls>
            <source src={videoURL + videoFile} type="video/mp4"></source>
          </video>
        </p>
      </div>
    );
  }
}

export default App;
