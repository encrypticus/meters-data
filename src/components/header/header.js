import React from 'react';
import {Link} from 'react-router-dom';
import Select from '$c/select';
import './header.css';

const Header = () => {
  return (
    <header className="header row">
      <div className="logo text-dark">{`Сегодня ${new Date().toLocaleDateString()}`}</div>
      <Select/>
    </header>
  );
};

export default Header;
