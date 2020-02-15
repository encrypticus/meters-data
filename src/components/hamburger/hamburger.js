import React from 'react';
import './hamburger.scss';

class Hamburger extends React.Component {

  render() {
    return (
      <a className="hamburger hamburger--arrowturn" href="#mmenu">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
      </a>
    );
  }
}

export default Hamburger;