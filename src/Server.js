const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const dir = require('node-dir');
app.use(express.static(path.join(__dirname, '../build')));

require('dotenv').load();

let port = process.env.REACT_APP_API_PORT
let movieDir = process.env.REACT_APP_MOVIE_DIR

console.log("Starting App on Port: " + port)
app.listen(port);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/movies/list', (req, res) => {
  console.log("Getting Current List of Movies")
  var movieList = dir.files(movieDir, {sync:true});
  console.log("MOVIES",movieList)
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ 
    payload: {
      movieList: movieList
    },
    error: movieList.err
  }));
})

app.get('/movies', (req, res) => {
  // console.log("Starting Movie Stram for",req.query.filePath )
  const path = req.query.filePath
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] 
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
});
