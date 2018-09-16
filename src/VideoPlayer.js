import React, { Component } from 'react';

// let movieFile = "movies/Horror/foo.mp4"
let movieURL =  `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/watch`

class VideoPlayer extends Component {

  render() {
    return (
      <video key={this.props.movieFile} className="video-player" id="videoPlayer" width="1080" controls>
        <source src={`${movieURL}/?filePath=${this.props.movieFile}`} type="video/mp4"></source>
      </video>
    );
  }
}

export default VideoPlayer;
