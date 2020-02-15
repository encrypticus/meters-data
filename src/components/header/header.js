import React from 'react';
import MenuContainer from '$containers/menu';
import Hamburger from '$c/hamburger';
import './header.scss';

class Header extends React.Component {

  render() {
    return (
      <header className="page-header row">
        <div className="logo text-dark">
          <div>Показания счетчиков</div>
          <h5 className="logo__date">{`Сегодня ${new Date().toLocaleDateString()}`}</h5>
        </div>
        <Hamburger/>
        <MenuContainer/>
      </header>
    );
  }
}

export default Header;
