import React from 'react';
import { stack as Menu } from 'react-burger-menu'

let genreURL =  `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/genre`

class BurgerMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      genres: ["Action", "Comedy", "Drama", "Horror", "Kids", "Marvel", "Teen", "TV Series"],
      movies: [],
      selectedGenre: ""
    }
  }

  getMovies(genre){
    fetch(`${genreURL}/${genre}`).then(res =>{
      return res.json()
    }).then(data => {
      // console.log(data.payload)
      this.setState((state)=>{
        if (this.state.selectedGenre === genre) {
          genre = ""
        }
        return {
          selectedGenre: genre,
          movies: data.payload.movieList
        }
      })
    })
  }

  render () {
    return (
      <Menu>
        <h3>Genres</h3>
        {this.state.genres.map((genre, i )=> {
          let item = <p key={i}> 
            <a id={genre} key={i} className="menu-item" onClick={()=>this.getMovies(genre)} style={{cursor: 'pointer'}}>{genre}</a>
          </p>
          if (this.state.selectedGenre === genre) {// show movies for genre in menue
            let movies = this.state.movies.map((movie, i) => {
              return <p key={i}>
                <a id={movie} key={i} className="menu-item" onClick={()=>this.props.playMovie(movie)} style={{cursor: 'pointer'}}>{movie}</a>
              </p>
            })
            item = <div key={i}> 
              <a id={genre} key={i} className="menu-item" onClick={()=>this.getMovies(genre)} style={{cursor: 'pointer'}}>{genre}</a>
              <br></br>
              {movies}
            </div>
          }
          return item
        })}
      </Menu>
    );
  }
}

export default BurgerMenu;