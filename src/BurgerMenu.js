import React from 'react';
import { stack as Menu } from 'react-burger-menu'

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <h3>Genre</h3>
        <a id="kids" className="menu-item">Kids</a>
        <a id="action" className="menu-item">Action</a>
        <a id="drama" className="menu-item">Drama</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default BurgerMenu;