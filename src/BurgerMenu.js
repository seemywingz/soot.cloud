import React from 'react';
import { stack as Menu } from 'react-burger-menu'

class BurgerMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      genres: ["Kids", "Drama", "Action", "Horror"]
    }
  }

  render () {
    return (
      <Menu>
        <h3>Genres</h3>
        {this.state.genres.map((genre, i )=> {
          return <a id={genre} key={i} className="menu-item">{genre}</a>
        })}
      </Menu>
    );
  }
}

export default BurgerMenu;