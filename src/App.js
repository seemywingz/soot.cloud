import React from 'react';
import BurgerMenu from './BurgerMenu.js';
import VideoPlayer from './VideoPlayer.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.playMovie = this.playMovie.bind(this)
    this.state = {
      playMovie: ""
    }
  }

  playMovie(movie){
    console.log(`Playing Movie ${movie}`)
    this.setState((state) =>{
      return {
        playMovie: movie
      }
    })
  }

  render() {
    let page = <h1>Soot Cloud</h1>
    // if (this.state.playMovie !== "") {
      console.log(`Loading Vidio ${this.state.playMovie}`)
      page = <VideoPlayer movieFile = {this.state.playMovie}></VideoPlayer>
    // }
    return <div className="App">
      <BurgerMenu playMovie = {this.playMovie}></BurgerMenu>
      {page}
    </div>
  }
}

export default App;


        /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Living Room Cloud</h1>
        </header> */